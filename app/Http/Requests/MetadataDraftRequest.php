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
        $varchar_255_optional = 'nullable|string|max:255';
        $varchar_50_optional = 'nullable|string|max:50';
        $text_optional = 'nullable|string';
        $date_optional = 'nullable|date';
        $array_optional = 'nullable|array';
        $number_optional = 'nullable|integer';
        $boolean_number_optional = 'nullable|in:' . implode(',', array_column(BooleanType::cases(), 'value'));

        function id_optional(string $table_name) {
            return "nullable|exists:{$table_name},id";
        }

        return [
            // Halaman awal
            'activity_title' => 'required|string|max:255',
            'activity_year' => 'required|integer|min:1900|max:' . date('Y'),
            'data_collection_approach_id' => 'required|exists:data_collection_approaches,id',
            'activity_sector_id' => 'required|exists:activity_sectors,id',
            'statistical_activity_type_id' => 'required|exists:statistical_activity_types,id',
            'statistical_activity_recommendation' => 'required|in:' . implode(',', array_column(BooleanType::cases(), 'value')),
            'recommendation_identity' => $varchar_255_optional,

            // I. PENYELENGGARA
            'organizing_agency' => $varchar_255_optional,
            'organizing_agency_full_address' => $varchar_255_optional,
            'organizing_agency_phone' => $varchar_50_optional,
            'organizing_agency_fax' => $varchar_50_optional,
            'organizing_agency_email' => 'nullable|email|max:255',

            // II. PENANGGUNG JAWAB
            'responsible_echelon_1_unit' => $varchar_255_optional,
            'responsible_echelon_2_unit' => $varchar_255_optional,
            'technical_responsible_name' => $varchar_255_optional,
            'technical_responsible_position' => $varchar_255_optional,
            'technical_responsible_address' => $varchar_255_optional,
            'technical_responsible_phone' => $varchar_50_optional,
            'technical_responsible_fax' => $varchar_50_optional,
            'technical_responsible_email' => 'nullable|email|max:255',

            // III. PERENCANAAN DAN PERSIAPAN
            'activity_background' => $text_optional,
            'activity_objective' => $text_optional,
            'activity_planning_start_date' => $date_optional,
            'activity_planning_end_date' => $date_optional,
            'design_start_date' => $date_optional,
            'design_end_date' => $date_optional,
            'data_collection_start_date' => $date_optional,
            'data_collection_end_date' => $date_optional,
            'data_processing_start_date' => $date_optional,
            'data_processing_end_date' => $date_optional,
            'data_analysis_start_date' => $date_optional,
            'data_analysis_end_date' => $date_optional,
            'result_dissemination_start_date' => $date_optional,
            'result_dissemination_end_date' => $date_optional,
            'evaluation_start_date' => $date_optional,
            'evaluation_end_date' => $date_optional,
            'collected_variables' => 'nullable|array',
            'collected_variables.*.variable_number' => 'required|integer|min:1',
            'collected_variables.*.variable_name' => 'required|string',
            'collected_variables.*.variable_concept' => $text_optional,
            'collected_variables.*.variable_definition' => $text_optional,
            'collected_variables.*.reference_time' => $text_optional,

            // IV. DESAIN KEGIATAN
            'activity_conduct_id' => id_optional("activity_conducts"),
            'frequency_of_implementation_id' => id_optional("frequency_of_implementations"),
            'data_collection_type_id' => id_optional("data_collection_types"),
            'data_collection_coverage_id' => id_optional("data_collection_coverages"),
            'activity_regions' => $array_optional,
            'activity_regions.*.number' => 'required_with:activity_regions|integer|min:1',
            'activity_regions.*.province' => 'required_with:activity_regions|string',
            'activity_regions.*.city_or_regency' => 'required_with:activity_regions|string',
            'data_collection_methods' => $array_optional,
            'data_collection_methods.*' => 'exists:data_collection_methods,id',
            'data_collection_method_other' => $varchar_255_optional,
            'data_collection_tools' => $array_optional,
            'data_collection_tools.*' => 'exists:data_collection_tools,id',
            'data_collection_tool_other' => $varchar_255_optional,
            'data_collection_units' => $array_optional,
            'data_collection_units.*' => 'exists:data_collection_units,id',
            'data_collection_unit_other' => $varchar_255_optional,

            // V. DESAIN SAMPEL
            'sample_design_type_id' => id_optional("sample_design_types"),
            'final_stage_sampling_method_id' => id_optional("final_stage_sampling_methods"),
            'sampling_method_id' => id_optional("sampling_methods"),
            'final_stage_sampling_frame_id' => id_optional("final_stage_sampling_frames"),
            'overall_sample_fraction' => $number_optional,
            'estimated_sampling_error' => $number_optional,
            'sampling_unit' => $number_optional,
            'observation_unit' => $number_optional,

            // VI. PENGUMPULAN DATA
            'pilot_survey' => $boolean_number_optional,
            'data_quality_check_methods' => $array_optional,
            'data_quality_check_methods.*' => 'exists:data_quality_check_methods,id',
            'data_quality_check_method_other' => $varchar_255_optional,
            'nonresponse_adjustment' => $boolean_number_optional,
            'data_collector_type_id' => id_optional("data_collector_types"),
            'minimum_education_requirement_id' => id_optional("minimum_education_requirements"),
            'number_of_supervisors' => $number_optional,
            'number_of_enumerators' => $number_optional,
            'training_of_data_collector' => $boolean_number_optional,

            // VII. PENGOLAHAN DAN ANALISIS
            'editing_step' => $boolean_number_optional,
            'coding_step' => $boolean_number_optional,
            'data_entry_step' => $boolean_number_optional,
            'validation_step' => $boolean_number_optional,
            'analysis_method_id' => id_optional("analysis_methods"),
            'analysis_units' => $array_optional,
            'analysis_units.*' => 'exists:analysis_units,id',
            'analysis_unit_other' => $varchar_255_optional,
            'presentation_levels' => $array_optional,
            'presentation_levels.*' => 'exists:presentation_levels,id',
            'presentation_level_other' => $varchar_255_optional,

            // VIII. DISEMINASI HASIL
            'printed_product' => $boolean_number_optional,
            'digital_product' => $boolean_number_optional,
            'microdata_product' => $boolean_number_optional,
            'printed_release_date' => $date_optional,
            'digital_release_date' => $date_optional,
            'microdata_release_date' => $date_optional,
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
