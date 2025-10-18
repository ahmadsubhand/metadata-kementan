<?php

namespace App\Http\Controllers\Admin;

use App\Enums\FormStatus;
use App\Http\Controllers\Controller;
use App\Models\MetadataStatisticForm;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class MetadataManagementController extends Controller
{
    public function index(Request $request): Response
    {
        $status = $request->validate([
            'status' => ['nullable', Rule::enum(FormStatus::class)],
        ])['status'] ?? 'all';

        $query = MetadataStatisticForm::with([
            'user:id,name',

            // Checkbox
            'dataCollectionMethods:id',
            'dataCollectionTools:id',
            'dataCollectionUnits:id',
            'dataQualityCheckMethods:id',
            'analysisUnits:id',
            'presentationLevels:id',

            // Table
            'activityRegions',
            'collectedVariables'
        ])
        ->orderBy('approved_at','asc')
        ->orderBy('updated_at', 'desc');

        if ($status !== 'all') {
            $query->where('status', $status);
        }

        $metadata_forms = $query->simplePaginate(10)
            ->withQueryString()
            ->through(function ($item) {
                $arr = $item->toArray();

                $arr['data_collection_methods'] = $item->dataCollectionMethods->pluck('id')->all();
                $arr['data_collection_tools'] = $item->dataCollectionTools->pluck('id')->all();
                $arr['data_collection_units'] = $item->dataCollectionUnits->pluck('id')->all();
                $arr['data_quality_check_methods'] = $item->dataQualityCheckMethods->pluck('id')->all();
                $arr['analysis_units'] = $item->analysisUnits->pluck('id')->all();
                $arr['presentation_levels'] = $item->presentationLevels->pluck('id')->all();

                return $arr;
            });
        
        return Inertia::render('admin/manage-metadata', [
            'metadata_forms' => $metadata_forms
        ]);
    }

    public function approve($id): RedirectResponse
    {
        $metadata_form = MetadataStatisticForm::find($id);

        if (!$metadata_form) {
            return redirect()->back()->with('error', 'Metadata statistik tidak ditemukan');
        }

        $metadata_form->approve();

        return redirect()->back()->with('success', "Metadata statistik {$metadata_form->activity_title} berhasil disetujui");
    }

    public function destroy($id): RedirectResponse
    {
        $metadata_form = MetadataStatisticForm::find($id);

        if (!$metadata_form) {
            return redirect()->back()->with('error', 'Metadata statistik tidak ditemukan');
        }

        $metadata_form->delete();

        return redirect()->back()->with('success', "Metadata statistik {$metadata_form->activity_title} berhasil dihapus");
    }
}
