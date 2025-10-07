import { SectionProps } from "@/types"
import { useState } from "react"
import FormLayout from "./form-layout"
import H2 from "@/components/h2"
import H3 from "@/components/h3"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import RadioOption from "@/components/input/radio-option"
import SelectOption from "@/components/input/select-option"
import { Input } from "@/components/ui/input"
import CheckboxOption from "@/components/input/checkbox-option"
import { Label } from "@/components/ui/label"
import InputLayout from "./input-layout"

export default function DesignPage({ form } : SectionProps) {
    const metodePengumpulanData = {
        id: 'r-4-6',
        label: '4.6. Metode Pengumpulan Data',
        items: [
            { label: 'Wawancara', value: '1' },
            { label: 'Mengisi kuesioner sendiri (swacacah)', value: '2' },
            { label: 'Pengamatan (observasi)', value: '4' },
            { label: 'Pengumpulan data sekunder', value: '8' },
            { label: 'Lainnya', value: '16' },
        ]
    }

    const saranaPengumpulanData = {
        id: 'r-4-7',
        label: '4.7. Sarana Pengumpulan Data',
        items: [
            { label: 'Pencil-and-Paper Interviewing (PAPI)', value: '1' },
            { label: 'Computer-assisted Personal Interviewing (CAPI)', value: '2' },
            { label: 'Computer-assisted Telephones Interviewing (CATI)', value: '4' },
            { label: 'Computer Aided Web Interviewing (CAWI)', value: '8' },
            { label: 'Mail', value: '16' },
            { label: 'Lainnya', value: '32' },
        ]
    };

    const unitPengumpulanData = {
        id: 'r-4-8',
        label: '4.8. Unit Pengumpulan Data',
        items: [
            { label: 'Individu', value: '1' },
            { label: 'Rumah tangga', value: '2' },
            { label: 'Usaha/perusahaan', value: '4' },
            { label: 'Lainnya', value: '8' },
        ]
    };

    type Row = {
        id: number,
        provinsi: string,
        kota: string,
    }

    const [rows, setRows] = useState<Row[]>([
        { id: 1, provinsi: "", kota: "" },
    ])

    const addRow = () => {
        setRows((prev) => [
            ...prev,
            { id: prev.length + 1, provinsi: "", kota: "" },
        ])
    }

    const removeLastRow = () => {
        setRows((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev))
    }

    const updateRow = (id: number, field: keyof Row, value: string) => {
        setRows((prev) =>
            prev.map((row) =>
                row.id === id ? { ...row, [field]: value } : row
            )
        )
    }

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
            <H3 text='4.5. Jika “sebagian wilayah Indonesia”, wilayah kegiatan' />

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">No</TableHead>
                        <TableHead className="text-center">Provinsi</TableHead>
                        <TableHead className="text-center">Kabupaten/Kota</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={row.id}>
                            <TableCell className="text-center">{index + 1}</TableCell>
                            <TableCell>
                                <Input
                                    type='text'
                                    value={row.provinsi}
                                    onChange={(e) => updateRow(row.id, "provinsi", e.target.value)}
                                />
                            </TableCell>
                            <TableCell>
                                <Input
                                    type='text'
                                    value={row.kota}
                                    onChange={(e) => updateRow(row.id, "kota", e.target.value)}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
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
            
            {/* Metode Pengumpulan Data */}
            <InputLayout>
                <Label htmlFor={metodePengumpulanData.id}>
                    <H3 text={metodePengumpulanData.label} />
                </Label>
                <CheckboxOption data={metodePengumpulanData} />
            </InputLayout>

            {/* Sarana Pengumpulan Data */}
            <InputLayout>
                <Label htmlFor={saranaPengumpulanData.id}>
                    <H3 text={saranaPengumpulanData.label} />
                </Label>
                <CheckboxOption data={saranaPengumpulanData} />
            </InputLayout>

            {/* Unit Pengumpulan Data */}
            <InputLayout>
                <Label htmlFor={unitPengumpulanData.id}>
                    <H3 text={unitPengumpulanData.label} />
                </Label>
                <CheckboxOption data={unitPengumpulanData} />
            </InputLayout>
        </FormLayout> 
    )
}