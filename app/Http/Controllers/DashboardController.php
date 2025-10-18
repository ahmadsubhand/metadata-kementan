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
            // First page select option content
            'dataCollectionApproach:id,label',
            'activitySector:id,label',
            'statisticalActivityType:id,label',

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
        ->where('user_id', Auth::id())
        ->orderBy('approved_at','asc')
        ->orderBy('updated_at', 'desc')
        ->simplePaginate(10)
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

        $api_list = Auth::user()
            ->apiTokenRequests()
            ->orderBy('approved_at','asc')
            ->orderBy('updated_at', 'desc')
            ->simplePaginate(10)
            ->withQueryString();

        return Inertia::render('dashboard', [
            "forms" => $forms,
            'api_token_requests' => $api_list,
        ]);
    }
}
