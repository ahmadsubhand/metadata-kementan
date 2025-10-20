import dayjs from 'dayjs';
import { z } from 'zod';
import { arrayOptional, booleanNumberOptional, dateOptional, idOptional, numberOptional, textOptional, varChar255Optional, varChar50Optional } from '.';

export const metadataStoreSchema = z.object({
    // Halaman awal
    activity_title: z.string('Wajib diisi').min(3, 'Minimal 3 karakter').max(255, 'Maksimal 255 karakter'),
    activity_year: z
        .number('Wajib diisi')
        .int()
        .min(1900, 'Masukkan tahun yang valid')
        .max(dayjs().year(), 'Maksimal dilaksanakan tahun ini'),
    data_collection_approach_id: z.number('Wajib diisi').int(),
    activity_sector_id: z.number('Wajib diisi').int(),
    statistical_activity_type_id: z.number('Wajib diisi').int(),
    statistical_activity_recommendation: z.number('Wajib diisi').int().min(1).max(2),
    recommendation_identity: varChar255Optional,

    // I. PENYELENGGARA
    organizing_agency: varChar255Optional,
    organizing_agency_full_address: varChar255Optional,
    organizing_agency_phone: varChar50Optional,
    organizing_agency_fax: varChar50Optional,
    organizing_agency_email: z.preprocess(val => !val ? null : val, z.email('Email tidak valid').nullable()),

    // II. PENANGGUNG JAWAB
    responsible_echelon_1_unit: varChar255Optional,
    responsible_echelon_2_unit: varChar255Optional,
    technical_responsible_name: varChar255Optional,
    technical_responsible_position: varChar255Optional,
    technical_responsible_address: varChar255Optional,
    technical_responsible_phone: varChar50Optional,
    technical_responsible_fax: varChar50Optional,
    technical_responsible_email: z.preprocess(val => !val ? null : val, z.email('Email tidak valid').nullable()),

    // III. PERENCANAAN DAN PERSIAPAN
    activity_background: textOptional,
    activity_objective: textOptional,
    activity_planning_start_date: dateOptional,
    activity_planning_end_date: dateOptional,
    design_start_date: dateOptional,
    design_end_date: dateOptional,
    data_collection_start_date: dateOptional,
    data_collection_end_date: dateOptional,
    data_processing_start_date: dateOptional,
    data_processing_end_date: dateOptional,
    data_analysis_start_date: dateOptional,
    data_analysis_end_date: dateOptional,
    result_dissemination_start_date: dateOptional,
    result_dissemination_end_date: dateOptional,
    evaluation_start_date: dateOptional,
    evaluation_end_date: dateOptional,
    collected_variables: z.preprocess(val => !val ? null : val, 
        z.array(
            z.object({
                variable_number: z.int().positive(),
                variable_name: z.string().nonempty('Wajib diisi'),
                variable_concept: textOptional,
                variable_definition: textOptional,
                reference_time: textOptional,
            })
        ).nullable()
    ),

    // IV. DESAIN KEGIATAN
    activity_conduct_id: idOptional,
    frequency_of_implementation_id: idOptional,
    data_collection_type_id: idOptional,
    data_collection_coverage_id: idOptional,
    data_collection_methods: arrayOptional,
    data_collection_method_other: varChar255Optional,
    data_collection_tools: arrayOptional,
    data_collection_tool_other: varChar255Optional,
    data_collection_units: arrayOptional,
    data_collection_unit_other: varChar255Optional,
    activity_regions: z.preprocess(val => !val ? null : val, 
        z.array(
            z.object({
                number: z.int().positive(),
                province: z.string().nonempty('Wajib diisi'),
                city_or_regency: z.string().nonempty('Wajib diisi'),
            })
        ).nullable()
    ),

    // V. DESAIN SAMPEL
    sample_design_type_id: idOptional,
    final_stage_sampling_method_id: idOptional,
    sampling_method_id: idOptional,
    final_stage_sampling_frame_id: idOptional,
    overall_sample_fraction: numberOptional,
    estimated_sampling_error: numberOptional,
    sampling_unit: numberOptional,
    observation_unit: numberOptional,

    // VI. PENGUMPULAN DATA
    pilot_survey: booleanNumberOptional,
    data_quality_check_methods: arrayOptional,
    data_quality_check_method_other: varChar255Optional,
    nonresponse_adjustment: booleanNumberOptional,
    data_collector_type_id: idOptional,
    minimum_education_requirement_id: idOptional,
    number_of_supervisors: numberOptional,
    number_of_enumerators: numberOptional,
    training_of_data_collector: booleanNumberOptional,

    // VII. PENGOLAHAN DAN ANALISIS
    editing_step: booleanNumberOptional,
    coding_step: booleanNumberOptional,
    data_entry_step: booleanNumberOptional,
    validation_step: booleanNumberOptional,
    analysis_method_id: idOptional,
    analysis_units: arrayOptional,
    analysis_unit_other: varChar255Optional,
    presentation_levels: arrayOptional,
    presentation_level_other: varChar255Optional,

    // VIII. DISEMINASI HASIL
    printed_product: booleanNumberOptional,
    digital_product: booleanNumberOptional,
    microdata_product: booleanNumberOptional,
    printed_release_date: dateOptional,
    digital_release_date: dateOptional,
    microdata_release_date: dateOptional,
});

export type MetadataStoreType = z.infer<typeof metadataStoreSchema>;
