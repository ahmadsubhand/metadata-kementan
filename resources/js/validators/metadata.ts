import dayjs from 'dayjs';
import { z } from 'zod';
import { arrayOptional, dateOptional } from '.';

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
    recommendation_identity: z.preprocess(val => !val ? null : val, z.string().max(255, 'Maksimal 255 karakter').nullable()),

    // I. PENYELENGGARA
    organizing_agency: z.preprocess(val => !val ? null : val, z.string().max(255).nullable()),
    organizing_agency_full_address: z.preprocess(val => !val ? null : val, z.string().max(255).nullable()),
    organizing_agency_phone: z.preprocess(val => !val ? null : val, z.string().max(50).nullable()),
    organizing_agency_fax: z.preprocess(val => !val ? null : val, z.string().max(50).nullable()),
    organizing_agency_email: z.preprocess(val => !val ? null : val, z.email('Email tidak valid').nullable()),

    // II. PENANGGUNG JAWAB
    responsible_echelon_1_unit: z.preprocess(val => !val ? null : val, z.string().max(255).nullable()),
    responsible_echelon_2_unit: z.preprocess(val => !val ? null : val, z.string().max(255).nullable()),
    technical_responsible_name: z.preprocess(val => !val ? null : val, z.string().max(255).nullable()),
    technical_responsible_position: z.preprocess(val => !val ? null : val, z.string().max(255).nullable()),
    technical_responsible_address: z.preprocess(val => !val ? null : val, z.string().max(255).nullable()),
    technical_responsible_phone: z.preprocess(val => !val ? null : val, z.string().max(50).nullable()),
    technical_responsible_fax: z.preprocess(val => !val ? null : val, z.string().max(50).nullable()),
    technical_responsible_email: z.preprocess(val => !val ? null : val, z.email('Email tidak valid').nullable()),

    // III. PERENCANAAN DAN PERSIAPAN
    activity_background: z.preprocess(val => !val ? null : val, z.string().nullable()),
    activity_objective: z.preprocess(val => !val ? null : val, z.string().nullable()),
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
                variable_concept: z.preprocess(val => !val ? null : val, z.string().nullable()),
                variable_definition: z.preprocess(val => !val ? null : val, z.string().nullable()),
                reference_time: z.preprocess(val => !val ? null : val, z.string().nullable()),
            })
        ).nullable()
    ),

    // IV. DESAIN KEGIATAN
    activity_conduct_id: z.preprocess(val => !val ? null : val, z.number().nullable()),
    frequency_of_implementation_id: z.preprocess(val => !val ? null : val, z.number().nullable()),
    data_collection_type_id: z.preprocess(val => !val ? null : val, z.number().nullable()),
    data_collection_coverage_id: z.preprocess(val => !val ? null : val, z.number().nullable()),
    data_collection_methods: arrayOptional,
    data_collection_tools: arrayOptional,
    data_collection_units: arrayOptional,
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
    sample_design_type_id: z.preprocess(val => !val ? null : val, z.number().nullable()),
    final_stage_sampling_method_id: z.preprocess(val => !val ? null : val, z.number().nullable()),
    sampling_method_id: z.preprocess(val => !val ? null : val, z.number().nullable()),
    final_stage_sampling_frame_id: z.preprocess(val => !val ? null : val, z.number().nullable()),
    overall_sample_fraction: z.preprocess(val => !val ? null : val, z.number().nullable()),
    estimated_sampling_error: z.preprocess(val => !val ? null : val, z.number().nullable()),
    sampling_unit: z.preprocess(val => !val ? null : val, z.number().nullable()),
    observation_unit: z.preprocess(val => !val ? null : val, z.number().nullable()),

    // VI. PENGUMPULAN DATA
    pilot_survey: z.preprocess(val => !val ? null : val, z.number().nullable()),
    data_quality_check_methods: arrayOptional,
    nonresponse_adjustment: z.preprocess(val => !val ? null : val, z.number().nullable()),
    data_collector_type_id: z.preprocess(val => !val ? null : val, z.number().nullable()),
    minimum_education_requirement_id: z.preprocess(val => !val ? null : val, z.number().nullable()),
    number_of_supervisors: z.preprocess(val => !val ? null : val, z.number().nullable()),
    number_of_enumerators: z.preprocess(val => !val ? null : val, z.number().nullable()),
    training_of_data_collector: z.preprocess(val => !val ? null : val, z.number().nullable()),

    // VII. PENGOLAHAN DAN ANALISIS
    editing_step: z.preprocess(val => !val ? null : val, z.number().nullable()),
    coding_step: z.preprocess(val => !val ? null : val, z.number().nullable()),
    data_entry_step: z.preprocess(val => !val ? null : val, z.number().nullable()),
    validation_step: z.preprocess(val => !val ? null : val, z.number().nullable()),
    analysis_method_id: z.preprocess(val => !val ? null : val, z.number().nullable()),
    analysis_units: arrayOptional,
    presentation_levels: arrayOptional,

    // VIII. DISEMINASI HASIL
    printed_product: z.preprocess(val => !val ? null : val, z.number().nullable()),
    digital_product: z.preprocess(val => !val ? null : val, z.number().nullable()),
    microdata_product: z.preprocess(val => !val ? null : val, z.number().nullable()),
    printed_release_date: dateOptional,
    digital_release_date: dateOptional,
    microdata_release_date: dateOptional,
});

export type MetadataStoreType = z.infer<typeof metadataStoreSchema>;
