<?php

namespace App\Http\Controllers\Admin;

use App\Enums\ApiRequestStatus;
use App\Http\Controllers\Controller;
use App\Models\ApiTokenRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class ApiAccessManagementController extends Controller
{
    public function index(Request $request): Response
    {
        $status = $request->validate([
            'status' => ['nullable', Rule::enum(ApiRequestStatus::class)],
        ])['status'] ?? 'all';

        $query = ApiTokenRequest::with([
            'user:id,name'
        ])
        ->orderBy('approved_at','asc')
        ->orderBy('updated_at', 'desc');

        if ($status !== 'all') {
            $query->where('status', $status);
        }

        $api_token_requests = $query->simplePaginate(10)->withQueryString();

        return Inertia::render('admin/manage-api', [
            'api_token_requests' => $api_token_requests
        ]);
    }

    public function approveAccess($id)
    {
        $api_request = ApiTokenRequest::find($id);
        if (!$api_request) {
            return redirect()->back()->with('error', 'Pengajuan permintaan akses API tidak ditemukan');
        }

        $api_request->approveAccess();

        return redirect()->back()->with('success', "Akses API untuk aplikasi {$api_request->application_name} berhasil disetujui");
    }

    public function removeAccess($id): RedirectResponse
    {
        $api_request = ApiTokenRequest::find($id);

        if (!$api_request) {
            return redirect()->back()->with('error', 'Akses API tidak ditemukan');
        }

        $api_request->delete();

        return redirect()->back()->with('success', "Akses API untuk aplikasi {$api_request->application_name} berhasil dihapus");
    }
}
