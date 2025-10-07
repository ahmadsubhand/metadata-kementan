import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { approve, admin, destroy } from '@/routes/manage-user';
import { manageUser } from '@/routes';
import { SharedData, type BreadcrumbItem } from '@/types';
import { Head, } from '@inertiajs/react';
import dayjs from 'dayjs';
import { KeyRound, MoreHorizontal, Trash, UserRoundCheck } from 'lucide-react';
import AlertButton from '@/components/alert-button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Pengguna',
        href: manageUser().url,
    },
];

export default function ManageUser({ users } : { users: SharedData['auth']['user'][] }) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Pengguna" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1 className='font-bold'>List Pengguna</h1>
                <Table>
                    <TableCaption>List Pengguna</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>No</TableHead>
                            <TableHead>Nama</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Peran</TableHead>
                            <TableHead>Terverifikasi</TableHead>
                            <TableHead>Disetujui</TableHead>
                            <TableHead>Aksi lainnya</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            users.map((user, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell className='capitalize'>{user.role}</TableCell>
                                    <TableCell>
                                        {user.email_verified_at ? dayjs(user.email_verified_at).format('DD/MM/YYYY') : '-'}
                                    </TableCell>
                                    <TableCell>
                                        {user.approved_at ? dayjs(user.approved_at).format('DD/MM/YYYY') : '-'}
                                    </TableCell>
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
                                                            disabled={!!user.approved_at}
                                                            className='flex justify-between gap-4'
                                                            onSelect={(e) => e.preventDefault()}
                                                        >
                                                            Setujui akun <UserRoundCheck />
                                                        </DropdownMenuItem>    
                                                    } 
                                                    label={'Setujui akun'}
                                                    icon={<UserRoundCheck />}
                                                    alertDescription={
                                                        `Pengguna ${user.name} akan mendapatkan akses ke aplikasi untuk mengisi formulir metadata. Pastikan hanya pengguna resmi yang disetujui. Tindakan ini tidak dapat dibatalkan.`
                                                    }

                                                    link={approve(user.id).url}
                                                    method={'post'}
                                                />

                                                <AlertButton
                                                    alertTrigger={
                                                        <DropdownMenuItem 
                                                            disabled={user.role === 'admin'}
                                                            className='flex justify-between gap-4'
                                                            onSelect={(e) => e.preventDefault()}
                                                        >
                                                            Jadikan Admin <KeyRound />
                                                        </DropdownMenuItem>    
                                                    }
                                                    label="Jadikan Admin"
                                                    icon={<KeyRound />}
                                                    alertDescription={`Pengguna ${user.name} akan diberikan akses penuh aplikasi sebagai administrator sama seperti Anda. Hati-hati dalam memilih pengguna untuk dijadikan administrator. Tindakan ini tidak dapat dibatalkan.`}
                                                    link={admin(user.id).url}
                                                    method="post"
                                                />

                                                <AlertButton
                                                    alertTrigger={
                                                        <DropdownMenuItem 
                                                            className='flex justify-between gap-4'
                                                            onSelect={(e) => e.preventDefault()}
                                                        >
                                                            Hapus pengguna <Trash />
                                                        </DropdownMenuItem>    
                                                    }
                                                    label="Hapus pengguna"
                                                    icon={<Trash />}
                                                    alertDescription={`Akun ${user.name} akan dihapus secara permanen sehingga pengguna akan kehilangan akses terhadap aplikasi. Tindakan ini tidak dapat dibatalkan.`}
                                                    link={destroy(user.id).url}
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