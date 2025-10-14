<?php

namespace App\Http\Controllers;

use App\Enums\ApiRequestStatus;
use App\Http\Requests\ApiTokenStoreRequest;
use App\Models\ApiTokenRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ApiTokenRequestController extends Controller
{
    // GET - Create or Update
    public function editOrCreate($id = null): Response
    {
        $api_token_request = ApiTokenRequest::find($id);

        if (!$id || !$api_token_request || ($api_token_request->user_id !== Auth::id())) {
            return Inertia::render('api');
        }

        return Inertia::render('api', [
            "api_token_request" => $api_token_request
        ]);
    }

    // POST - Create | PUT - Update
    public function updateOrStore(ApiTokenStoreRequest $request, ?int $id = null): RedirectResponse
    {
        $data = $request->validated();

        $user = Auth::user();

        $api_token_request = $id
            ? ApiTokenRequest::where('user_id', $user->id)->findOrFail($id)
            : $user->apiTokenRequests()->make();

        // NOTE !
        // IF USER UPDATE TOKEN WHICH ALREADY APPROVED, API TOKEN STILL ALIVE, ONLY STATUS WILL CHANGE TO PENDING

        $api_token_request->fill([
            ...$data,
            'status' => ApiRequestStatus::Pending,
        ]);

        $api_token_request->save();

        return redirect()->route('dashboard')->with('success', $id
            ? 'Pengajuan permintaan token API berhasil diperbarui'
            : 'Pengajuan permintaan token API berhasil dikirim'
        );
    }

    public function destroy($id): RedirectResponse
    {
        $user_id = Auth::id();
        $api_token_request = ApiTokenRequest::find($id);

        if (!$api_token_request) {
            return redirect()->back()->with('error', 'Token API tidak ditemukan');
        }

        if ($api_token_request->user_id === $user_id) {
            $api_token_request->delete();
            return redirect()->back()->with('success', "Token API {$api_token_request->application_name} berhasil dihapus");
        }

        return redirect()->back()->with('error', 'Anda tidak memiliki izin untuk mengakses token API ini');
    }

    public function generate($id): RedirectResponse
    {
        $user= Auth::user();
        $api_token_request = ApiTokenRequest::find($id);

        if (!$api_token_request) {
            return redirect()->back()->with('error', 'Token API tidak ditemukan');
        }

        if ($api_token_request->user_id !== $user->id) {
            return redirect()->back()->with('error', 'Anda tidak memiliki izin untuk mengakses token API ini');
        }

        if ($api_token_request->status != ApiRequestStatus::Approved->value) {
            return redirect()->back()->with('error', 'Pengajuan permintaan akses API Anda belum disetujui');
        }

        $message = '';
        $token_id = $api_token_request->personal_access_token_id;
        if ($token_id) {
            // Set to null first for avoid "FOREIGN KEY constraint failed" error
            $api_token_request->personal_access_token_id = null;
            $api_token_request->save();

            // Delete token
            $user->tokens()->where('id', $token_id)->first()->delete();
            $message = "Berhasil membuat ulang Token API aplikasi {$api_token_request->application_name}";
        } else {
            $message = "Token API aplikasi {$api_token_request->application_name} berhasil dibuat";
        }

        $token = $user->createToken($api_token_request->application_name);
        $api_token_request->personal_access_token_id = $token->accessToken->id;
        $api_token_request->save();
        return redirect()->back()
            ->with('success', $message)
            ->with('token', $token->plainTextToken);
    }
}
