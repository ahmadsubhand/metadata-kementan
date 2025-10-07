import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { InertiaLinkProps, Link } from '@inertiajs/react';
import { ReactNode } from 'react';

type AlertProps = {
    alertTrigger: ReactNode;
    label: string;
    icon?: ReactNode;
    alertDescription: string;
    link: string;
    method?: InertiaLinkProps["method"];
};
export default function AlertButton({ alertTrigger, label, icon, alertDescription, link, method }: AlertProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {alertTrigger}
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
