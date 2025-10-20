import { SectionProps } from "@/types"
import FormLayout from "./form-layout"
import H2 from "@/components/h2"
import RadioOption from "@/components/input/radio-option"
import H3 from "@/components/h3"
import InputLayout from "./input-layout"
import CheckboxOption from "@/components/input/checkbox-option"
import InputSide from "@/components/input/input-side"

export default function CollectionPage({ form } : SectionProps) {
    const dataCollectionTools = form.watch('data_collection_tools') as number[] | null;

    return (
        <FormLayout>
            <H2 text='VI. PENGUMPULAN DATA' />

            {/* Pilot Survey */}
            <RadioOption
                form={form}
                radioLabel={<H3 text='6.1. Apakah Melakukan Uji Coba (Pilot Survey)?' />}
                radioName='pilot_survey'
                options={[
                    { label : 'Ya', value: 1 },
                    { label : 'Tidak', value: 2 },
                ]}
            />

             {/* Metode Pemeriksaan Kualitas */}
            <CheckboxOption 
                form={form}
                checkboxName="data_quality_check_methods"
                checkboxLabel={<H3 text='6.2. Metode Pemeriksaan Kualitas Pengumpulan Data' />}
                otherFieldName={'data_quality_check_method_other'}
                options={[
                    { label : 'Kunjungan kembali (revisit)', value: 1 },
                    { label : 'Supervisi', value: 2 },
                    { label : 'Task Force', value: 3 },
                    { label : 'Lainnya', value: 4 },
                ]}
            />

            {/* Penyesuaian Nonrespon */}
            <RadioOption
                form={form}
                radioName='nonresponse_adjustment'
                radioLabel={<H3 text='6.3. Apakah Melakukan Penyesuaian Nonrespon?' />}
                options={[
                    { label : 'Ya', value: 1 },
                    { label : 'Tidak', value: 2 },
                ]}
            />
            
            {dataCollectionTools && dataCollectionTools.some(num => [1, 2, 3].includes(num)) && <>
                {/* Petugas Pengumpulan Data */}
                <RadioOption
                    form={form}
                    radioName='data_collector_type_id'
                    radioLabel={<H3 text='6.4. Petugas Pengumpulan Data' />}
                    classNameItem='flex-col gap-2'
                    options={[
                        { label : 'Staf instansi penyelenggara', value: 1 },
                        { label : 'Mitra/tenaga kontrak', value: 2 },
                        { label : 'Staf instansi penyelenggara dan mitra/tenaga kontrak', value: 3 },
                    ]}
                />

                {/* Persyaratan Pendidikan Terendah Petugas Pengumpulan Data */}
                <RadioOption
                    form={form}
                    radioName='minimum_education_requirement_id'
                    radioLabel={<H3 text='6.5. Persyaratan Pendidikan Terendah Petugas Pengumpulan Data' />}
                    classNameItem='flex-col gap-2'
                    options={[
                        { label : '≤ SMP', value: 1 },
                        { label : 'SMA/SMK', value: 2 },
                        { label : 'Diploma I/II/III', value: 3 },
                        { label : 'Diploma IV/S1/S2/S3', value: 4 },
                    ]}
                />

                {/* Jumlah Petugas */}
                <InputLayout>
                    <H3 text='6.6. Jumlah Petugas' />
                    <InputSide 
                        form={form}
                        inputName='number_of_supervisors'
                        inputPlaceholder='...'
                        inputType='number'
                        firstInputLabel='Supervisor/penyelia/pengawas'
                        secondInputLabel='orang'
                        classNameInput='w-20 text-center'
                    />
                    <InputSide 
                        form={form}
                        inputName='number_of_enumerators'
                        inputPlaceholder='...'
                        inputType='number'
                        firstInputLabel='Pengumpul data/enumerator'
                        secondInputLabel='orang'
                        classNameInput='w-20 text-center'
                    />
                </InputLayout>

                {/* Pelatihan Petugas */}
                <RadioOption
                    form={form}
                    radioName='training_of_data_collector'
                    radioLabel={<H3 text='6.7. Apakah Melakukan Pelatihan Petugas?' />}
                    options={[
                        { label : 'Ya', value: 1 },
                        { label : 'Tidak', value: 2 },
                    ]}
                />
            </>}
        </FormLayout>
    )
}
