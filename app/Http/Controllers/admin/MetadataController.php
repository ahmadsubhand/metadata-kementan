<?php

namespace App\Http\Controllers\admin;

use App\Enums\FormStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\MetadataStoreRequest;
use App\Models\MetadataStatisticForm;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class MetadataController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('metadata');
    }

    /**
     * @param \App\Http\Requests\MetadataStoreRequest $request
     */
    public function saveAsDraft(MetadataStoreRequest $request): RedirectResponse
    {
        $user_id = Auth::user()->id;
        MetadataStatisticForm::create([
            ...$request->validated(),
            'status' => FormStatus::Draft->value,
            'user_id' => $user_id
        ]);

        return redirect()->route('dashboard')->with('success', "Formulir berhasil disimpan");
    }
}
