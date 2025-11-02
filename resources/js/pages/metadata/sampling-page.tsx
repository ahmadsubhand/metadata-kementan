import { SectionProps } from "@/types";
import FormLayout from "./form-layout";
import RadioOption from "@/components/input/radio-option";
import H2 from "@/components/h2";
import H3 from "@/components/h3";
import SelectOption from "@/components/input/select-option";
import InputField from "@/components/input/input-field";
import { MetadataStoreType } from "@/validators/metadata";

export default function SamplingPage({ form } : SectionProps<MetadataStoreType>) {
    const finalStageSamplingMethodId = form.watch('final_stage_sampling_method_id') as number | null;

    return (
        <FormLayout>
            <H2 text='V. DESAIN SAMPEL' />

            {/* Jenis Rancangan Sampel */}
            <RadioOption
                form={form}
                radioName='sample_design_type_id'
                radioLabel={<H3 text='5.1. Jenis Rancangan Sampel' />}
                options={[
                    { label: 'Single Stage/Phase', value: 1 },
                    { label: 'Multi Stage/Phase', value: 2 }
                ]}
            />
        
            {/* Metode Pemilihan Sampel Tahap Terakhir */}
            <RadioOption
                form={form}
                radioName='final_stage_sampling_method_id'
                radioLabel={<H3 text='5.2. Metode Pemilihan Sampel Tahap Terakhir' />}
                options={[
                    { label: 'Sampel Probabilitas', value: 1 },
                    { label: 'Sampel Nonprobabilitas', value: 2 }
                ]}
            />
            
            {/* selectLabel={<H3 text='5.3.a Jika “sampel probabilitas”, metode yang digunakan' />} */}
            {/* selectLabel={<H3 text='5.3.b Jika “sampel nonprobabilitas”, metode yang digunakan' />} */}
            { finalStageSamplingMethodId &&
                <SelectOption
                    form={form}
                    selectName='sampling_method_id'
                    selectPlaceholder='Pilih metode yang digunakan'
                    selectLabel={<H3 text={
                        finalStageSamplingMethodId === 1 ? 
                        '5.3.a Jika “sampel probabilitas”, metode yang digunakan' :
                        '5.3.b Jika “sampel nonprobabilitas”, metode yang digunakan'
                    } />}
                    options={
                        finalStageSamplingMethodId === 1 ? [
                            { label: 'Simple Random Sampling', value: 1 },
                            { label: 'Systematic Random Sampling', value: 2 },
                            { label: 'Stratified Random Sampling', value: 3 },
                            { label: 'Cluster Sampling', value: 4 },
                            { label: 'Probability Proportional to Size Sampling', value: 5 },
                        ] : [
                            { label: 'Quota Sampling', value: 6 },
                            { label: 'Accidental Sampling', value: 7 },
                            { label: 'Purposive Sampling', value: 8 },
                            { label: 'Snowball Sampling', value: 9 },
                            { label: 'Saturation Sampling', value: 10 },
                        ]
                    }
                />
            }

            <RadioOption
                form={form}
                radioName='final_stage_sampling_frame_id'
                radioLabel={<H3 text='5.4. Kerangka Sampel Tahap Terakhir' />}
                options={[
                    { label: 'List Frame', value: 1 },
                    { label: 'Area Frame', value: 2 },
                ]}
            />

            <InputField
                form={form}
                inputName='overall_sample_fraction'
                inputLabel={<H3 text={'5.5.	Fraksi Sampel Keseluruhan'} />}
                inputPlaceholder='. . .'
                inputType={'number'}
            />

            <InputField
                form={form}
                inputName='estimated_sampling_error'
                inputLabel={<H3 text={'5.6.	Nilai Perkiraan Sampling Error Variabel Utama'} />}
                inputPlaceholder='. . .'
                inputType={'number'}
            />

            <InputField
                form={form}
                inputName='sampling_unit'
                inputLabel={<H3 text={'5.7. Unit Sampel'} />}
                inputPlaceholder='. . .'
                inputType={'number'}
            />

            <InputField
                form={form}
                inputName='observation_unit'
                inputLabel={<H3 text={'5.8. Unit Observasi'} />}
                inputPlaceholder='. . .'
                inputType={'number'}
            />
        </FormLayout>
    )
}
