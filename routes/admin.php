<?php

use App\Http\Controllers\Admin\UserManagementController;
use Illuminate\Support\Facades\Route;

Route::middleware('admin')->group(function() {
    Route::controller(UserManagementController::class)
        ->prefix('manage-user')
        ->group(function () {
            Route::get('/', 'index')->name('manage-user');
            Route::post('/{id}/approve', 'approveAccount')->name('manage-user.approve');
            Route::post('/{id}/make-admin', 'makeAdmin')->name('manage-user.admin');
            Route::delete('/{id}', 'destroyAccount')->name('manage-user.destroy');
        });
});