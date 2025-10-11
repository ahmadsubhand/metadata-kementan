<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MetadataStatisticForm;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MetadataManagementController extends Controller
{
    public function index(): Response
    {
        $metadata_forms = MetadataStatisticForm::with([
            'dataCollectionApproach:id,label',
            'activitySector:id,label',
            'statisticalActivityType:id,label'
        ])
        ->select([
            'id', 'activity_title', 'activity_year', 'data_collection_approach_id', 
            'activity_sector_id', 'statistical_activity_type_id', 'status'
        ])
        ->orderBy('approved_at','asc')
        ->orderBy('updated_at', 'desc')
        ->get();

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
