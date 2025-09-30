// Components
import { logout } from '@/routes';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import AuthLayout from '@/layouts/auth-layout';

export default function ApprovalPending() {
    return (
        <AuthLayout
            title="Menunggu Persetujuan Admin"
            description="Akun Anda berhasil didaftarkan dan email telah terverifikasi. 
                         Namun, untuk bisa mengakses aplikasi, akun Anda harus disetujui 
                         terlebih dahulu oleh administrator."
        >
            <Head title="Menunggu persetujuan admin" />

            <div className="mb-4 text-center text-sm text-muted-foreground">
                Jika Anda membutuhkan akses segera, silakan hubungi administrator.  
                Setelah akun Anda disetujui, Anda akan dapat masuk ke aplikasi.
            </div>

            <Form method="post" action={logout()} className="space-y-6 text-center">
                {({ processing }) => (
                    <>
                        <Button disabled={processing} variant="secondary">
                            {processing && (
                                <LoaderCircle className="h-4 w-4 animate-spin" />
                            )}
                            Keluar
                        </Button>

                        <TextLink
                            href="/"
                            className="mx-auto block text-sm"
                        >
                            Kembali ke beranda
                        </TextLink>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
