import { SectionProps } from "@/types";
import FormLayout from "./form-layout";
import H2 from "@/components/h2";
import H3 from "@/components/h3";
import SectionLayout from "./section-layout";
import InputField from "@/components/input/input-field";

export default function ResponsiblePage({ form } : SectionProps) {
    return (
        <FormLayout>
            <H2 text='II. PENANGGUNG JAWAB' />

            {/* Unit Eselon Penanggung Jawab */}
            <H3 text='2.1. Unit Eselon Penanggung Jawab' />

            <SectionLayout className='grid grid-cols-2'>
                <InputField
                    form={form}
                    inputName='responsible_echelon_1_unit'
                    inputLabel='Eselon 1'
                    inputPlaceholder='Nama unit eselon 1'
                    inputType='text'
                />
                <InputField
                    form={form}
                    inputName='responsible_echelon_2_unit'
                    inputLabel='Eselon 2'
                    inputPlaceholder='Nama unit eselon 2'
                    inputType='text'
                />
            </SectionLayout>

            {/* Penanggung Jawab Teknis (setingkat Eselon 3) */}
            <H3 text='2.2. Penanggung Jawab Teknis (setingkat Eselon 3)' />

            <SectionLayout className="grid grid-cols-2">
                <InputField
                    form={form}
                    inputName='technical_responsible_name'
                    inputLabel='Nama'
                    inputPlaceholder='Nama'
                    inputType='text'
                />

                <InputField
                    form={form}
                    inputName='technical_responsible_position'
                    inputLabel='Jabatan'
                    inputPlaceholder='Jabatan'
                    inputType='text'
                />
            </SectionLayout>

            <InputField
                form={form}
                inputName='technical_responsible_address'
                inputLabel='Alamat'
                inputPlaceholder='Alamat'
                inputType='text'
            />

            <SectionLayout className='grid grid-cols-3'>
                <InputField
                    form={form}
                    inputName='technical_responsible_phone'
                    inputLabel='Telepon'
                    inputPlaceholder='Nomor telepon'
                    inputType='text'
                />
                <InputField
                    form={form}
                    inputName='technical_responsible_fax'
                    inputLabel='Faksimile'
                    inputPlaceholder='Nomor fax'
                    inputType='text'
                />
                <InputField
                    form={form}
                    inputName='technical_responsible_email'
                    inputLabel='Email'
                    inputPlaceholder='Alamat email'
                    inputType='text'
                />
            </SectionLayout>
        </FormLayout>
    )
}