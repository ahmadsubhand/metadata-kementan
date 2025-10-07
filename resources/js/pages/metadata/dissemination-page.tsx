import { SectionProps } from "@/types";
import FormLayout from "./form-layout";
import H2 from "@/components/h2";
import InputLayout from "./input-layout";
import H3 from "@/components/h3";
import RadioOption from "@/components/input/radio-option";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DatePicker } from "@/components/input/date-picker";

export default function DisseminationPage({ form } : SectionProps) {
    return (
        <FormLayout>
            <H2 text='VIII.	DISEMINASI HASIL' />

            <InputLayout>
                <H3 text='8.1 Produk Kegiatan yang Tersedia untuk Umum' />
                
                <RadioOption
                    form={form}
                    radioLabel={'Tercetak (hardcopy)'}
                    radioName={'printed_product'}
                    classNameWrapper='flex-row gap-4'
                    classNameLabel='w-50 font-normal'
                    options={[
                        { label: 'Ya', value: 1 },
                        { label: 'Tidak', value: 2 }
                    ]}
                />
                <RadioOption 
                    form={form}
                    radioLabel={'Digital (softcopy)'}
                    radioName={'digital_product'}
                    classNameWrapper='flex-row gap-4'
                    classNameLabel='w-50 font-normal'
                    options={[
                        { label: 'Ya', value: 1 },
                        { label: 'Tidak', value: 2 }
                    ]}
                />
                <RadioOption 
                    form={form}
                    radioLabel={'Data Mikro'}
                    radioName={'microdata_product'}
                    classNameWrapper='flex-row gap-4'
                    classNameLabel='w-50 font-normal'
                    options={[
                        { label: 'Ya', value: 1 },
                        { label: 'Tidak', value: 2 }
                    ]}
                />
            </InputLayout>

            <H3 text='8.2 Rencana Rilis Produk Kegiatan' />
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='text-center'>Jenis Diseminasi</TableHead>
                        <TableHead className='text-center'>Tanggal Rilis</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Tercetak (hardcopy)</TableCell>
                        <TableCell><DatePicker form={form} inputName="printed_release_date" /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Digital (softcopy)</TableCell>
                        <TableCell><DatePicker form={form} inputName="digital_release_date" /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Data Mikro</TableCell>
                        <TableCell><DatePicker form={form} inputName="microdata_release_date" /></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </FormLayout>
    )
}