<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ApprovalPendingController extends Controller
{
    public function __invoke(Request $request): Response|RedirectResponse
    {
        return $request->user()->isApproved()
                    ? redirect()->intended(route('dashboard', absolute: false))
                    : Inertia::render('auth/approval-pending');
    }
}
