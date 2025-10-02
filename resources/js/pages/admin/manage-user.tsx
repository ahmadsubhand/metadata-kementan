import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { index, approve, admin, destroy } from '@/routes/manage-user';
import { SharedData, type BreadcrumbItem } from '@/types';
import { Head, InertiaLinkProps, Link } from '@inertiajs/react';
import dayjs from 'dayjs';
import { KeyRound, MoreHorizontal, Trash, UserRoundCheck } from 'lucide-react';
import { ReactNode } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manajemen Pengguna',
        href: index().url,
    },
];

export default function ManageUser({ users } : { users: SharedData['auth']['user'][] }) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Pengguna" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1>List Pengguna</h1>
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
                                <TableRow>
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

                                                <Alert 
                                                    isDisable={!!user.approved_at}
                                                    label={'Setujui akun'}
                                                    icon={<UserRoundCheck />}
                                                    alertDescription={
                                                        `Pengguna ${user.name} akan mendapatkan akses ke aplikasi untuk mengisi formulir metadata. Pastikan hanya pengguna resmi yang disetujui. Tindakan ini tidak dapat dibatalkan.`
                                                    }

                                                    link={approve(user.id).url}
                                                    method={'post'}
                                                />

                                                <Alert
                                                    isDisable={user.role === "admin"}
                                                    label="Jadikan Admin"
                                                    icon={<KeyRound />}
                                                    alertDescription={`Pengguna ${user.name} akan diberikan akses penuh aplikasi sebagai administrator sama seperti Anda. Hati-hati dalam memilih pengguna untuk dijadikan administrator. Tindakan ini tidak dapat dibatalkan.`}
                                                    link={admin(user.id).url}
                                                    method="post"
                                                />

                                                <Alert
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
type AlertProps = {
  isDisable?: boolean;
  label: string;
  icon?: ReactNode;
  alertDescription: string;
  link: string;
  method?: InertiaLinkProps["method"];
};


function Alert({ isDisable, label, icon, alertDescription, link, method }: AlertProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <DropdownMenuItem 
                    className='flex justify-between gap-4'
                    disabled={isDisable}
                    onSelect={(e) => e.preventDefault()}
                    >
                        {label} {icon}
                </DropdownMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {alertDescription}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Batal</AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Link href={link} method={method} as={'button'} className='w-fit flex items-center gap-4'>
                            {label} {icon}
                        </Link>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
