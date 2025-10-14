import { SectionProps } from "@/types"
import FormLayout from "./form-layout"
import H2 from "@/components/h2"
import H3 from "@/components/h3"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import RadioOption from "@/components/input/radio-option"
import SelectOption from "@/components/input/select-option"
import CheckboxOption from "@/components/input/checkbox-option"
import { useFieldArray } from "react-hook-form"
import InputField from "@/components/input/input-field"

export default function DesignPage({ form } : SectionProps) {
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "activity_regions",
    });

    const addRow = () => {
        append({
            number: fields.length + 1,
            province: "",
            variable_definition: "",
            city_or_regency: "",
        });
    };

    const removeLastRow = () => {
        if (fields.length) remove(fields.length - 1);
    };

    const activityConductId = form.watch('activity_conduct_id') as number | null;
    const dataCollectionCoverageId = form.watch('data_collection_coverage_id') as number | null;

    return (
        <FormLayout>
            <H2 text='IV. DESAIN KEGIATAN'/>
            
            {/* Kegiatan ini dilakukan */}
            <RadioOption
                form={form}
                radioLabel={<H3 text='4.1. Kegiatan ini dilakukan' />}
                radioName={'activity_conduct_id'}
                options={[
                    { label: 'Hanya sekali', value: 1 },
                    { label: 'Berulang', value: 2 },
                ]}
            />

            {/* Jika “berulang”, frekuensi penyelenggaraan */}
            { (activityConductId === 2) && 
            <SelectOption
                form={form}
                selectLabel={<H3 text='4.2. Jika “berulang”, frekuensi Penyelenggaraan' />}
                selectName='frequency_of_implementation_id'
                selectPlaceholder={'Pilih frekuensi penyelenggaraan'}
                options={[
                    { label: 'Harian', value: 1 },
                    { label: 'Mingguan', value: 2 },
                    { label: 'Bulanan', value: 3 },
                    { label: 'Triwulanan', value: 4 },
                    { label: 'Empat Bulanan', value: 5 },
                    { label: 'Semesteran', value: 6 },
                    { label: 'Tahunan', value: 7 },
                    { label: '> Dua Tahunan', value: 8 },
                ]}
            />  
            }

            {/* Tipe Pengumpulan Data */}
            <SelectOption 
                form={form}
                selectLabel={<H3 text='4.3. Tipe Pengumpulan Data' />}
                selectName='data_collection_type_id'
                selectPlaceholder={'Pilih tipe pengumpulan data'}
                options={[
                    { label: 'Longitudinal Panel', value: 1 },
                    { label: 'Cross Sectional', value: 2 },
                    { label: 'Longitudinal Cross Sectional', value: 3 },
                ]}
            />  

            {/* Cakupan Wilayah Pengumpulan Data */}
            <SelectOption 
                form={form}
                selectLabel={<H3 text='4.4. Cakupan Wilayah Pengumpulan Data' />}
                selectName='data_collection_coverage_id'
                selectPlaceholder={'Pilih cakupan wilayah'}
                options={[
                    { label: 'Seluruh Wilayah Indonesia', value: 1, },
                    { label: 'Sebagian Wilayah Indonesia', value: 2 },
                ]}
            />  
            
            {/* Jika “sebagian wilayah Indonesia”, wilayah kegiatan */}
            {dataCollectionCoverageId === 2 &&
            <>
                <H3 text='4.5. Jika “sebagian wilayah Indonesia”, wilayah kegiatan' />

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center">No</TableHead>
                            <TableHead className="text-center">Provinsi</TableHead>
                            <TableHead className="text-center">Kabupaten/Kota</TableHead>
                        </TableRow>
                    </TableHeader>
                    {
                        fields.length > 0 ? (
                            <TableBody>
                                {fields.map((field, index) => (
                                    <TableRow key={field.id}>
                                        <TableCell className="text-center">{index + 1}</TableCell>
                                        <TableCell>
                                            <InputField 
                                                form={form}
                                                inputName={`activity_regions.${index}.province`}
                                                inputPlaceholder=""
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <InputField 
                                                form={form}
                                                inputName={`activity_regions.${index}.city_or_regency`}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-4">
                                    Silakan tambahkan baris baru pada menu aksi tabel di kanan bawah tabel untuk mulai mengisi data
                                </TableCell>
                            </TableRow>
                        )
                    }
                </Table>
                <div className="self-end">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                                Aksi tabel <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={addRow}
                                className="flex justify-between gap-4"
                            >
                                Tambah baris baru <Plus />
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={removeLastRow}
                                className="flex justify-between gap-4"
                            >
                                Hapus baris terakhir <Trash />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </>
            }
            
            {/* Metode Pengumpulan Data */}
            <CheckboxOption 
                form={form}
                checkboxLabel={<H3 text='4.6. Metode Pengumpulan Data' />}
                checkboxName={'data_collection_methods'}
                options={[
                    { label: 'Wawancara', value: 1 },
                    { label: 'Mengisi kuesioner sendiri (swacacah)', value: 2 },
                    { label: 'Pengamatan (observasi)', value: 3 },
                    { label: 'Pengumpulan data sekunder', value: 4 },
                    { label: 'Lainnya', value: 5 },
                ]}
            />

            {/* Sarana Pengumpulan Data */}
            <CheckboxOption 
                form={form}
                checkboxLabel={<H3 text='4.7. Sarana Pengumpulan Data' />}
                checkboxName={'data_collection_tools'}
                options={[
                    { label: 'Pencil-and-Paper Interviewing (PAPI)', value: 1 },
                    { label: 'Computer-assisted Personal Interviewing (CAPI)', value: 2 },
                    { label: 'Computer-assisted Telephones Interviewing (CATI)', value: 3 },
                    { label: 'Computer Aided Web Interviewing (CAWI)', value: 4 },
                    { label: 'Mail', value: 5 },
                    { label: 'Lainnya', value: 6 },
                ]}
            />

            {/* Unit Pengumpulan Data */}
            <CheckboxOption 
                form={form}
                checkboxLabel={<H3 text='4.8. Unit Pengumpulan Data' />}
                checkboxName={'data_collection_units'}
                options={[
                    { label: 'Individu', value: 1 },
                    { label: 'Rumah tangga', value: 2 },
                    { label: 'Usaha/perusahaan', value: 3 },
                    { label: 'Lainnya', value: 4 },
                ]}
            />
        </FormLayout> 
    )
}