import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { metadata } from '@/routes'
import { draft } from '@/routes/metadata'
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

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Metadata Statistik',
        href: metadata().url,
    },
];

export default function Metadata({ metadata_form } : { metadata_form?: MetadataStoreType } ) {
    // Form

    useEffect(() => {
        console.log(metadata_form);
    }, [metadata_form])

    const { errors } = usePage().props;

    const form = useForm({
        resolver: zodResolver(metadataStoreSchema), mode: 'onChange', defaultValues: {
            ...(metadata_form && {
                // Halaman awal
                activity_title: metadata_form?.activity_title,
                activity_year: metadata_form?.activity_year,
                data_collection_approach_id: metadata_form?.data_collection_approach_id.toString(),
                activity_sector_id: metadata_form?.activity_sector_id.toString(),
                statistical_activity_type_id: metadata_form?.statistical_activity_type_id.toString(),
                statistical_activity_recommendation: metadata_form?.statistical_activity_recommendation,
                recommendation_identity: metadata_form?.recommendation_identity,
            
                // I. PENYELENGGARA
                organizing_agency: metadata_form?.organizing_agency,
                organizing_agency_full_address: metadata_form?.organizing_agency_full_address,
                organizing_agency_phone: metadata_form?.organizing_agency_phone,
                organizing_agency_fax: metadata_form?.organizing_agency_fax,
                organizing_agency_email: metadata_form?.organizing_agency_email,
            
                // II. PENANGGUNG JAWAB
                responsible_echelon_1_unit: metadata_form?.responsible_echelon_1_unit,
                responsible_echelon_2_unit: metadata_form?.responsible_echelon_2_unit,
                technical_responsible_name: metadata_form?.technical_responsible_name,
                technical_responsible_position: metadata_form?.technical_responsible_position,
                technical_responsible_address: metadata_form?.technical_responsible_address,
                technical_responsible_phone: metadata_form?.technical_responsible_phone,
                technical_responsible_fax: metadata_form?.technical_responsible_fax,
                technical_responsible_email: metadata_form?.technical_responsible_email,
            
                // III. PERENCANAAN DAN PERSIAPAN
                activity_background: metadata_form?.activity_background,
                activity_objective: metadata_form?.activity_objective,
                activity_planning_start_date: metadata_form?.activity_planning_start_date,
                activity_planning_end_date: metadata_form?.activity_planning_end_date,
                design_start_date: metadata_form?.design_start_date,
                design_end_date: metadata_form?.design_end_date,
                data_collection_start_date: metadata_form?.data_collection_start_date,
                data_collection_end_date: metadata_form?.data_collection_end_date,
                data_processing_start_date: metadata_form?.data_processing_start_date,
                data_processing_end_date: metadata_form?.data_processing_end_date,
                data_analysis_start_date: metadata_form?.data_analysis_start_date,
                data_analysis_end_date: metadata_form?.data_analysis_end_date,
                result_dissemination_start_date: metadata_form?.result_dissemination_start_date,
                result_dissemination_end_date: metadata_form?.result_dissemination_end_date,
                evaluation_start_date: metadata_form?.evaluation_start_date,
                evaluation_end_date: metadata_form?.evaluation_end_date,
                // collected_variables table
            
                // IV. DESAIN KEGIATAN
                activity_conduct_id: metadata_form?.activity_conduct_id ? metadata_form?.activity_conduct_id.toString() : undefined,
                frequency_of_implementation_id: metadata_form?.frequency_of_implementation_id ? metadata_form?.frequency_of_implementation_id?.toString() : undefined,
                data_collection_type_id: metadata_form?.data_collection_type_id ? metadata_form?.data_collection_type_id.toString() : undefined,
                data_collection_coverage_id: metadata_form?.data_collection_coverage_id ? metadata_form?.data_collection_coverage_id.toString() : undefined,
                // data_collection_methods: metadataForm?.activity_title,
                // data_collection_tools: metadataForm?.activity_title,
                // data_collection_units: metadataForm?.activity_title,
            
                // V. DESAIN SAMPEL
                sample_design_type_id: metadata_form?.sample_design_type_id ? metadata_form?.sample_design_type_id.toString() : undefined,
                final_stage_sampling_method_id: metadata_form?.final_stage_sampling_method_id ? metadata_form?.final_stage_sampling_method_id.toString() : undefined,
                probability_sampling_method_id: metadata_form?.probability_sampling_method_id ? metadata_form?.probability_sampling_method_id.toString() : undefined,
                nonprobability_sampling_method_id: metadata_form?.nonprobability_sampling_method_id ? metadata_form?.nonprobability_sampling_method_id.toString() : undefined,
                final_stage_sampling_frame_id: metadata_form?.final_stage_sampling_frame_id ? metadata_form?.final_stage_sampling_frame_id.toString() : undefined,
                overall_sample_fraction: metadata_form?.overall_sample_fraction,
                estimated_sampling_error: metadata_form?.estimated_sampling_error,
                sampling_unit: metadata_form?.sampling_unit,
                observation_unit: metadata_form?.observation_unit,
            
                // VI. PENGUMPULAN DATA
                pilot_survey: metadata_form?.pilot_survey,
                // data_quality_check_method: metadataForm?.activity_title,
                nonresponse_adjustment: metadata_form?.nonresponse_adjustment,
                data_collector_type_id: metadata_form?.data_collector_type_id ? metadata_form?.data_collector_type_id.toString() : undefined,
                minimum_education_requirement_id: metadata_form?.minimum_education_requirement_id ? metadata_form?.minimum_education_requirement_id.toString() : undefined,
                number_of_supervisors: metadata_form?.number_of_supervisors,
                number_of_enumerators: metadata_form?.number_of_enumerators,
                training_of_data_collector: metadata_form?.training_of_data_collector,
            
                // VII. PENGOLAHAN DAN ANALISIS
                editing_step: metadata_form?.editing_step,
                coding_step: metadata_form?.coding_step,
                data_entry_step: metadata_form?.data_entry_step,
                validation_step: metadata_form?.validation_step,
                analysis_method_id: metadata_form?.analysis_method_id ? metadata_form?.analysis_method_id.toString() : undefined,
                // analysis_units: metadataForm?.activity_title,
                // presentation_levels: metadataForm?.activity_title,
            
                // VIII. DISEMINASI HASIL
                printed_product: metadata_form?.printed_product,
                digital_product: metadata_form?.digital_product,
                microdata_product: metadata_form?.microdata_product,
                printed_release_date: metadata_form?.printed_release_date,
                digital_release_date: metadata_form?.digital_release_date,
                microdata_release_date: metadata_form?.microdata_release_date,
            })
        }
    })

    const [isLoading, setIsLoading] = useState(false);
    function onSubmit(data:MetadataStoreType) {
        setIsLoading(true);
        router.post(draft.url(), data, {
            onFinish: () => setIsLoading(false)
        });
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
        organizing_agency: 'section_1',
        organizing_agency_full_address: 'section_1',
        organizing_agency_phone: 'section_1',
        organizing_agency_fax: 'section_1',
        organizing_agency_email: 'section_1',

        // II. PENANGGUNG JAWAB
        responsible_echelon_1_unit: 'section_2',
        responsible_echelon_2_unit: 'section_2',
        technical_responsible_name: 'section_2',
        technical_responsible_position: 'section_2',
        technical_responsible_address: 'section_2',
        technical_responsible_phone: 'section_2',
        technical_responsible_fax: 'section_2',
        technical_responsible_email: 'section_2',

        // III. PERENCANAAN DAN PERSIAPAN
        activity_background: 'section_3',
        activity_objective: 'section_3',
        activity_planning_start_date: 'section_3',
        activity_planning_end_date: 'section_3',
        design_start_date: 'section_3',
        design_end_date: 'section_3',
        data_collection_start_date: 'section_3',
        data_collection_end_date: 'section_3',
        data_processing_start_date: 'section_3',
        data_processing_end_date: 'section_3',
        data_analysis_start_date: 'section_3',
        data_analysis_end_date: 'section_3',
        result_dissemination_start_date: 'section_3',
        result_dissemination_end_date: 'section_3',
        evaluation_start_date: 'section_3',
        evaluation_end_date: 'section_3',

        // IV. DESAIN KEGIATAN
        activity_conduct_id: 'section_4',
        frequency_of_implementation_id: 'section_4',
        data_collection_type_id: 'section_4',
        data_collection_coverage_id: 'section_4',
        // data_collection_methods: 'section_4',
        // data_collection_tools: 'section_4',
        // data_collection_units: 'section_4',

        // V. DESAIN SAMPEL
        sample_design_type_id: 'section_5',
        final_stage_sampling_method_id: 'section_5',
        probability_sampling_method_id: 'section_5',
        nonprobability_sampling_method_id: 'section_5',
        final_stage_sampling_frame_id: 'section_5',
        overall_sample_fraction: 'section_5',
        estimated_sampling_error: 'section_5',
        sampling_unit: 'section_5',
        observation_unit: 'section_5',

        // VI. PENGUMPULAN DATA
        pilot_survey: 'section_6',
        // data_quality_check_method: 'section_6',
        nonresponse_adjustment: 'section_6',
        data_collector_type_id: 'section_6',
        minimum_education_requirement_id: 'section_6',
        number_of_supervisors: 'section_6',
        number_of_enumerators: 'section_6',
        training_of_data_collector: 'section_6',

        // VII. PENGOLAHAN DAN ANALISIS
        editing_step: 'section_7',
        coding_step: 'section_7',
        data_entry_step: 'section_7',
        validation_step: 'section_7',
        analysis_method_id: 'section_7',
        // analysis_units: 'section_7',
        // presentation_levels: 'section_7',

        // VIII. DISEMINASI HASIL
        printed_product: 'section_8',
        digital_product: 'section_8',
        microdata_product: 'section_8',
        printed_release_date: 'section_8',
        digital_release_date: 'section_8',
        microdata_release_date: 'section_8',
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
        { value: 'section_1', label: 'Blok I', form: <OrganizerPage form={form} /> },
        { value: 'section_2', label: 'Blok II', form: <ResponsiblePage form={form} /> },
        { value: 'section_3', label: 'Blok III', form: <PlanningPage form={form} /> },
        { value: 'section_4', label: 'Blok IV', form: <DesignPage form={form} /> },
        { value: 'section_5', label: 'Blok V', form: <SamplingPage form={form} /> },
        { value: 'section_6', label: 'Blok VI', form: <CollectionPage form={form}/> },
        { value: 'section_7', label: 'Blok VII', form: <AnalysisPage form={form} /> },
        { value: 'section_8', label: 'Blok VIII', form: <DisseminationPage form={form}/> },
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
                            <Button type='submit' disabled={isLoading} variant={'outline'}>
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