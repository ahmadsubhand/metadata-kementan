<?php

namespace App\Http\Controllers\admin;

use App\Enums\FormStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\MetadataDraftRequest;
use App\Models\MetadataStatisticForm;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class MetadataController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('metadata/metadata');
    }

    public function saveAsDraft(MetadataDraftRequest $request): RedirectResponse
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
