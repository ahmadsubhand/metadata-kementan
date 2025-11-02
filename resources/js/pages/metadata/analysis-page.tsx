import { SectionProps } from "@/types"
import FormLayout from "./form-layout"
import H2 from "@/components/h2"
import InputLayout from "./input-layout"
import H3 from "@/components/h3"
import RadioOption from "@/components/input/radio-option"
import CheckboxOption from "@/components/input/checkbox-option"
import { MetadataStoreType } from "@/validators/metadata"

export default function AnalysisPage({ form } : SectionProps<MetadataStoreType>) {
    return (
        <FormLayout>
            <H2 text='VII. PENGOLAHAN DAN ANALISIS' />

            <InputLayout>
                <H3 text='7.1. Tahapan Pengolahan Data' />
                <RadioOption
                    form={form}
                    radioLabel={'Penyuntingan (Editing)'}
                    radioName={'editing_step'}
                    classNameWrapper='flex-row gap-4'
                    classNameLabel='w-50 font-normal'
                    options={[
                        { label: 'Ya', value: 1 },
                        { label: 'Tidak', value: 2 }
                    ]}
                />
                <RadioOption 
                    form={form}
                    radioLabel={'Penyandian (Coding)'}
                    radioName={'coding_step'}
                    classNameWrapper='flex-row gap-4'
                    classNameLabel='w-50 font-normal'
                    options={[
                        { label: 'Ya', value: 1 },
                        { label: 'Tidak', value: 2 }
                    ]}
                />
                <RadioOption 
                    form={form}
                    radioLabel={'Data Entry'}
                    radioName={'data_entry_step'}
                    classNameWrapper='flex-row gap-4'
                    classNameLabel='w-50 font-normal'
                    options={[
                        { label: 'Ya', value: 1 },
                        { label: 'Tidak', value: 2 }
                    ]}
                />
                <RadioOption 
                    form={form}
                    radioLabel={'Penyahihan (Validasi)'}
                    radioName={'validation_step'}
                    classNameWrapper='flex-row gap-4'
                    classNameLabel='w-50 font-normal'
                    options={[
                        { label: 'Ya', value: 1 },
                        { label: 'Tidak', value: 2 }
                    ]}
                />
            </InputLayout>

            <RadioOption 
                form={form}
                radioLabel={<H3 text='7.2 Metode Analisis' />}
                radioName='analysis_method_id'
                options={[
                    { value: 1, label: 'Deskriptif' },
                    { value: 2, label: 'Inferensia' },
                    { value: 3, label: 'Deskriptif dan Inferensia' },
                ]}
            />

            <CheckboxOption 
                form={form}
                checkboxLabel={<H3 text='7.3 Unit Analisis' />}
                checkboxName="analysis_units"
                otherFieldName={'analysis_unit_other'}
                options={[
                    { value: 1, label: 'Individu' },
                    { value: 2, label: 'Rumah tangga' },
                    { value: 3, label: 'Usaha/perusahaan' },
                    { value: 4, label: 'Lainnya' },
                ]}
            />

            <CheckboxOption 
                form={form}
                checkboxLabel={<H3 text='7.4 Tingkat Penyajian Hasil Analisis' />}
                checkboxName="presentation_levels"
                otherFieldName={'presentation_level_other'}
                options={[
                    { value: 1, label: 'Nasional' },
                    { value: 2, label: 'Provinsi' },
                    { value: 3, label: 'Kabupaten/Kota' },
                    { value: 4, label: 'Kecamatan' },
                    { value: 5, label: 'Lainnya' },
                ]}
            />
        </FormLayout>
    )
}