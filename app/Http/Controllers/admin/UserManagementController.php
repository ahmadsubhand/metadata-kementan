<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class UserManagementController extends Controller
{
    public function index(Request $request): Response
    {
        $status = $request->validate([
            'status' => 'nullable|in:approved,pending',
        ])['status'] ?? 'all';

        $query = DB::table('users')
            ->orderBy('approved_at','asc')
            ->orderBy('email_verified_at', 'desc');
        
        if ($status === 'pending') {
            $query->where('approved_at', null);
        } else if ($status === 'approved') {
            $query->where('approved_at', '!=', null);
        }

        $users = $query->simplePaginate(10)->withQueryString();

        return Inertia::render('admin/manage-user', [
            'users' => $users
        ]);
    }

    public function approveAccount($id)
    {  
        $user = DB::table('users')->where('id', $id)->select('name')->first();

        if (!$user) {
            return redirect()->back()->with('error', 'Pengguna tidak ditemukan');
        }

        DB::table('users')->where('id', $id)->update([
            'approved_at' => now()
        ]);

        return redirect()->back()->with('success', "Akun {$user->name} berhasil disetujui");
    }

    public function makeAdmin($id)
    {
        $user = DB::table('users')->where('id', $id)->select('name')->first();

        if (!$user) {
            return redirect()->back()->with('error', 'Pengguna tidak ditemukan');
        }

        DB::table('users')->where('id', $id)->update([
            'role' => 'admin'
        ]);

        return redirect()->back()->with('success', "Pengguna {$user->name} sekarang adalah Admin");
    }

    public function destroyAccount($id)
    {
        $user = DB::table('users')->where('id', $id)->select(['id', 'name'])->first();

        if ($user->id === 1) {
            return redirect()->back()->with('error', 'Tidak bisa menghapus akun Super Admin');
        }

        if ($user->id === Auth::id()) {
            return redirect()->back()->with('error', 'Tidak bisa menghapus akun sendiri');
        }

        if (!$user) {
            return redirect()->back()->with('error', 'Pengguna tidak ditemukan');
        }

        DB::table('users')->where('id', $id)->delete();

        return redirect()->back()->with('success', "Pengguna {$user->name} berhasil dihapus");
    }
}
