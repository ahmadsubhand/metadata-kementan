import AppLayout from '@/layouts/app-layout';
import { api, dashboard, metadata } from '@/routes'
import { ApiTokenRequestType, SimplePaginatedResponse, type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Copy, Download, FilePenLine, KeyRound, MoreHorizontal, Pencil, RefreshCw, Trash, X } from 'lucide-react';
import { destroy as destroyMetadata, edit as editMetadata } from '@/routes/metadata';
import { destroy as destroyApi, edit as editApi, generate } from '@/routes/api';
import AlertButton from '@/components/alert-button';
import { Card } from '@/components/ui/card';
import { MouseEvent, useEffect, useState } from 'react';
import { MetadataStoreType } from '@/validators/metadata';
import { MetadataDocument } from './metadata/preview-page';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import { SimplePagination } from '@/components/app-pagination';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];
type DashboardType = {
    forms : SimplePaginatedResponse<
        (MetadataStoreType & {
            id: number;
            status: 'draft' | 'pending' | 'revising' | 'approved' | 'rejected' | 'finalized';
            message: string | null;
            data_collection_approach?: {
                id: number
                label: string
            } | null;
            activity_sector?: {
                id: number
                label: string
            } | null;
            statistical_activity_type?: {
                id: number
                label: string
            } | null;
        })
    >,
    api_token_requests: SimplePaginatedResponse<ApiTokenRequestType>
}
export default function Dashboard({ forms, api_token_requests } : DashboardType) {
    const { flash } = usePage().props as {
        flash?: {
            token?: string;
        };
    };

    const [tokenVisible, setTokenVisible] = useState(false);

    useEffect(() => {
        setTokenVisible(Boolean(flash?.token));
    }, [flash?.token])

    function copy(e: MouseEvent<HTMLButtonElement>) {
        const textToCopy = e.currentTarget.parentElement?.querySelector('#token')?.textContent ?? '';
        const div = e.currentTarget.parentElement?.querySelector('#copy') as HTMLElement | null;

        navigator.clipboard.writeText(textToCopy);
        if (div) {
            div.classList.add('absolute');
            div.classList.remove('hidden');

            setTimeout(() => {
                div.classList.remove('absolute');
                div.classList.add('hidden');
            }, 2000);
        }
    }

    const handleDownload = async (form: MetadataStoreType) => {
        const blob = await pdf(<MetadataDocument data={form} />).toBlob();
        saveAs(blob, `Metadata ${form.activity_title} ${form.activity_year}.pdf`);
    }
 
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-8 overflow-x-auto rounded-xl p-4">
                {tokenVisible && (
                    <Card className="p-4 bg-primary text-sm text-primary-foreground w-fit flex flex-col gap-4 relative">
                        <p className="font-bold">Token API Baru:</p>
                        <code className="break-all italic flex items-center relative">
                            <p id='token'>{flash?.token}</p>
                            <Button onClick={(e) => copy(e)}><Copy /></Button>
                            <div id='copy' className="hidden w-fit right-0 translate-x-full bg-background text-foreground border-border border-2 rounded-xl rounded-bl-3xl pl-2 pr-1.5 py-1.5 not-italic text-xs">
                                Disalin
                            </div>
                        </code>
                        <p className="text-xs">
                            ⚠️ Token ini hanya ditampilkan sekali. Simpan sebelum menutup halaman.
                        </p>

                        <Button className='absolute top-0 right-0'
                            onClick={() => setTokenVisible(false)}
                        >
                            <X />
                        </Button>
                    </Card>
                )}
                
                <Tabs defaultValue='metadata'>
                    <TabsList className='mb-4'>
                        <TabsTrigger value='metadata'>Metadata Statistik</TabsTrigger>
                        <TabsTrigger value='api'>Token API</TabsTrigger>
                    </TabsList>

                    <TabsContent value='metadata' className="flex flex-col gap-4 overflow-x-auto rounded-xl">
                        {/* List Metadata Statistic */}
                        <h1 className='font-bold'>List Metadata Kegiatan Tersimpan</h1>
                        {(forms.data.length > 0) ? (
                        <>
                            <div className="w-full flex justify-between">
                                <SimplePagination
                                    prev_page_link={forms.prev_page_url}
                                    next_page_link={forms.next_page_url}
                                    isDashboard={true}
                                />
                            </div>
                            <Table>
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
                                        forms.data.map((form, index) => (
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
                                                            <DropdownMenuItem className='flex justify-between gap-4'
                                                                onClick={() => handleDownload(form)}
                                                            >
                                                                Unduh pratinjau <Download />
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem asChild>
                                                                <Link className='flex justify-between gap-4' href={editMetadata(form.id).url}>
                                                                    Edit data <Pencil />
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
                                                                link={destroyMetadata(form.id).url}
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
                        </>
                        ) : (
                            <p>Tidak ada formulir metadata tersimpan, klik tombol di bawah untuk mulai mengisi</p>
                        )
                        }
                        <Link as={'button'} href={metadata.url()} className='self-start'>
                            <Button>Tambah <FilePenLine /></Button>
                        </Link>
                    </TabsContent>

                    <TabsContent value='api' className="flex flex-col gap-4 overflow-x-auto rounded-xl">
                        {/* List API Token */}
                        <h1 className='font-bold'>List Token API</h1>
                        {(api_token_requests.data.length > 0) ? (
                        <>
                            <div className="w-full flex justify-end">
                                <SimplePagination
                                    prev_page_link={api_token_requests.prev_page_url}
                                    next_page_link={api_token_requests.next_page_url}
                                    isDashboard={true}
                                />
                            </div>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>No</TableHead>
                                        <TableHead>Nama Aplikasi</TableHead>
                                        <TableHead>Deskripsi Aplikasi</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Pesan Admin</TableHead>
                                        <TableHead>Aksi lainnya</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        api_token_requests.data.map((api, index) => (
                                            <TableRow key={api.id}>
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell className='max-w-sm overflow-hidden text-ellipsis'>{api.application_name}</TableCell>
                                                <TableCell className='max-w-sm overflow-hidden text-ellipsis'>{api.application_description}</TableCell>
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
                                                            <DropdownMenuItem asChild disabled={api.status !== 'approved'}>
                                                                <Link className='flex justify-between gap-4 w-full' href={generate(api.id).url} method='post'>
                                                                    Buat token baru <RefreshCw />
                                                                </Link>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem asChild>
                                                                <Link className='flex justify-between gap-4 w-full' href={editApi(api.id).url}>
                                                                    Edit data <Pencil />
                                                                </Link>
                                                            </DropdownMenuItem>
                                                            <AlertButton
                                                                alertTrigger={
                                                                    <DropdownMenuItem 
                                                                        className='flex justify-between gap-4 w-full'
                                                                        onSelect={(e) => e.preventDefault()}
                                                                    >
                                                                        Hapus token <Trash />
                                                                    </DropdownMenuItem>
                                                                }
                                                                label="Hapus token"
                                                                icon={<Trash />}
                                                                alertDescription={`Token API ${api.application_name} akan dihapus secara permanen. Tindakan ini tidak dapat dibatalkan. Pastikan tidak ada aplikasi yang sedang menggunakan token ini.`}
                                                                link={destroyApi(api.id).url}
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
                        </>
                        ) : (
                            <p>Tidak ada list akses token API, klik tombol di bawah untuk mengajukan permintaan</p>
                        )
                        }
                        <Link as={'button'} href={api.url()} className='self-start'>
                            <Button>Pengajuan <KeyRound /></Button>
                        </Link>
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}