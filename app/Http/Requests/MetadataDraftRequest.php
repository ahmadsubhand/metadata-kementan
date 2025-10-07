<?php

namespace App\Http\Requests;

use App\Enums\BooleanType;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class MetadataDraftRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // Halaman awal
            'activity_title' => 'required|string|max:255',
            'activity_year' => 'required|integer|min:1900|max:' . date('Y'),
            'data_collection_approach_id' => 'required|exists:data_collection_approaches,id',
            'activity_sector_id' => 'required|exists:activity_sectors,id',
            'statistical_activity_type_id' => 'required|exists:statistical_activity_types,id',
            'statistical_activity_recommendation' => 'required|in:' . implode(',', array_column(BooleanType::cases(), 'value')),
            'recommendation_identity' => 'nullable|string|max:255',

            // I. PENYELENGGARA
            'organizing_agency' => 'nullable|string|max:255',
            'organizing_agency_full_address' => 'nullable|string|max:255',
            'organizing_agency_phone' => 'nullable|string|max:50',
            'organizing_agency_fax' => 'nullable|string|max:50',
            'organizing_agency_email' => 'nullable|email|max:255',

            // II. PENANGGUNG JAWAB
            'responsible_echelon_1_unit' => 'nullable|string|max:255',
            'responsible_echelon_2_unit' => 'nullable|string|max:255',
            'technical_responsible_name' => 'nullable|string|max:255',
            'technical_responsible_position' => 'nullable|string|max:255',
            'technical_responsible_address' => 'nullable|string|max:255',
            'technical_responsible_phone' => 'nullable|string|max:50',
            'technical_responsible_fax' => 'nullable|string|max:50',
            'technical_responsible_email' => 'nullable|email|max:255',

            // III. PERENCANAAN DAN PERSIAPAN
            'activity_background' => 'nullable|string',
            'activity_objective' => 'nullable|string',
            'activity_planning_start_date' => 'nullable|date',
            'activity_planning_end_date' => 'nullable|date',
            'design_start_date' => 'nullable|date',
            'design_end_date' => 'nullable|date',
            'data_collection_start_date' => 'nullable|date',
            'data_collection_end_date' => 'nullable|date',
            'data_processing_start_date' => 'nullable|date',
            'data_processing_end_date' => 'nullable|date',
            'data_analysis_start_date' => 'nullable|date',
            'data_analysis_end_date' => 'nullable|date',
            'result_dissemination_start_date' => 'nullable|date',
            'result_dissemination_end_date' => 'nullable|date',
            'evaluation_start_date' => 'nullable|date',
            'evaluation_end_date' => 'nullable|date',
            // collected_variables table

            // IV. DESAIN KEGIATAN
            'activity_conduct_id' => 'nullable|exists:activity_conducts,id',
            'frequency_of_implementation' => 'nullable|exists:frequency_of_implementations,id',
            'data_collection_type_id' => 'nullable|exists:data_collection_types,id',
            'data_collection_coverage_id' => 'nullable|exists:data_collection_coverages,id',
            // activity_regions table
            // Untuk checkbox banyak, validasi bisa menggunakan array
            // 'data_collection_methods' => 'nullable|array',
            // 'data_collection_methods.*' => 'exists:data_collection_methods,id',
            // 'data_collection_tools' => 'nullable|array',
            // 'data_collection_tools.*' => 'exists:data_collection_tools,id',
            // 'data_collection_units' => 'nullable|array',
            // 'data_collection_units.*' => 'exists:data_collection_units,id',

            // V. DESAIN SAMPEL
            'sample_design_type_id' => 'nullable|exists:sample_design_types,id',
            'final_stage_sampling_method_id' => 'nullable|exists:final_stage_sampling_methods,id',
            'probability_sampling_method_id' => 'nullable|exists:probability_sampling_methods,id',
            'nonprobability_sampling_method_id' => 'nullable|exists:nonprobability_sampling_methods,id',
            'final_stage_sampling_frame_id' => 'nullable|exists:final_stage_sampling_frames,id',
            'overall_sample_fraction' => 'nullable|integer',
            'estimated_sampling_error' => 'nullable|integer',
            'sampling_unit' => 'nullable|integer',
            'observation_unit' => 'nullable|integer',

            // VI. PENGUMPULAN DATA
            'pilot_survey' => 'nullable|in:' . implode(',', array_column(BooleanType::cases(), 'value')),
            // 'data_quality_check_method' => 'nullable|array',
            // 'data_quality_check_method.*' => 'exists:data_quality_check_methods,id',
            'nonresponse_adjustment' => 'nullable|in:' . implode(',', array_column(BooleanType::cases(), 'value')),
            'data_collector_type_id' => 'nullable|exists:data_collector_types,id',
            'minimum_education_requirement_id' => 'nullable|exists:minimum_education_requirements,id',
            'number_of_supervisors' => 'nullable|integer',
            'number_of_enumerators' => 'nullable|integer',
            'training_of_data_collector' => 'nullable|in:' . implode(',', array_column(BooleanType::cases(), 'value')),

            // VII. PENGOLAHAN DAN ANALISIS
            'editing_step' => 'nullable|in:' . implode(',', array_column(BooleanType::cases(), 'value')),
            'coding_step' => 'nullable|in:' . implode(',', array_column(BooleanType::cases(), 'value')),
            'data_entry_step' => 'nullable|in:' . implode(',', array_column(BooleanType::cases(), 'value')),
            'validation_step' => 'nullable|in:' . implode(',', array_column(BooleanType::cases(), 'value')),
            'analysis_method_id' => 'nullable|exists:analysis_methods,id',
            // 'analysis_units' => 'nullable|array',
            // 'analysis_units.*' => 'exists:analysis_units,id',
            // 'presentation_levels' => 'nullable|array',
            // 'presentation_levels.*' => 'exists:presentation_levels,id',

            // VIII. DISEMINASI HASIL
            'printed_product' => 'nullable|in:' . implode(',', array_column(BooleanType::cases(), 'value')),
            'digital_product' => 'nullable|in:' . implode(',', array_column(BooleanType::cases(), 'value')),
            'microdata_product' => 'nullable|in:' . implode(',', array_column(BooleanType::cases(), 'value')),
            'printed_release_date' => 'nullable|date',
            'digital_release_date' => 'nullable|date',
            'microdata_release_date' => 'nullable|date',
        ];
    }

    public function messages(): array
    {
        return [
            'activity_year.max' => 'Tahun tidak boleh lebih dari tahun sekarang.',
            'organizing_agency_email.email' => 'Email penyelenggara tidak valid.',
            'technical_responsible_email.email' => 'Email penanggung jawab teknis tidak valid.',
        ];
    }
}
