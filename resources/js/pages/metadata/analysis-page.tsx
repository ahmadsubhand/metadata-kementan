import { SectionProps } from "@/types"
import FormLayout from "./form-layout"
import H2 from "@/components/h2"
import InputLayout from "./input-layout"
import H3 from "@/components/h3"
import RadioOption from "@/components/input/radio-option"
import { Label } from "@/components/ui/label"
import CheckboxOption from "@/components/input/checkbox-option"

export default function AnalysisPage({ form } : SectionProps) {
    const unitAnalisis = {
        id: 'unit_analisis',
        label: '7.3 Unit Analisis',
        items: [
            { value: '1', label: 'Individu' },
            { value: '2', label: 'Rumah tangga' },
            { value: '4', label: 'Usaha/perusahaan' },
            { value: '8', label: 'Lainnya' },
        ]
    }

    const tingkatPenyajian = {
        id: 'tingkat_penyajian',
        label: '7.4 Tingkat Penyajian Hasil Analisis',
        items: [
            { value: '1', label: 'Nasional' },
            { value: '2', label: 'Provinsi' },
            { value: '4', label: 'Kabupaten/Kota' },
            { value: '8', label: 'Kecamatan' },
            { value: '16', label: 'Lainnya' },
        ]
    }

    // Penyuntingan (Editing)
        // Penyandian (Coding)
        // Data Entry
        // Penyahihan (Validasi)

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

            <InputLayout>
                <Label htmlFor={unitAnalisis.id}>
                    <H3 text={unitAnalisis.label} />
                </Label>
                <CheckboxOption data={unitAnalisis} />
            </InputLayout>

            <InputLayout>
                <Label htmlFor={tingkatPenyajian.id}>
                    <H3 text={tingkatPenyajian.label} />
                </Label>
                <CheckboxOption data={tingkatPenyajian} />
            </InputLayout>
        </FormLayout>
    )
}