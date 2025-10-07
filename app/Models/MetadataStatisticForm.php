<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MetadataStatisticForm extends Model
{
    /** @use HasFactory<\Database\Factories\MetadataStatisticFormFactory> */
    use HasFactory;

    protected $fillable = [
        // User
        'user_id', 'status',

        // Halaman Awal
        'activity_title', 'activity_year',
        'data_collection_approach_id', 'activity_sector_id',
        'statistical_activity_type_id', 'statistical_activity_recommendation',
        'recommendation_identity',

        // I. PENYELENGGARA
        'organizing_agency', 'organizing_agency_full_address',
        'organizing_agency_phone', 'organizing_agency_fax',
        'organizing_agency_email',

        // II. PENANGGUNG JAWAB
        'responsible_echelon_1_unit', 'responsible_echelon_2_unit',
        'technical_responsible_name', 'technical_responsible_position',
        'technical_responsible_address', 'technical_responsible_phone',
        'technical_responsible_fax', 'technical_responsible_email',

        // III. PERENCANAAN DAN PERSIAPAN
        'activity_background', 'activity_objective',
        'activity_planning_start_date', 'activity_planning_end_date',
        'design_start_date', 'design_end_date',
        'data_collection_start_date', 'data_collection_end_date',
        'data_processing_start_date', 'data_processing_end_date',
        'data_analysis_start_date', 'data_analysis_end_date',
        'result_dissemination_start_date', 'result_dissemination_end_date',
        'evaluation_start_date', 'evaluation_end_date',
        // One-to-many: collected_variables
        
        // IV. DESAIN KEGIATAN
        'activity_conduct_id', 'frequency_of_implementation_id',
        'data_collection_type_id', 'data_collection_coverage_id',
        // One-to-many: activity_regions
        // Many-to-many: data_collection_methods, data_collection_tools, data_collection_units

        // V. DESAIN SAMPEL
        'sample_design_type_id', 'final_stage_sampling_method_id',
        'probability_sampling_method_id', 'nonprobability_sampling_method_id',
        'final_stage_sampling_frame_id', 'overall_sample_fraction',
        'estimated_sampling_error', 'sampling_unit', 'observation_unit',

        // VI. PENGUMPULAN DATA
        'pilot_survey', 'nonresponse_adjustment',
        'data_collector_type_id', 'minimum_education_requirement_id',
        'number_of_supervisors', 'number_of_enumerators',
        'training_of_data_collector',
        // Many-to-many: data_quality_check_methods

        // VII. PENGOLAHAN DAN ANALISIS
        'editing_step', 'coding_step', 'data_entry_step',
        'validation_step', 'analysis_method_id',
        // Many-to-many: analysis_units, presentation_levels

        // VIII. DISEMINASI HASIL
        'printed_product', 'digital_product', 'microdata_product',
        'printed_release_date', 'digital_release_date', 'microdata_release_date',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // Select / Radio

    public function dataCollectionApproach(): BelongsTo
    {
        return $this->belongsTo(DataCollectionApproach::class);
    }

    public function activitySector(): BelongsTo
    {
        return $this->belongsTo(ActivitySector::class);
    }

    public function statisticalActivityType(): BelongsTo
    {
        return $this->belongsTo(StatisticalActivityType::class);
    }

    public function activityConduct(): BelongsTo
    {
        return $this->belongsTo(ActivityConduct::class);
    }

    public function frequencyOfImplementation(): BelongsTo
    {
        return $this->belongsTo(FrequencyOfImplementation::class);
    }

    public function dataCollectionType(): BelongsTo
    {
        return $this->belongsTo(DataCollectionType::class);
    }

    public function dataCollectionCoverage(): BelongsTo
    {
        return $this->belongsTo(DataCollectionCoverage::class);
    }

    public function sampleDesignType(): BelongsTo
    {
        return $this->belongsTo(SampleDesignType::class);
    }

    public function finalStageSamplingMethod(): BelongsTo
    {
        return $this->belongsTo(FinalStageSamplingMethod::class);
    }

    public function probabilitySamplingMethod(): BelongsTo
    {
        return $this->belongsTo(ProbabilitySamplingMethod::class);
    }

    public function nonprobabilitySamplingMethod(): BelongsTo
    {
        return $this->belongsTo(NonprobabilitySamplingMethod::class);
    }

    public function finalStageSamplingFrame(): BelongsTo
    {
        return $this->belongsTo(FinalStageSamplingFrame::class);
    }

    public function dataCollectorType(): BelongsTo
    {
        return $this->belongsTo(DataCollectorType::class);
    }

    public function minimumEducationRequirement(): BelongsTo
    {
        return $this->belongsTo(MinimumEducationRequirement::class);
    }

    public function analysisMethod(): BelongsTo
    {
        return $this->belongsTo(AnalysisMethod::class);
    }

    // Table

    public function collectedVariables(): HasMany
    {
        return $this->hasMany(CollectedVariable::class);
    }

    public function ActivityRegions(): HasMany
    {
        return $this->hasMany(ActivityRegion::class);
    }

    // Checkbox

    public function dataCollectionMethods(): BelongsToMany
    {
        return $this->belongsToMany(DataCollectionMethod::class);
    }
    
    public function dataCollectionTools(): BelongsToMany
    {
        return $this->belongsToMany(DataCollectionTool::class);
    }

    public function dataCollectionUnits(): BelongsToMany
    {
        return $this->belongsToMany(DataCollectionUnit::class);
    }

    public function dataQualityCheckMethods(): BelongsToMany
    {
        return $this->belongsToMany(DataQualityCheckMethod::class);
    }

    public function presentationLevels(): BelongsToMany
    {
        return $this->belongsToMany(PresentationLevel::class);
    }

    public function dataAnalysisUnits(): BelongsToMany
    {
        return $this->belongsToMany(DataAnalysisUnit::class);
    }
}
