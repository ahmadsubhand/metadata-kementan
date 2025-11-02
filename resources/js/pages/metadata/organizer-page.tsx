import { SectionProps } from "@/types";
import FormLayout from "./form-layout";
import H2 from "@/components/h2";
import InputField from "@/components/input/input-field";
import SectionLayout from "./section-layout";
import H3 from "@/components/h3";
import { MetadataStoreType } from "@/validators/metadata";

export default function OrganizerPage({ form } : SectionProps<MetadataStoreType>) {
    return (
        <FormLayout>
            <H2 text='I. PENYELENGGARA' />

            {/* Instansi penyelenggara */}
            <InputField
                form={form}
                inputName='organizing_agency'
                inputLabel={<H3 text='1.1. Instansi Penyelenggara' />}
                inputPlaceholder='Nama instansi'
                inputType={'text'}
                className='w-full'
            />

            {/* Alamat Lengkap Instansi Penyelenggara */}
            <InputField
                form={form}
                inputName='organizing_agency_full_address'
                inputLabel={<H3 text='1.2. Alamat Lengkap Instansi Penyelenggara' />}
                inputPlaceholder='Alamat instansi'
                inputType='text'
                className='w-full'
            />

            <SectionLayout className='grid grid-cols-3'>
                <InputField
                    form={form}
                    inputName='organizing_agency_phone'
                    inputLabel='Telepon'
                    inputPlaceholder='Nomor telepon'
                    inputType='text'
                />
                <InputField
                    form={form}
                    inputName='organizing_agency_fax'
                    inputLabel='Faksimile'
                    inputPlaceholder='Nomor fax'
                    inputType='text'
                />
                <InputField
                    form={form}
                    inputName='organizing_agency_email'
                    inputLabel='Email'
                    inputPlaceholder='Alamat email'
                    inputType='text'
                />
            </SectionLayout>
        </FormLayout>
    )
}
