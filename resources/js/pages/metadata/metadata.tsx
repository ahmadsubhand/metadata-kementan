import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { metadata } from '@/routes'
import { draft, draftUpdate, submit, submitUpdate } from '@/routes/metadata'
import { type BreadcrumbItem } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';
import { FieldErrors, Path, useForm  } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { metadataStoreSchema, MetadataStoreType } from '@/validators/metadata';
import { Form } from "@/components/ui/form";
import FirstPage from './first-page';
import OrganizerPage from './organizer-page';
import ResponsiblePage from './responsible-page';
import PlanningPage from './planning-page';
import DesignPage from './design-page';
import SamplingPage from './sampling-page';
import CollectionPage from './collection-page';
import AnalysisPage from './analysis-page';
import DisseminationPage from './dissemination-page';
import PreviewPage from './preview-page';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Metadata Statistik',
        href: metadata().url,
    },
];

export default function Metadata({ metadata_form } : { metadata_form?: Omit<MetadataStoreType, 'id'> & { id: string | number }} ) {
    // Form

    const { errors } = usePage().props;

    const form = useForm({
        resolver: zodResolver(metadataStoreSchema), mode: 'onChange', defaultValues: {
            ...(metadata_form && {
                // Halaman awal
                activity_title: metadata_form.activity_title,
                activity_year: metadata_form.activity_year,
                data_collection_approach_id: metadata_form.data_collection_approach_id,
                activity_sector_id: metadata_form.activity_sector_id,
                statistical_activity_type_id: metadata_form.statistical_activity_type_id,
                statistical_activity_recommendation: parseInt(metadata_form.statistical_activity_recommendation.toString()), // sqlite cannot handle number enum (auto convert to string)
                recommendation_identity: metadata_form.recommendation_identity,
            
                // I. PENYELENGGARA
                organizing_agency: metadata_form.organizing_agency,
                organizing_agency_full_address: metadata_form.organizing_agency_full_address,
                organizing_agency_phone: metadata_form.organizing_agency_phone,
                organizing_agency_fax: metadata_form.organizing_agency_fax,
                organizing_agency_email: metadata_form.organizing_agency_email,
            
                // II. PENANGGUNG JAWAB
                responsible_echelon_1_unit: metadata_form.responsible_echelon_1_unit,
                responsible_echelon_2_unit: metadata_form.responsible_echelon_2_unit,
                technical_responsible_name: metadata_form.technical_responsible_name,
                technical_responsible_position: metadata_form.technical_responsible_position,
                technical_responsible_address: metadata_form.technical_responsible_address,
                technical_responsible_phone: metadata_form.technical_responsible_phone,
                technical_responsible_fax: metadata_form.technical_responsible_fax,
                technical_responsible_email: metadata_form.technical_responsible_email,
            
                // III. PERENCANAAN DAN PERSIAPAN
                activity_background: metadata_form.activity_background,
                activity_objective: metadata_form.activity_objective,
                activity_planning_start_date: metadata_form.activity_planning_start_date,
                activity_planning_end_date: metadata_form.activity_planning_end_date,
                design_start_date: metadata_form.design_start_date,
                design_end_date: metadata_form.design_end_date,
                data_collection_start_date: metadata_form.data_collection_start_date,
                data_collection_end_date: metadata_form.data_collection_end_date,
                data_processing_start_date: metadata_form.data_processing_start_date,
                data_processing_end_date: metadata_form.data_processing_end_date,
                data_analysis_start_date: metadata_form.data_analysis_start_date,
                data_analysis_end_date: metadata_form.data_analysis_end_date,
                result_dissemination_start_date: metadata_form.result_dissemination_start_date,
                result_dissemination_end_date: metadata_form.result_dissemination_end_date,
                evaluation_start_date: metadata_form.evaluation_start_date,
                evaluation_end_date: metadata_form.evaluation_end_date,
                collected_variables: metadata_form.collected_variables,
            
                // IV. DESAIN KEGIATAN
                activity_conduct_id: metadata_form.activity_conduct_id,
                frequency_of_implementation_id: metadata_form.frequency_of_implementation_id,
                data_collection_type_id: metadata_form.data_collection_type_id,
                data_collection_coverage_id: metadata_form.data_collection_coverage_id,
                data_collection_methods: metadata_form.data_collection_methods,
                data_collection_method_other: metadata_form.data_collection_method_other,
                data_collection_tools: metadata_form.data_collection_tools,
                data_collection_tool_other: metadata_form.data_collection_tool_other,
                data_collection_units: metadata_form.data_collection_units,
                data_collection_unit_other: metadata_form.data_collection_unit_other,
                activity_regions: metadata_form.activity_regions,
            
                // V. DESAIN SAMPEL
                sample_design_type_id: metadata_form.sample_design_type_id,
                final_stage_sampling_method_id: metadata_form.final_stage_sampling_method_id,
                sampling_method_id: metadata_form.sampling_method_id,
                final_stage_sampling_frame_id: metadata_form.final_stage_sampling_frame_id,
                overall_sample_fraction: metadata_form.overall_sample_fraction,
                estimated_sampling_error: metadata_form.estimated_sampling_error,
                sampling_unit: metadata_form.sampling_unit,
                observation_unit: metadata_form.observation_unit,
            
                // VI. PENGUMPULAN DATA
                pilot_survey: metadata_form.pilot_survey ? parseInt(metadata_form.pilot_survey.toString()) : null,
                data_quality_check_methods: metadata_form.data_quality_check_methods,
                data_quality_check_method_other: metadata_form.data_quality_check_method_other,
                nonresponse_adjustment: metadata_form.nonresponse_adjustment ? parseInt(metadata_form.nonresponse_adjustment.toString()) : null,
                data_collector_type_id: metadata_form.data_collector_type_id,
                minimum_education_requirement_id: metadata_form.minimum_education_requirement_id,
                number_of_supervisors: metadata_form.number_of_supervisors,
                number_of_enumerators: metadata_form.number_of_enumerators,
                training_of_data_collector: metadata_form.training_of_data_collector ? parseInt(metadata_form.training_of_data_collector.toString()) : null,
            
                // VII. PENGOLAHAN DAN ANALISIS
                editing_step: metadata_form.editing_step ? parseInt(metadata_form.editing_step.toString()) : null,
                coding_step: metadata_form.coding_step ? parseInt(metadata_form.coding_step.toString()) : null,
                data_entry_step: metadata_form.data_entry_step ? parseInt(metadata_form.data_entry_step.toString()) : null,
                validation_step: metadata_form.validation_step ? parseInt(metadata_form.validation_step.toString()) : null,
                analysis_method_id: metadata_form.analysis_method_id,
                analysis_units: metadata_form.analysis_units,
                analysis_unit_other: metadata_form.analysis_unit_other,
                presentation_levels: metadata_form.presentation_levels,
                presentation_level_other: metadata_form.presentation_level_other,
            
                // VIII. DISEMINASI HASIL
                printed_product: metadata_form.printed_product ? parseInt(metadata_form.printed_product.toString()) : null,
                digital_product: metadata_form.digital_product ? parseInt(metadata_form.digital_product.toString()) : null,
                microdata_product: metadata_form.microdata_product ? parseInt(metadata_form.microdata_product.toString()) : null,
                printed_release_date: metadata_form.printed_release_date,
                digital_release_date: metadata_form.digital_release_date,
                microdata_release_date: metadata_form.microdata_release_date,
            })
        }
    })

    const [isLoading, setIsLoading] = useState(false);

    function clearConditionalQuestion(data:MetadataStoreType) {
        // Clear conditional question
        if (data.statistical_activity_recommendation === 2) {
            data.recommendation_identity = null;
        }
        if (!data.activity_conduct_id || (data.activity_conduct_id === 1)) {
            data.frequency_of_implementation_id = null;
        }
        if (!data.data_collection_coverage_id || (data.data_collection_coverage_id === 1)) {
            data.activity_regions = null;
        }
        if (!data.data_collection_tools || !data.data_collection_tools.some(num => [1, 2, 3].includes(num))) {
            data.data_collector_type_id = null;
            data.minimum_education_requirement_id = null;
            data.minimum_education_requirement_id = null;
            data.number_of_supervisors = null;
            data.number_of_enumerators = null;
            data.training_of_data_collector = null;
        }
        
        return data;
    }

    // ! THERE ARE NO VALIDATION ABOUT CONDITIONAL QUESTION ON BACKEND VALIDATOR (MetadataDraftRequest)

    function onDraft(data:MetadataStoreType) {
        setIsLoading(true);

        data = clearConditionalQuestion(data);

        if (metadata_form) {
            router.put(draftUpdate(metadata_form.id).url, data, {
                onFinish: () => setIsLoading(false)    
            })
        } else {
            router.post(draft.url(), data, {
                onFinish: () => setIsLoading(false)
            });
        }
    }

    function onSubmit(data:MetadataStoreType) {
        setIsLoading(true);

        data = clearConditionalQuestion(data);

        if (metadata_form) {
            router.put(submitUpdate(metadata_form.id).url, data, {
                onFinish: () => setIsLoading(false)    
            })
        } else {
            router.post(submit.url(), data, {
                onFinish: () => setIsLoading(false)
            });
        }
    }

    const [fieldToTab] = useState<Record<keyof MetadataStoreType, string>>({
        // HALAMAN AWAL
        activity_title: 'first_page',
        activity_year: 'first_page',
        data_collection_approach_id: 'first_page',
        activity_sector_id: 'first_page',
        statistical_activity_type_id: 'first_page',
        statistical_activity_recommendation: 'first_page',
        recommendation_identity: 'first_page',

        // I. PENYELENGGARA
        organizing_agency: 'organizer_page',
        organizing_agency_full_address: 'organizer_page',
        organizing_agency_phone: 'organizer_page',
        organizing_agency_fax: 'organizer_page',
        organizing_agency_email: 'organizer_page',

        // II. PENANGGUNG JAWAB
        responsible_echelon_1_unit: 'responsible_page',
        responsible_echelon_2_unit: 'responsible_page',
        technical_responsible_name: 'responsible_page',
        technical_responsible_position: 'responsible_page',
        technical_responsible_address: 'responsible_page',
        technical_responsible_phone: 'responsible_page',
        technical_responsible_fax: 'responsible_page',
        technical_responsible_email: 'responsible_page',

        // III. PERENCANAAN DAN PERSIAPAN
        activity_background: 'plannig_page',
        activity_objective: 'plannig_page',
        activity_planning_start_date: 'plannig_page',
        activity_planning_end_date: 'plannig_page',
        design_start_date: 'plannig_page',
        design_end_date: 'plannig_page',
        data_collection_start_date: 'plannig_page',
        data_collection_end_date: 'plannig_page',
        data_processing_start_date: 'plannig_page',
        data_processing_end_date: 'plannig_page',
        data_analysis_start_date: 'plannig_page',
        data_analysis_end_date: 'plannig_page',
        result_dissemination_start_date: 'plannig_page',
        result_dissemination_end_date: 'plannig_page',
        evaluation_start_date: 'plannig_page',
        evaluation_end_date: 'plannig_page',
        collected_variables: 'plannig_page',

        // IV. DESAIN KEGIATAN
        activity_conduct_id: 'design_page',
        frequency_of_implementation_id: 'design_page',
        data_collection_type_id: 'design_page',
        data_collection_coverage_id: 'design_page',
        data_collection_methods: 'design_page',
        data_collection_method_other: 'design_page',
        data_collection_tools: 'design_page',
        data_collection_tool_other: 'design_page',
        data_collection_units: 'design_page',
        data_collection_unit_other: 'design_page',
        activity_regions: 'design_page',

        // V. DESAIN SAMPEL
        sample_design_type_id: 'sampling_page',
        final_stage_sampling_method_id: 'sampling_page',
        sampling_method_id: 'sampling_page',
        final_stage_sampling_frame_id: 'sampling_page',
        overall_sample_fraction: 'sampling_page',
        estimated_sampling_error: 'sampling_page',
        sampling_unit: 'sampling_page',
        observation_unit: 'sampling_page',

        // VI. PENGUMPULAN DATA
        pilot_survey: 'collection_page',
        data_quality_check_methods: 'collection_page',
        data_quality_check_method_other: 'collection_page',
        nonresponse_adjustment: 'collection_page',
        data_collector_type_id: 'collection_page',
        minimum_education_requirement_id: 'collection_page',
        number_of_supervisors: 'collection_page',
        number_of_enumerators: 'collection_page',
        training_of_data_collector: 'collection_page',

        // VII. PENGOLAHAN DAN ANALISIS
        editing_step: 'analysis_page',
        coding_step: 'analysis_page',
        data_entry_step: 'analysis_page',
        validation_step: 'analysis_page',
        analysis_method_id: 'analysis_page',
        analysis_units: 'analysis_page',
        analysis_unit_other: 'analysis_page',
        presentation_levels: 'analysis_page',
        presentation_level_other: 'analysis_page',

        // VIII. DISEMINASI HASIL
        printed_product: 'dissemination_page',
        digital_product: 'dissemination_page',
        microdata_product: 'dissemination_page',
        printed_release_date: 'dissemination_page',
        digital_release_date: 'dissemination_page',
        microdata_release_date: 'dissemination_page',
    })

    // Navigate to tab which has error field
    function onInvalid(errors: FieldErrors) {
        const firstErrorField = Object.keys(errors)[0] as keyof MetadataStoreType;
        if (firstErrorField) {
            setStep(fieldToTab[firstErrorField]);
        }
    }

    useEffect(() => {
        if (errors) {
            // Set error on specific field
            (Object.keys(errors) as Path<MetadataStoreType>[]).forEach((field) => {
                form.setError(field, { message: errors[field] as string })
            })
        }

        // Navigate to tab which has error field
        const firstErrorField = Object.keys(errors)[0] as keyof MetadataStoreType;
        if (firstErrorField) {
            setStep(fieldToTab[firstErrorField]);
        }
    }, [errors, form, fieldToTab])

    // Component

    const menus = [
        { value: 'first_page', label: 'Halaman Awal', form: <FirstPage form={form} /> },
        { value: 'organizer_page', label: 'Blok I', form: <OrganizerPage form={form} /> },
        { value: 'responsible_page', label: 'Blok II', form: <ResponsiblePage form={form} /> },
        { value: 'plannig_page', label: 'Blok III', form: <PlanningPage form={form} /> },
        { value: 'design_page', label: 'Blok IV', form: <DesignPage form={form} /> },
        { value: 'sampling_page', label: 'Blok V', form: <SamplingPage form={form} /> },
        { value: 'collection_page', label: 'Blok VI', form: <CollectionPage form={form}/> },
        { value: 'analysis_page', label: 'Blok VII', form: <AnalysisPage form={form} /> },
        { value: 'dissemination_page', label: 'Blok VIII', form: <DisseminationPage form={form}/> },
        { value: 'preview_page', label: 'Pratinjau', form: <PreviewPage data={form.watch()}/> },
    ]

    const [step, setStep] = useState(menus[0].value);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                    <h1 className='font-bold'>Formulir Metadata Statistik Kegiatan</h1>

                    <Tabs value={step} onValueChange={setStep} className='flex flex-col gap-8'>
                        <TabsList>
                            {menus.map((menu, index) => (
                                <TabsTrigger value={menu.value} key={index}>{menu.label}</TabsTrigger>
                            ))}
                        </TabsList>
                        {menus.map((menu, index) => (
                            <TabsContent value={menu.value} key={index}>
                                {menu.form}
                            </TabsContent>
                        ))}
                        <div className="flex gap-4">
                            <Button type='submit' disabled={isLoading}>
                                {isLoading && (<LoaderCircle className="animate-spin" />)}
                                Kirim
                            </Button>
                            <Button disabled={isLoading} variant={'outline'} onClick={form.handleSubmit(onDraft, onInvalid)}>
                                {isLoading && (<LoaderCircle className="animate-spin" />)}
                                Simpan sebagai draft
                            </Button>
                        </div>
                    </Tabs>
                </form>
            </Form>
        </AppLayout>
    );
}