<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ApiTokenRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ApiAccessManagementController extends Controller
{
    public function index(): Response
    {
        $api_token_request = ApiTokenRequest::orderBy('updated_at', 'desc')->get();

        return Inertia::render('admin/manage-api', [
            'api_token_request' => $api_token_request
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
