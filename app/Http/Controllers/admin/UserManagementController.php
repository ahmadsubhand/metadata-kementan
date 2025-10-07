<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class UserManagementController extends Controller
{
    public function index(): Response
    {
        $users = DB::table('users')
            ->orderBy('approved_at','asc')
            ->orderBy('email_verified_at', 'desc')
            ->get();

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
        $user = DB::table('users')->where('id', $id)->select('name')->first();

        if (!$user) {
            return redirect()->back()->with('error', 'Pengguna tidak ditemukan');
        }

        DB::table('users')->where('id', $id)->delete();

        return redirect()->back()->with('success', "Pengguna {$user->name} berhasil dihapus");
    }
}
