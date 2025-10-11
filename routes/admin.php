<?php

use App\Http\Controllers\Admin\ApiAccessManagementController;
use App\Http\Controllers\Admin\MetadataManagementController;
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
    
    Route::controller(ApiAccessManagementController::class)
        ->prefix('manage-api')
        ->group(function () {
            Route::get('/', 'index')->name('manage-api');
            Route::post('/{id}/approve', 'approveAccess')->name('manage-api.approve');
            Route::delete('/{id}', 'removeAccess')->name('manage-api.remove');
        });

    Route::controller(MetadataManagementController::class)
        ->prefix('manage-metadata')
        ->group(function () {
            Route::get('/', 'index')->name('manage-metadata');
            Route::post('/{id}/approve', 'approve')->name('manage-metadata.approve');
            Route::delete('/{id}', 'destory')->name('manage-metadata.destroy');
        });
});