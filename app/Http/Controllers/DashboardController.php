<?php

namespace App\Http\Controllers;

use App\Models\MetadataStatisticForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $forms = MetadataStatisticForm::with([
            'dataCollectionApproach:id,label',
            'activitySector:id,label',
            'statisticalActivityType:id,label'
        ])
        ->select([
            'id', 'activity_title', 'activity_year', 'data_collection_approach_id', 
            'activity_sector_id', 'statistical_activity_type_id', 'status'
        ])
        ->where('user_id', Auth::id())
        ->orderBy('updated_at', 'desc')
        ->get();

        return Inertia::render('dashboard', [
            "forms" => $forms
        ]);
    }
}
