<?php

namespace App\Http\Controllers;

use App\Enums\FormStatus;
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
        $user_id = Auth::id();
        MetadataStatisticForm::create([
            ...$request->validated(),
            'status' => FormStatus::Draft->value,
            'user_id' => $user_id
        ]);

        return redirect()->route('dashboard')->with('success', "Formulir berhasil disimpan");
    }

    public function update($id)
    {
        $form = MetadataStatisticForm::find($id);

        if (!$form || ($form->user_id !== Auth::id())) {
            return redirect()->route('metadata');
        }

        return Inertia::render('metadata/metadata', [
            "metadata_form" => $form
        ]);
    }

    public function destroy($id): RedirectResponse
    {
        $user_id = Auth::id();
        $form = MetadataStatisticForm::find($id);

        if (!$form) {
            return redirect()->back()->with('error', 'Metadata tidak ditemukan');
        }

        if ($form->user_id === $user_id) {
            $form->delete();
            return redirect()->back()->with('success', "Metadata {$form->activity_title} berhasil dihapus");
        }

        return redirect()->back()->with('error', 'Anda tidak memiliki izin untuk mengakses metadata ini');
    }
}
