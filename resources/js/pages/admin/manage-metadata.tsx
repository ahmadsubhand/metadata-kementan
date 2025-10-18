import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { approve, destroy } from '@/routes/manage-metadata';
import { manageUser } from '@/routes';
import { SimplePaginatedResponse, type BreadcrumbItem } from '@/types';
import { Head, Link, } from '@inertiajs/react';
import { Download, FileCheck2, MoreHorizontal, Trash } from 'lucide-react';
import AlertButton from '@/components/alert-button';
import { MetadataStoreType } from '@/validators/metadata';
import { pdf } from '@react-pdf/renderer';
import { MetadataDocument } from '../metadata/preview-page';
import { saveAs } from 'file-saver';
import AppFilter from '@/components/app-filter';
import { SimplePagination } from '@/components/app-pagination';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Metadata',
        href: manageUser().url,
    },
];

type ManageMetadataType = {
    metadata_forms : SimplePaginatedResponse<
        (MetadataStoreType & {
            id: number,
            user: {
                name: string
            },
            status: 'draft' | 'pending' | 'revising' | 'approved' | 'rejected' | 'finalized'
            message: string | null;
        })
    >
}
export default function ManageMetadata({ metadata_forms } : ManageMetadataType) {
    
    const handleDownload = async (form: MetadataStoreType) => {
        const blob = await pdf(<MetadataDocument data={form} />).toBlob();
        saveAs(blob, `Metadata ${form.activity_title} ${form.activity_year}.pdf`);
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Metadata" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1 className='font-bold'>List Metadata Statistik Pengguna</h1>
                <div className="w-full flex justify-between">
                    <AppFilter url={metadata_forms.path} status={[
                        { value: '', label: 'Semua' },
                        { label: 'Draft', value: 'draft' },
                        { label: 'Pending', value: 'pending' },
                        { label: 'Revising', value: 'revising' },
                        { label: 'Approved', value: 'approved' },
                        { label: 'Rejected', value: 'rejected' },
                        { label: 'Finalized', value: 'finalized' },                        
                    ]} />
                    <SimplePagination
                        prev_page_link={metadata_forms.prev_page_url}
                        next_page_link={metadata_forms.next_page_url}
                    />
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>No</TableHead>
                            <TableHead>Nama Pengguna</TableHead>
                            <TableHead>Judul</TableHead>
                            <TableHead>Tahun</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Pesan Admin</TableHead>
                            <TableHead>Aksi lainnya</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            metadata_forms.data.map((form, index) => (
                                <TableRow key={index}>
                                    <TableCell>{metadata_forms.from + index}</TableCell>
                                    <TableCell className='max-w-sm overflow-hidden text-ellipsis'>{form.user.name}</TableCell>
                                    <TableCell className='max-w-sm overflow-hidden text-ellipsis'>{form.activity_title}</TableCell>
                                    <TableCell>{form.activity_year}</TableCell>
                                    <TableCell className='capitalize'>{form.status}</TableCell>
                                    <TableCell className='max-w-sm overflow-hidden text-ellipsis'>{form.message || '-'}</TableCell>
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
                                                <DropdownMenuItem className='flex justify-between gap-4'
                                                    onClick={() => handleDownload(form)}
                                                >
                                                    Unduh pratinjau <Download />
                                                </DropdownMenuItem>
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