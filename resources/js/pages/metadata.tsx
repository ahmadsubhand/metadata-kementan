import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DatePicker } from '@/components/ui/date-picker';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { metadata } from '@/routes'
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Plus, Trash } from 'lucide-react';
import { ReactNode, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Metadata Statistik',
        href: metadata().url,
    },
];

export default function Metadata() {
    const menus = [
        {
            value: 'first_page',
            label: 'Halaman Awal',
            form: <FirstPage />
        },
        {
            value: 'section_1',
            label: 'Blok I',
            form: <Section1 />
        },
        {
            value: 'section_2',
            label: 'Blok II',
            form: <Section2 />
        },
        {
            value: 'section_3',
            label: 'Blok III',
            form: <Section3 />
        },
        {
            value: 'section_4',
            label: 'Blok IV',
            form: <Section4 />
        },
        {
            value: 'section_5',
            label: 'Blok V',
            form: <Section5 />
        },
        {
            value: 'section_6',
            label: 'Blok VI',
            form: <Section6 />
        },
        {
            value: 'section_7',
            label: 'Blok VII',
            form: <Section7 />
        },
        {
            value: 'section_8',
            label: 'Blok VIII',
            form: <Section8 />
        },
    ]

    const [step, setStep] = useState(menus[0].value);

    function nextStep() {
        const currentIndex = menus.findIndex(menu => menu.value === step)
        if (currentIndex < (menus.length - 1)) setStep(menus[currentIndex + 1].value);
    }

    function prevStep() {
        const currentIndex = menus.findIndex(menu => menu.value === step)
        if (currentIndex > 0) setStep(menus[currentIndex - 1].value);
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1 className='font-bold'>Formulir Metadata Statistik Kegiatan</h1>
                <Tabs value={step} onValueChange={setStep} className='flex flex-col gap-8'>
                    <TabsList>
                        {menus.map((menu, index) => (
                            <TabsTrigger value={menu.value} key={index}>{menu.label}</TabsTrigger>
                        ))}
                    </TabsList>
                    {menus.map((menu, index) => (
                        <TabsContent value={menu.value} key={index}>
                            {menu.form}
                        </TabsContent>
                    ))}
                    <div className="flex justify-between">
                        <Button variant={'outline'} onClick={prevStep}><ChevronLeft /> Kembali</Button>
                        <Button onClick={nextStep}>Lanjut <ChevronRight /></Button>
                    </div>
                </Tabs>
            </div>
        </AppLayout>
    );
}

function FormWrapper({ children, className='' } : { children: ReactNode, className?: string }) {
    return (
        <div className={`flex flex-col gap-6 ${className}`}>
            {children}
        </div>
    )
}

function InputWrapper({ children, className='' } : { children: ReactNode, className?: string }) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {children}
        </div>
    )
}

function SectionWrapper({ children, className='' } : { children: ReactNode, className?: string }) {
    return (
        <div className={`flex flex-row gap-4 items-center ${className}`}>
            {children}
        </div>
    )
}

function H2({ text, className='' } : { text: string, className?: string }) {
    return (
        <h2 className={`text-lg font-semibold ${className}`}>{text}</h2>
    )
}

function H3({ text, className='' } : { text: ReactNode, className?: string }) {
    return (
        <h3 className={`text-sm font-semibold ${className}`}>{text}</h3>
    )
}


type SelectOptionProps = {
    data: {
        id: string,
        placeholder: string,
        items: Array<{
            label: string,
            value: string
        }>
    }
}
function SelectOption({ data } : SelectOptionProps) {
    return (
        <Select>
            <SelectTrigger id={data.id} className='gap-2'>
                <SelectValue placeholder={data.placeholder}/>
            </SelectTrigger>
            <SelectContent>
                {data.items.map((item, i) => (
                    <SelectItem value={item.value} key={i}>{item.label}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

type RadioOptionProps = {
    data: {
        id: string,
        defaultValue?: string,
        items: Array<{
            label: string,
            value: string
        }>
    },
    className?: string
}
function RadioOption({ data, className='' } : RadioOptionProps ) {
    return (
        <RadioGroup {...(data.defaultValue && { defaultValue: data.defaultValue })} className={`flex gap-12 ${className}`} id={data.id}>
            {data.items.map((item, i) => (
                <div className='flex' key={i}>
                    <RadioGroupItem value={item.value} id={`${data.id}_${item.value}`} />
                    <Label htmlFor={`${data.id}_${item.value}`} className='px-2 font-normal'>{item.label}</Label>
                </div>
            ))}
        </RadioGroup>
    )
}

type CheckboxOptionProps = {
    data: {
        id: string,
        items: Array<{
            label: string,
            value: string
        }>
    },
    className?: string,
}
function CheckboxOption({ data, className } : CheckboxOptionProps ) {
    return (
        <ul className={`flex flex-col gap-2 ${className}`}>
            {data.items.map((item, i) => (
                <li className='flex' key={i}>
                    <Checkbox id={`${data.id}_${item.value}`} />
                    <Label htmlFor={`${data.id}_${item.value}`} className='px-2 font-normal'>{item.label}</Label>
                </li>
            ))}
        </ul>
    )
}

type InputSideProps = {
    type: string,
    placeholder: string,
    id: string,
    className?: string
}
function InputSide({ type, placeholder, id, className='' } : InputSideProps) {
    return (
        <input type={type} id={id} placeholder={placeholder} className={`focus:outline-none placeholder:text-muted-foreground text-sm pb-[1px] border-b-[1px] ${className}`} />
    )
}

function FirstPage() {
    const caraPengumpulanData = {
        id: 'cara-pengumpulan',
        label: 'Cara Pengumpulan Data',
        placeholder: 'Pilih cara pengumpulan data',
        items: [
            { label : 'Pencacahan Lengkap', value: '1' },
            { label : 'Survei', value: '2' },
            { label : 'Kompilasi Produk Administrasi', value: '3' },
            { label : 'Cara lain sesuai dengan perkembangan TI', value: '4' },
        ]
    };

    const sektorKegiatan = {
        id: 'sektor-kegiatan',
        label: 'Sektor Kegiatan',
        placeholder: 'Pilih sektor kegiatan',
        items: [
            { label: 'Pertanian dan Perikanan', value: '1' },
            { label: 'Demografi dan Kependudukan', value: '2' },
            { label: 'Pembangunan', value: '3' },
            { label: 'Proyeksi Ekonomi', value: '4' },
            { label: 'Pendidikan dan Pelatihan', value: '5' },
            { label: 'Lingkungan', value: '6' },
            { label: 'Keuangan', value: '7' },
            { label: 'Globalisasi', value: '8' },
            { label: 'Kesehatan', value: '9' },
            { label: 'Industri dan Jasa', value: '10' },
            { label: 'Teknologi Informasi dan Komunikasi', value: '11' },
            { label: 'Perdagangan Internasional dan Neraca Perdagangan', value: '12' },
            { label: 'Ketenagakerjaan', value: '13' },
            { label: 'Neraca Nasional', value: '14' },
            { label: 'Indikator Ekonomi Bulanan', value: '15' },
            { label: 'Produktivitas', value: '16' },
            { label: 'Harga dan Paritas Daya Beli', value: '17' },
            { label: 'Sektor Publik, Perpajakan, dan Regulasi Pasar', value: '18' },
            { label: 'Perwilayahan dan Perkotaan', value: '19' },
            { label: 'Ilmu Pengetahuan dan Hak Paten', value: '20' },
            { label: 'Perlindungan Sosial dan Kesejahteraan', value: '21' },
            { label: 'Transportasi', value: '22' },
        ]
    };

    const jenisKegiatanStatistik = {
        id: 'jenis-kegiatan',
        label: 'Jenis Kegiatan Statistik',
        placeholder: 'Pilih jenis kegiatan statistik',
        items: [
            { label: 'Statistik Dasar', value: '1' },
            { label: 'Statistik Sektoral', value: '2' },
            { label: 'Statistik Khusus', value: '3' },
        ]
    };

    const rekomendasiKegiatan = {
        id: 'rekomendasi',
        defaultValue: 'no',
        items: [
            { label: 'Ya', value: 'yes' },
            { label: 'Tidak', value: 'no' },
        ]
    }

    return (
        <FormWrapper>
            <SectionWrapper>
                {/* Judul kegiatan */}
                <InputWrapper className="w-full">
                    <Label htmlFor='judul-kegiatan'>Judul kegiatan</Label>
                    <Input type={'text'} placeholder='Judul kegiatan'/>
                </InputWrapper>

                {/* Tahun */}
                <InputWrapper>
                    <Label htmlFor='judul-kegiatan'>Tahun</Label>
                    <Input type={'number'} placeholder='Tahun'/>
                </InputWrapper>
            </SectionWrapper>
            
            <SectionWrapper className='grid grid-cols-3'>
                {/* Cara Pengumpulan Data */}
                <InputWrapper>
                    <Label htmlFor={caraPengumpulanData.id}>{caraPengumpulanData.label}</Label>
                    <SelectOption data={caraPengumpulanData} />
                </InputWrapper>

                {/* Sektor Kegiatan */}
                <InputWrapper>
                    <Label htmlFor={sektorKegiatan.id}>{sektorKegiatan.label}</Label>
                    <SelectOption data={sektorKegiatan} />
                </InputWrapper>

                {/* Jenis Kegiatan Statistik */}
                <InputWrapper>
                    <Label htmlFor={jenisKegiatanStatistik.id}>{jenisKegiatanStatistik.label}</Label>
                    <SelectOption data={jenisKegiatanStatistik} />
                </InputWrapper>
            </SectionWrapper>

            {/* Rekomendasi kegiatan */}
            <InputWrapper>
                <Label htmlFor='rekomendasi'>Jika kegiatan statistik sektoral, apakah mendapatkan rekomendasi kegiatan statistik dari BPS?</Label>
                <RadioOption data={rekomendasiKegiatan} />
            </InputWrapper>
            <SectionWrapper>
                <Label htmlFor='identitas'>Jika “Ya”, Identitas Rekomendasi</Label>
                <InputSide type='text' id='identitas' placeholder='Nama' />
            </SectionWrapper>
        </FormWrapper>
    )
}

function Section1() {
    return (
        <FormWrapper>
            <H2 text='I. PENYELENGGARA' />

            {/* Instansi penyelenggara: */}
            <InputWrapper>
                <Label htmlFor='instansi' asChild>
                    <H3 text='1.1. Instansi Penyelenggara' />
                </Label>
                <Input type='text' placeholder='Nama instansi' id='instansi' />
            </InputWrapper>

            {/* Alamat Lengkap Instansi Penyelenggara */}
            <InputWrapper>
                <Label htmlFor='alamat_penyelenggara' asChild>
                    <H3 text='1.2. Alamat Lengkap Instansi Penyelenggara:' />
                </Label>
                <Input type='text' placeholder='Alamat instansi' id='alamat_penyelenggara' />
            </InputWrapper>
            <SectionWrapper className='grid grid-cols-3'>
                <InputWrapper>
                    <Label htmlFor='telepon_penyelenggara'>Telepon</Label>
                    <Input type='text' placeholder='Nomor telepon' id='telepon_penyelenggara' />
                </InputWrapper>

                <InputWrapper>
                    <Label htmlFor='faksmile_penyelenggara'>Faksmile</Label>
                    <Input type='text' placeholder='Nomor fax' id='faksmile_penyelenggara' />
                </InputWrapper>

                <InputWrapper>
                    <Label htmlFor='email_penyelenggara'>Email</Label>
                    <Input type='text' placeholder='Alamat email' id='email_penyelenggara' />
                </InputWrapper>
            </SectionWrapper>
        </FormWrapper>
    )
}

function Section2() {
    return (
        <FormWrapper>
            <H2 text='II. PENANGGUNG JAWAB' />

            {/* Unit Eselon Penanggung Jawab */}
            <H3 text='2.1. Unit Eselon Penanggung Jawab' />

            <SectionWrapper>
                <InputWrapper className='w-full'>
                    <Label htmlFor='eselon1'>Eselon 1</Label>
                    <Input type='text' placeholder='Nama unit eselon 1' id='eselon1' />
                </InputWrapper>
                <InputWrapper className='w-full'>
                    <Label htmlFor='eselon2'>Eselon 2</Label>
                    <Input type='text' placeholder='Nama unit eselon 2' id='eselon2' />
                </InputWrapper>
            </SectionWrapper>

            {/* Penanggung Jawab Teknis (setingkat Eselon 3) */}
            <H3 text='2.2. Penanggung Jawab Teknis (setingkat Eselon 3)' />

            <InputWrapper>
                <Label htmlFor='nama_eselon3'>Nama</Label>
                <Input type='text' placeholder='Nama' id='nama_eselon3' />
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor='jabatan_eselon3'>Jabatan</Label>
                <Input type='text' placeholder='Jabatan' id='jabatan_eselon3' />
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor='alamat_eselon3'>Alamat</Label>
                <Input type='text' placeholder='Alamat' id='alamat_eselon3' />
            </InputWrapper>

            <SectionWrapper className='grid grid-cols-3'>
                <InputWrapper>
                    <Label htmlFor='telepon_penanggungjawab'>Telepon</Label>
                    <Input type='text' placeholder='Nomor telepon' id='telepon_penanggungjawab' />
                </InputWrapper>

                <InputWrapper>
                    <Label htmlFor='faksmile_penanggungjawab'>Faksmile</Label>
                    <Input type='text' placeholder='Nomor fax' id='faksmile_penanggungjawab' />
                </InputWrapper>

                <InputWrapper>
                    <Label htmlFor='email_penanggungjawab'>Email</Label>
                    <Input type='text' placeholder='Alamat email' id='email_penanggungjawab' />
                </InputWrapper>
            </SectionWrapper>
        </FormWrapper>
    )
}

function Section3() {
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
        <FormWrapper>
            <H2 text='III. PERENCANAAN DAN PERSIAPAN' />

            {/* Latar Belakang Kegiatan */}
            <InputWrapper>
                <Label htmlFor='latar_belakang_kegiatan'>
                    <H3 text='3.1. Latar Belakang Kegiatan' />
                </Label>
                <Textarea placeholder='Latar belakang kegiatan' id='latar_belakang_kegiatan'/>
            </InputWrapper>

            {/* Tujuan Kegiatan */}
            <InputWrapper>
                <Label htmlFor='tujuan_kegiatan'>
                    <H3 text='3.2. Tujuan Kegiatan' />
                </Label>
                <Textarea placeholder='Tujuan kegiatan' id='tujuan_kegiatan'/>
            </InputWrapper>

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
                        <TableCell><DatePicker /></TableCell>
                        <TableCell><DatePicker /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>Desain</TableCell>
                        <TableCell><DatePicker /></TableCell>
                        <TableCell><DatePicker /></TableCell>
                    </TableRow>

                    {/* B. Pengumpulan */}
                    <TableRow>
                        <TableCell colSpan={4} className="font-medium">Pengumpulan</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>Pengumpulan Data</TableCell>
                        <TableCell><DatePicker /></TableCell>
                        <TableCell><DatePicker /></TableCell>
                    </TableRow>

                    {/* C. Pemeriksaan */}
                    <TableRow>
                        <TableCell colSpan={4} className="font-medium">Pemeriksaan</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>4</TableCell>
                        <TableCell>Pengolahan Data</TableCell>
                        <TableCell><DatePicker /></TableCell>
                        <TableCell><DatePicker /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>5</TableCell>
                        <TableCell>Analisis</TableCell>
                        <TableCell><DatePicker /></TableCell>
                        <TableCell><DatePicker /></TableCell>
                    </TableRow>

                    {/* D. Penyebarluasan */}
                    <TableRow>
                        <TableCell colSpan={4} className="font-medium">Penyebarluasan</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>6</TableCell>
                        <TableCell>Diseminasi Hasil</TableCell>
                        <TableCell><DatePicker /></TableCell>
                        <TableCell><DatePicker /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>7</TableCell>
                        <TableCell>Evaluasi</TableCell>
                        <TableCell><DatePicker /></TableCell>
                        <TableCell><DatePicker /></TableCell>
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

        </FormWrapper>
    )
}

function Section4() {
    const kegiatanDilakukan = {
        id: 'r-4-1',
        label: '4.1. Kegiatan ini dilakukan',
        items: [
            { label: 'Hanya sekali', value: '1', next: 'r-4-3' }, // langsung ke R.4.3
            { label: 'Berulang', value: '2', next: 'r-4-2' },
        ],
    };

    const frekuensiPenyelenggaraan = {
        id: 'r-4-2',
        label: '4.2. Jika “berulang”, frekuensi Penyelenggaraan',
        placeholder: 'Pilih frekuensi',
        items: [
            { label: 'Harian', value: '1' },
            { label: 'Mingguan', value: '2' },
            { label: 'Bulanan', value: '3' },
            { label: 'Triwulanan', value: '4' },
            { label: 'Empat Bulanan', value: '5' },
            { label: 'Semesteran', value: '6' },
            { label: 'Tahunan', value: '7' },
            { label: '> Dua Tahunan', value: '8' },
        ],
    };

    const tipePengumpulanData = {
        id: 'r-4-3',
        label: '4.3. Tipe Pengumpulan Data',
        placeholder: 'Pilih tipe pengumpulan data',
        items: [
            { label: 'Longitudinal Panel', value: '1' },
            { label: 'Cross Sectional', value: '2' },
            { label: 'Longitudinal Cross Sectional', value: '3' },
        ],
    };

    const cakupanWilayah = {
        id: 'r-4-4',
        label: '4.4. Cakupan Wilayah Pengumpulan Data',
        items: [
            { label: 'Seluruh Wilayah Indonesia', value: '1', next: 'r-4-6' }, // langsung ke R.4.6
            { label: 'Sebagian Wilayah Indonesia', value: '2' },
        ],
    };

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
        <FormWrapper>
            <H2 text='IV. DESAIN KEGIATAN'/>
            
            {/* Kegiatan ini dilakukan */}
            <InputWrapper>
                <Label htmlFor={kegiatanDilakukan.id}>
                    <H3 text={kegiatanDilakukan.label} />
                </Label>
                <RadioOption data={kegiatanDilakukan} />
            </InputWrapper>

            {/* Jika “berulang”, frekuensi penyelenggaraan */}
            <InputWrapper>
                <Label htmlFor={frekuensiPenyelenggaraan.id}>
                    <H3 text={frekuensiPenyelenggaraan.label} />
                </Label>
                <SelectOption data={frekuensiPenyelenggaraan} />
            </InputWrapper>

            {/* Tipe Pengumpulan Data */}
            <InputWrapper>
                <Label htmlFor={tipePengumpulanData.id}>
                    <H3 text={tipePengumpulanData.label} />
                </Label>
                <SelectOption data={tipePengumpulanData} />
            </InputWrapper>
            
            {/* Cakupan Wilayah Pengumpulan Data */}
            <InputWrapper>
                <Label htmlFor={cakupanWilayah.id}>
                    <H3 text={cakupanWilayah.label} />
                </Label>
                <RadioOption data={cakupanWilayah} />
            </InputWrapper>

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
            <InputWrapper>
                <Label htmlFor={metodePengumpulanData.id}>
                    <H3 text={metodePengumpulanData.label} />
                </Label>
                <CheckboxOption data={metodePengumpulanData} />
            </InputWrapper>

            {/* Sarana Pengumpulan Data */}
            <InputWrapper>
                <Label htmlFor={saranaPengumpulanData.id}>
                    <H3 text={saranaPengumpulanData.label} />
                </Label>
                <CheckboxOption data={saranaPengumpulanData} />
            </InputWrapper>

            {/* Unit Pengumpulan Data */}
            <InputWrapper>
                <Label htmlFor={unitPengumpulanData.id}>
                    <H3 text={unitPengumpulanData.label} />
                </Label>
                <CheckboxOption data={unitPengumpulanData} />
            </InputWrapper>
        </FormWrapper> 
    )
}

function Section5() {
    const jenisRancangan = {
        id: 'jenis_rancangan',
        label: '5.1. Jenis Rancangan Sampel',
        items: [
            { label: 'Single Stage/Phase', value: '1' },
            { label: 'Multi Stage/Phase', value: '2' }
        ]
    }
    
    const metodePemilihan = {
        id: 'metode_pemilihan',
        label: '5.2. Metode Pemilihan Sampel Tahap Terakhir',
        items: [
            { label: 'Sampel Probabilitas', value: '1' },
            { label: 'Sampel Nonprobabilitas', value: '2' }
        ]
    }

    const metodeProbabilitas = {
        id: 'metode_probabilitas',
        placeholder: 'Pilih metode yang digunakan',
        label: '5.3.a Jika “sampel probabilitas”, metode yang digunakan',
        items: [
            { label: 'Simple Random Sampling', value: '1' },
            { label: 'Systematic Random Sampling', value: '2' },
            { label: 'Stratified Random Sampling', value: '3' },
            { label: 'Cluster Sampling', value: '4' },
            { label: 'Probability Proportional to Size Sampling', value: '5' },
        ],
    };

    const metodeNonProbabilitas = {
        id: 'metode_nonprobabilitas',
        placeholder: 'Pilih metode yang digunakan',
        label: '5.3.b Jika “sampel nonprobabilitas”, metode yang digunakan',
        items: [
            { label: 'Quota Sampling', value: '6' },
            { label: 'Accidental Sampling', value: '7' },
            { label: 'Purposive Sampling', value: '8' },
            { label: 'Snowball Sampling', value: '9' },
            { label: 'Saturation Sampling', value: '10' },
        ],
    };

    const kerangkaSampel = {
        id: 'kerangka_sampel',
        label: '5.4. Kerangka Sampel Tahap Terakhir',
        items: [
            { label: 'List Frame', value: '1' },
            { label: 'Area Frame', value: '2' },
        ]
    }

    return (
        <FormWrapper>
            <H2 text='V. DESAIN SAMPEL' />

            <InputWrapper>
                <Label htmlFor={jenisRancangan.id}>
                    <H3 text={jenisRancangan.label} />
                </Label>
                <RadioOption data={jenisRancangan} />
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor={metodePemilihan.id}>
                    <H3 text={metodePemilihan.label} />
                </Label>
                <RadioOption data={metodePemilihan} />
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor={metodeProbabilitas.id}>
                    <H3 text={metodeProbabilitas.label} />
                </Label>
                <SelectOption data={metodeProbabilitas} />
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor={metodeNonProbabilitas.id}>
                    <H3 text={metodeNonProbabilitas.label} />
                </Label>
                <SelectOption data={metodeNonProbabilitas} />
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor={kerangkaSampel.id}>
                    <H3 text={kerangkaSampel.label} />
                </Label>
                <RadioOption data={kerangkaSampel} />
            </InputWrapper>
            
            <InputWrapper>
                <Label htmlFor={'fraksi_sampel'}>
                    <H3 text={'5.5.	Fraksi Sampel Keseluruhan'} />
                </Label>
                <Input type='number' id='fraksi_sampel' placeholder='...' />
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor={'nilai_perkiraan'}>
                    <H3 text={'5.6.	Nilai Perkiraan Sampling Error Variabel Utama'} />
                </Label>
                <Input type='number' id='nilai_perkiraan' placeholder='...' />
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor={'unit_sampel'}>
                    <H3 text={'5.7. Unit Sampel'} />
                </Label>
                <Input type='text' id='unit_sampel' placeholder='...' />
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor={'unit_observasi'}>
                    <H3 text={'5.7. Unit Observasi'} />
                </Label>
                <Input type='text' id='unit_observasi' placeholder='...' />
            </InputWrapper>
        </FormWrapper>
    )
}

function Section6() {
    const pilotSurvey = {
        id: 'pilot_survey',
        label: '6.1. Apakah Melakukan Uji Coba (Pilot Survey)?',
        items: [
            { label : 'Ya', value: 'yes' },
            { label : 'Tidak', value: 'no' },
        ]
    }

    const metodePemeriksaanKualitas = {
        id: 'metode_pemeriksaan_kualitas',
        label: '6.2. Metode Pemeriksaan Kualitas Pengumpulan Data:',
        items: [
            { label : 'Kunjungan kembali (revisit)', value: '1' },
            { label : 'Supervisi', value: '2' },
            { label : 'Task Force', value: '4' },
            { label : 'Lainnya', value: '8' },
        ]
    }

    const penyesuaianNonrespon = {
        id: 'penyesuaian_nonrespon',
        label: '6.3. Apakah Melakukan Penyesuaian Nonrespon?',
        items: [
            { label : 'Ya', value: 'yes' },
            { label : 'Tidak', value: 'no' },
        ]
    }

    const petugasPengumpulan = {
        id: 'penyesuaian_nonrespon',
        label: '6.4. Petugas Pengumpulan Data',
        items: [
            { label : 'Staf instansi penyelenggara', value: '1' },
            { label : 'Mitra/tenaga kontrak', value: '2' },
            { label : 'Staf instansi penyelenggara dan mitra/tenaga kontrak', value: '3' },
        ]
    }

    const persyaratanTerendah = {
        id: 'persyaratan_terendah',
        label: '6.5. Persyaratan Pendidikan Terendah Petugas Pengumpulan Data',
        items: [
            { label : '≤ SMP', value: '1' },
            { label : 'SMA/SMK', value: '2' },
            { label : 'Diploma I/II/III', value: '3' },
            { label : 'Diploma IV/S1/S2/S3', value: '4' },
        ]
    }

    const pelatihanPetugas = {
        id: 'pelatihan_petugas',
        label: '6.7. Apakah Melakukan Pelatihan Petugas?',
        items: [
            { label : 'Ya', value: '1' },
            { label : 'Tidak', value: '2' },
        ]
    }

    return (
        <FormWrapper>
            <H2 text='VI. PENGUMPULAN DATA' />
            
            {/* Pilot Survey */}
            <InputWrapper>
                <Label htmlFor={pilotSurvey.id}>
                    <H3 text={pilotSurvey.label} />
                </Label>
                <RadioOption data={pilotSurvey} />
            </InputWrapper>

            {/* Metode Pemeriksaan Kualitas */}
            <InputWrapper>
                <Label htmlFor={metodePemeriksaanKualitas.id}>
                    <H3 text={metodePemeriksaanKualitas.label} />
                </Label>
                <CheckboxOption data={metodePemeriksaanKualitas} />
            </InputWrapper>

            {/* Penyesuaian Nonrespon */}
            <InputWrapper>
                <Label htmlFor={penyesuaianNonrespon.id}>
                    <H3 text={penyesuaianNonrespon.label} />
                </Label>
                <RadioOption data={penyesuaianNonrespon} />
            </InputWrapper>

            {/* Petugas Pengumpulan Data */}
            <InputWrapper>
                <Label htmlFor={petugasPengumpulan.id}>
                    <H3 text={petugasPengumpulan.label} />
                </Label>
                <RadioOption data={petugasPengumpulan} className='flex-col gap-2' />
            </InputWrapper>
            
            {/* Persyaratan Pendidikan Terendah Petugas Pengumpulan Data */}
            <InputWrapper>
                <Label htmlFor={persyaratanTerendah.id}>
                    <H3 text={persyaratanTerendah.label} />
                </Label>
                <RadioOption data={persyaratanTerendah} className='flex-col gap-2' />
            </InputWrapper>

            {/* Jumlah Petugas */}
            <InputWrapper>
                <H3 text='6.6. Jumlah Petugas' />
                <SectionWrapper>
                    <Label htmlFor='supervisor' className='font-normal'>Supervisor/penyelia/pengawas</Label>
                    <InputSide type='number' id='supervisor' placeholder='...' className='w-20 text-center' />
                    <Label htmlFor='supervisor' className='font-normal'>orang</Label>
                </SectionWrapper>
                <SectionWrapper>
                    <Label htmlFor='enumerator' className='font-normal'>Pengumpul data/enumerator</Label>
                    <InputSide type='number' id='enumerator' placeholder='...' className='w-20 text-center' />
                    <Label htmlFor='enumerator' className='font-normal'>orang</Label>
                </SectionWrapper>
            </InputWrapper>

            {/* Pelatihan Petugas */}
            <InputWrapper>
                <Label htmlFor={pelatihanPetugas.id}>
                    <H3 text={pelatihanPetugas.label} />
                </Label>
                <RadioOption data={pelatihanPetugas} />
            </InputWrapper>
        </FormWrapper>
    )
}

function Section7() {
    const tahapanPengolahan = [
        {
            id: 'penyuntingan',
            label: 'Penyuntingan (Editing)',
            items: [
                { value: '1', label: 'Ya' },
                { value: '2', label: 'Tidak' },
            ]
        },
        {
            id: 'penyandian',
            label: 'Penyandian (Coding)',
            items: [
                { value: '1', label: 'Ya' },
                { value: '2', label: 'Tidak' },
            ]
        },
        {
            id: 'data_entry',
            label: 'Data Entry',
            items: [
                { value: '1', label: 'Ya' },
                { value: '2', label: 'Tidak' },
            ]
        },
        {
            id: 'penyahihan',
            label: 'Penyahihan (Validasi)',
            items: [
                { value: '1', label: 'Ya' },
                { value: '2', label: 'Tidak' },
            ]
        },
    ]

    const metodeAnalisis = {
        id: 'metode_analisis',
        label: '7.2 Metode Analisis',
        items: [
            { value: '1', label: 'Deskriptif' },
            { value: '2', label: 'Inferensia' },
            { value: '3', label: 'Deskriptif dan Inferensia' },
        ]
    }

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

    return (
        <FormWrapper>
            <H2 text='VII. PENGOLAHAN DAN ANALISIS' />

            <InputWrapper>
                <H3 text='7.1. Tahapan Pengolahan Data' />
                {tahapanPengolahan.map((tahapan, i) => (
                    <SectionWrapper key={i}>
                        <Label htmlFor={tahapan.id} className='w-50 font-normal'>{tahapan.label}</Label>
                        <RadioOption data={tahapan}/>
                    </SectionWrapper>
                ))}
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor={metodeAnalisis.id}>
                    <H3 text={metodeAnalisis.label} />
                </Label>
                <RadioOption data={metodeAnalisis} />
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor={unitAnalisis.id}>
                    <H3 text={unitAnalisis.label} />
                </Label>
                <CheckboxOption data={unitAnalisis} />
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor={tingkatPenyajian.id}>
                    <H3 text={tingkatPenyajian.label} />
                </Label>
                <CheckboxOption data={tingkatPenyajian} />
            </InputWrapper>
        </FormWrapper>
    )
}

function Section8() {
    const produkKegiatan = [
        {
            id: 'tercetak',
            label: 'Tercetak (hardcopy)',
            items: [
                { value: '1', label: 'Ya' },
                { value: '2', label: 'Tidak' },
            ]
        },
        {
            id: 'digital',
            label: 'Digital (softcopy)',
            items: [
                { value: '1', label: 'Ya' },
                { value: '2', label: 'Tidak' },
            ]
        },
        {
            id: 'data_mikro',
            label: 'Data Mikro',
            items: [
                { value: '1', label: 'Ya' },
                { value: '2', label: 'Tidak' },
            ]
        },
    ]

    return (
        <FormWrapper>
            <H2 text='VIII.	DISEMINASI HASIL' />

            <InputWrapper>
                <H3 text='8.1 Produk Kegiatan yang Tersedia untuk Umum' />
                {produkKegiatan.map((produk, i) => (
                    <SectionWrapper key={i}>
                        <Label htmlFor={produk.id} className='w-50 font-normal'>{produk.label}</Label>
                        <RadioOption data={produk}/>
                    </SectionWrapper>
                ))}
            </InputWrapper>

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
                        <TableCell><DatePicker /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Digital (softcopy)</TableCell>
                        <TableCell><DatePicker /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Data Mikro</TableCell>
                        <TableCell><DatePicker /></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </FormWrapper>
    )
}