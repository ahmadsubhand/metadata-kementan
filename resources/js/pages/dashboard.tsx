import AppLayout from '@/layouts/app-layout';
import { dashboard, metadata } from '@/routes'
import { MetadataForm, type BreadcrumbItem } from '@/types';
import { MetadataStoreType } from '@/validators/metadata';
import { Head, Link } from '@inertiajs/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { FilePenLine, MoreHorizontal, Trash } from 'lucide-react';
import { destroy } from '@/routes/metadata';
import AlertButton from '@/components/alert-button';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard({ forms } : { forms: MetadataForm[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1 className='font-bold'>List Metadata Kegiatan Tersimpan</h1>
                <p>Anda belum pernah mengisi formulir metadata, klik tombol di bawah untuk mulai mengisi</p>
                {(forms.length > 0) && (
                    <Table>
                        <TableCaption>List Metadata Kegiatan Tersimpan</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>No</TableHead>
                                <TableHead>Judul</TableHead>
                                <TableHead>Tahun</TableHead>
                                <TableHead>Cara pengumpulan data</TableHead>
                                <TableHead>Sektor kegiatan</TableHead>
                                <TableHead>Jenis kegiatan statistik</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Aksi lainnya</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                forms.map((form, index) => (
                                    <TableRow key={form.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{form.activity_title}</TableCell>
                                        <TableCell>{form.activity_year}</TableCell>
                                        <TableCell>{form.data_collection_approach?.label}</TableCell>
                                        <TableCell>{form.activity_sector?.label}</TableCell>
                                        <TableCell>{form.statistical_activity_type?.label}</TableCell>
                                        <TableCell className='capitalize'>{form.status}</TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="sm">
                                                        <MoreHorizontal />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <AlertButton
                                                        alertTrigger={
                                                            <DropdownMenuItem 
                                                                className='flex justify-between gap-4'
                                                                onSelect={(e) => e.preventDefault()}
                                                            >
                                                                Hapus data <Trash />
                                                            </DropdownMenuItem>
                                                        }
                                                        label="Hapus data"
                                                        icon={<Trash />}
                                                        alertDescription={`Metadata kegiatan ${form.activity_title} akan dihapus secara permanen. Tindakan ini tidak dapat dibatalkan.`}
                                                        link={destroy(form.id).url}
                                                        method="delete"
                                                    />
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                )}
                <Link as={'button'} href={metadata.url()} className='self-start'>
                    <Button>Tambah <FilePenLine /></Button>
                </Link>
            </div>
        </AppLayout>
    );
}