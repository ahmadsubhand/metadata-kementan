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

export default function Metadata() {
    // Form

    const { errors } = usePage().props;

    const form = useForm({
        resolver: zodResolver(metadataStoreSchema), mode: 'onChange', defaultValues: {
            // recommendation_identity: null,
            // I. PENYELENGGARA
            // organizing_agency: null,
            // organizing_agency_full_address: null,
            // organizing_agency_phone: null,
            // organizing_agency_fax: null,
            // organizing_agency_email: null,
        
            // II. PENANGGUNG JAWAB
            // responsible_echelon_1_unit: null,
            // responsible_echelon_2_unit: null,
            // technical_responsible_name: null,
            // technical_responsible_position: null,
            // technical_responsible_address: null,
            // technical_responsible_phone: null,
            // technical_responsible_fax: null,
            // technical_responsible_email: null,
        
            // III. PERENCANAAN DAN PERSIAPAN
            // activity_background: null,
            // activity_objective: null,
            // activity_planning_start_date: null,
            // activity_planning_end_date: null,
            // design_start_date: null,
            // design_end_date: null,
            // data_collection_start_date: null,
            // data_collection_end_date: null,
            // data_processing_start_date: null,
            // data_processing_end_date: null,
            // data_analysis_start_date: null,
            // data_analysis_end_date: null,
            // result_dissemination_start_date: null,
            // result_dissemination_end_date: null,
            // evaluation_start_date: null,
            // evaluation_end_date: null,
            // collected_variables table
        
            // IV. DESAIN KEGIATAN
            // activity_conduct_id: null,
            // frequency_of_implementation: null,
            // data_collection_type_id: null,
            // data_collection_coverage_id: null,
            // data_collection_methods: null,
            // data_collection_tools: null,
            // data_collection_units: null,
        
            // V. DESAIN SAMPEL
            // sample_design_type_id: null,
            // final_stage_sampling_method_id: null,
            // probability_sampling_method_id: null,
            // nonprobability_sampling_method_id: null,
            // final_stage_sampling_frame_id: null,
            // overall_sample_fraction: null,
            // estimated_sampling_error: null,
            // sampling_unit: null,
            // observation_unit: null,
        
            // VI. PENGUMPULAN DATA
            // pilot_survey: null,
            // data_quality_check_method: null,
            // nonresponse_adjustment: null,
            // data_collector_type_id: null,
            // minimum_education_requirement_id: null,
            // number_of_supervisors: null,
            // number_of_enumerators: null,
            // training_of_data_collector: null,
        
            // VII. PENGOLAHAN DAN ANALISIS
            // editing_step: null,
            // coding_step: null,
            // data_entry_step: null,
            // validation_step: null,
            // analysis_method_id: null,
            // analysis_units: null,
            // presentation_levels: null,
        
            // VIII. DISEMINASI HASIL
            // printed_product: null,
            // digital_product: null,
            // microdata_product: null,
            // printed_release_date: null,
            // digital_release_date: null,
            // microdata_release_date: null,
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
        frequency_of_implementation: 'section_4',
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

    const test = form.watch('activity_planning_start_date');
    useEffect(() => {
        console.log(test);
    }, [test])

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