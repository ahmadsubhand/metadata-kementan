import { SectionProps } from "@/types"
import { useState } from "react"
import FormLayout from "./form-layout"
import H2 from "@/components/h2"
import TextareaField from "@/components/input/textarea-field"
import H3 from "@/components/h3"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DatePicker } from "@/components/input/date-picker"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronUp, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PlanningPage({ form } : SectionProps) {
    type Row = {
        id: number
        nama: string
        konsep: string
        definisi: string
        referensi: string
    }

    const [rows, setRows] = useState<Row[]>([
        { id: 1, nama: "", konsep: "", definisi: "", referensi: "" },
    ])

    const addRow = () => {
        setRows((prev) => [
            ...prev,
            { id: prev.length + 1, nama: "", konsep: "", definisi: "", referensi: "" },
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
            <H2 text='III. PERENCANAAN DAN PERSIAPAN' />

            {/* Latar Belakang Kegiatan */}
            <TextareaField
                form={form}
                inputName='activity_background'
                inputLabel={<H3 text='3.1. Latar Belakang Kegiatan' />}
                inputPlaceholder='Latar belakang kegiatan'
            />

            {/* Tujuan Kegiatan */}
            <TextareaField
                form={form}
                inputName='activity_objective'
                inputLabel={<H3 text='3.2. Tujuan Kegiatan' />}
                inputPlaceholder='Tujuan kegiatan'
            />

            {/* Rencana Jadwal Kegiatan */}
            <H3 text='3.3. Rencana Jadwal Kegiatan' />
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='text-center' colSpan={2}>Kegiatan</TableHead>
                        <TableHead className='text-center'>Tanggal Mulai</TableHead>
                        <TableHead className='text-center'>Tanggal Selesai</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* A. Perencanaan */}
                    <TableRow>
                        <TableCell colSpan={4} className='font-medium'>Perencanaan</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Perencanaan Kegiatan</TableCell>
                        <TableCell><DatePicker form={form} inputName="activity_planning_start_date" /></TableCell>
                        <TableCell><DatePicker form={form} inputName="activity_planning_end_date" /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>Desain</TableCell>
                        <TableCell><DatePicker form={form} inputName="design_start_date" /></TableCell>
                        <TableCell><DatePicker form={form} inputName="design_end_date" /></TableCell>
                    </TableRow>

                    {/* B. Pengumpulan */}
                    <TableRow>
                        <TableCell colSpan={4} className="font-medium">Pengumpulan</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>Pengumpulan Data</TableCell>
                        <TableCell><DatePicker form={form} inputName="data_collection_start_date" /></TableCell>
                        <TableCell><DatePicker form={form} inputName="data_collection_end_date" /></TableCell>
                    </TableRow>

                    {/* C. Pemeriksaan */}
                    <TableRow>
                        <TableCell colSpan={4} className="font-medium">Pemeriksaan</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>4</TableCell>
                        <TableCell>Pengolahan Data</TableCell>
                        <TableCell><DatePicker form={form} inputName="data_processing_start_date" /></TableCell>
                        <TableCell><DatePicker form={form} inputName="data_processing_end_date" /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>5</TableCell>
                        <TableCell>Analisis</TableCell>
                        <TableCell><DatePicker form={form} inputName="data_analysis_start_date" /></TableCell>
                        <TableCell><DatePicker form={form} inputName="data_analysis_end_date" /></TableCell>
                    </TableRow>

                    {/* D. Penyebarluasan */}
                    <TableRow>
                        <TableCell colSpan={4} className="font-medium">Penyebarluasan</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>6</TableCell>
                        <TableCell>Diseminasi Hasil</TableCell>
                        <TableCell><DatePicker form={form} inputName="result_dissemination_start_date" /></TableCell>
                        <TableCell><DatePicker form={form} inputName="result_dissemination_end_date" /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>7</TableCell>
                        <TableCell>Evaluasi</TableCell>
                        <TableCell><DatePicker form={form} inputName="evaluation_start_date" /></TableCell>
                        <TableCell><DatePicker form={form} inputName="evaluation_end_date" /></TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            {/* Variabel (Karakteristik) yang Dikumpulkan */}

            <H3 text='3.4. Variabel (Karakteristik) yang Dikumpulkan' />

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">No</TableHead>
                        <TableHead className="text-center">Nama Variabel (Karakteristik)</TableHead>
                        <TableHead className="text-center">Konsep</TableHead>
                        <TableHead className="text-center">Definisi</TableHead>
                        <TableHead className="text-center">Referensi Waktu (Periode Enumerasi)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={row.id}>
                            <TableCell className="text-center">{index + 1}</TableCell>
                            <TableCell>
                                <Textarea
                                    value={row.nama}
                                    onChange={(e) => updateRow(row.id, "nama", e.target.value)}
                                />
                            </TableCell>
                            <TableCell>
                                <Textarea
                                    value={row.konsep}
                                    onChange={(e) => updateRow(row.id, "konsep", e.target.value)}
                                />
                            </TableCell>
                            <TableCell>
                                <Textarea
                                    value={row.definisi}
                                    onChange={(e) => updateRow(row.id, "definisi", e.target.value)}
                                />
                            </TableCell>
                            <TableCell>
                                <Textarea
                                    value={row.referensi}
                                    onChange={(e) => updateRow(row.id, "referensi", e.target.value)}
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
                            Aksi tabel <ChevronUp />
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

        </FormLayout>
    )
}
