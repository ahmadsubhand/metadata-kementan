import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { approve, remove } from '@/routes/manage-api';
import { manageApi } from '@/routes';
import { ApiTokenRequestType, type BreadcrumbItem } from '@/types';
import { Head, } from '@inertiajs/react';
import { KeyIcon, MoreHorizontal, Trash } from 'lucide-react';
import AlertButton from '@/components/alert-button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Akses API',
        href: manageApi().url,
    },
];

export default function ManageApi({ api_token_request } : { api_token_request: ApiTokenRequestType[] }) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Akses API" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1 className='font-bold'>List Akses API</h1>
                <Table>
                    <TableCaption>List Akses API</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>No</TableHead>
                            <TableHead>Nama Pengguna</TableHead>
                            <TableHead>Nama Aplikasi</TableHead>
                            <TableHead>Deskripsi Aplikasi</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Pesan Admin</TableHead>
                            <TableHead>Aksi lainnya</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            api_token_request.map((api, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{'Aku adalah manusia'}</TableCell>
                                    <TableCell>{api.application_name}</TableCell>
                                    <TableCell>{api.application_description}</TableCell>
                                    <TableCell className='capitalize'>{api.status}</TableCell>
                                    <TableCell>{api.message || '-'}</TableCell>
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
                                                            disabled={api.status === 'approved'}
                                                            className='flex justify-between gap-4'
                                                            onSelect={(e) => e.preventDefault()}
                                                        >
                                                            Setujui akses API <KeyIcon />
                                                        </DropdownMenuItem>   
                                                    } 
                                                    label={'Setujui akses API'}
                                                    icon={<KeyIcon />}
                                                    alertDescription={
                                                        `Aplikasi ${api.application_name} akan mendapatkan akses API. Pastikan aplikasi ini memang diizinkan untuk dapat mengakses list Metadata Statistik.`
                                                    }
                                                    link={approve(api.id).url}
                                                    method={'post'}
                                                />

                                                <AlertButton
                                                    alertTrigger={
                                                        <DropdownMenuItem 
                                                            className='flex justify-between gap-4'
                                                            onSelect={(e) => e.preventDefault()}
                                                        >
                                                            Hapus akses API <Trash />
                                                        </DropdownMenuItem>    
                                                    }
                                                    label="Hapus akses API"
                                                    icon={<Trash />}
                                                    alertDescription={`Aplikasi ${api.application_name} akan kehilangan akses untuk mengakses list Metadata Statistik. Tindakan ini tidak dapat dibatalkan.`}
                                                    link={remove(api.id).url}
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