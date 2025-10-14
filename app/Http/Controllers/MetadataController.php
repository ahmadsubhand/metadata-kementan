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
    private function saveToDatabase($data, $formId, $status) 
    {
        $user = Auth::user();

        $form = $formId
            ? MetadataStatisticForm::where('user_id', $user->id)->findOrFail($formId)
            : $user->metadataStatisticForms()->make();

        // Normal input

        $form->fill([
            ...$data,
            'status' => $status,
        ]);

        $form->save();

        // Checkbox

        $relations = [
            'dataCollectionMethods' => 'data_collection_methods',
            'dataCollectionTools' => 'data_collection_tools',
            'dataCollectionUnits' => 'data_collection_units',
            'dataQualityCheckMethods' => 'data_quality_check_methods',
            'analysisUnits' => 'analysis_units',
            'presentationLevels' => 'presentation_levels',
        ];

        foreach ($relations as $relation => $key) {
            if (!empty($data[$key])) {
                $form->{$relation}()->sync($data[$key]);
            }
        }

        // Table 

        $form->collectedVariables()->delete();
        if (!empty($data['collected_variables'])) {
            $form->collectedVariables()->createMany($data['collected_variables']);
        }
        
        $form->activityRegions()->delete();
        if (!empty($data['activity_regions'])) {
            $form->activityRegions()->createMany($data['activity_regions']);
        }
    }

    // GET - Create or Update
    public function editOrCreate($id = null): Response
    {
        $form = MetadataStatisticForm::find($id);

        if (!$id || !$form || ($form->user_id !== Auth::id())) {
            return Inertia::render('metadata/metadata');
        }

        $relations = [
            'data_collection_methods' => $form->dataCollectionMethods()->pluck('data_collection_methods.id'),
            'data_collection_tools' => $form->dataCollectionTools()->pluck('data_collection_tools.id'),
            'data_collection_units' => $form->dataCollectionUnits()->pluck('data_collection_units.id'),
            'data_quality_check_methods' => $form->dataQualityCheckMethods()->pluck('data_quality_check_methods.id'),
            'analysis_units' => $form->analysisUnits()->pluck('analysis_units.id'),
            'presentation_levels' => $form->presentationLevels()->pluck('presentation_levels.id')
        ];

        return Inertia::render('metadata/metadata', [
            "metadata_form" => [
                ...$form->toArray(),
                ...$relations,
                'activity_regions' => $form->activityRegions->all(),
                'collected_variables' => $form->collectedVariables->all(),
            ]
        ]);
    }

    // POST - Create as Draft | PUT - Update as Draft
    public function saveAsDraft(MetadataDraftRequest $request, ?int $id = null): RedirectResponse
    {
        $data = $request->validated();

        $this->saveToDatabase($data, $id, FormStatus::Draft->value);

        return redirect()->route('dashboard')->with('success', $id
            ? "Metadata {$data['activity_title']} berhasil diperbarui"
            : "Metadata {$data['activity_title']} berhasil disimpan sebagai draft"
        );
    }

    // POST - Create as Pending | PUT - Update as Pending
    public function saveAsPending(MetadataDraftRequest $request, ?int $id = null): RedirectResponse
    {
        $data = $request->validated();

        $this->saveToDatabase($data, $id, FormStatus::Pending->value);

        return redirect()->route('dashboard')->with('success', $id
            ? "Metadata {$data['activity_title']} berhasil diperbarui dan dikumpulkan"
            : "Metadata {$data['activity_title']} berhasil dikumpulkan"
        );
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
