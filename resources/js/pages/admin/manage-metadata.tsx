import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { approve, destroy } from '@/routes/manage-metadata';
import { manageUser } from '@/routes';
import { MetadataForm, type BreadcrumbItem } from '@/types';
import { Head, Link, } from '@inertiajs/react';
import { FileCheck2, MoreHorizontal, Trash } from 'lucide-react';
import AlertButton from '@/components/alert-button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Metadata',
        href: manageUser().url,
    },
];

export default function ManageMetadata({ metadata_forms } : { metadata_forms: MetadataForm[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Metadata" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1 className='font-bold'>List Metadata Statistik Pengguna</h1>
                <Table>
                    <TableCaption>List Metadata Statistik Pengguna</TableCaption>
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
                            metadata_forms.map((form, index) => (
                                <TableRow key={form.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell className='max-w-sm overflow-hidden text-ellipsis'>{form.activity_title}</TableCell>
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
                                                <DropdownMenuItem asChild disabled={form.status === 'approved'}>
                                                    <Link className='flex justify-between gap-4' href={approve(form.id).url}
                                                      method='post'
                                                    >
                                                        Setujui metadata <FileCheck2 />
                                                    </Link>
                                                </DropdownMenuItem>
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
            </div>
        </AppLayout>
    );
}