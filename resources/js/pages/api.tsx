import AppLayout from '@/layouts/app-layout';
import { api } from '@/routes'
import { ApiTokenRequestType, type BreadcrumbItem } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { LoaderCircle} from 'lucide-react';
import { Path, useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import InputField from '@/components/input/input-field';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiTokenRequestSchema, apiTokenRequestType } from '@/validators/api';
import { useEffect, useState } from 'react';
import { store, update } from '@/routes/api';
import TextareaField from '@/components/input/textarea-field';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Pengajuan Akses API',
        href: api().url,
    },
];

export default function Api({ api_token_request } : { api_token_request: ApiTokenRequestType }) {
    const { errors } = usePage().props;
    
    const form = useForm({
        resolver: zodResolver(apiTokenRequestSchema), mode: 'onChange', defaultValues: {
            ...(api_token_request && {
                application_name: api_token_request.application_name,
                application_description: api_token_request.application_description
            })
        }
    });

    const [isLoading, setIsLoading] = useState(false);
    function onSubmit(data:apiTokenRequestType) {
        setIsLoading(true);
        if (api_token_request) {
            router.put(update(api_token_request.id).url, data, {
                onFinish: () => setIsLoading(false)
            })
        } else {
            router.post(store.url(), data, {
                onFinish: () => setIsLoading(false)
            });
        }
    }

    useEffect(() => {
        if (errors) {
            // Set error on specific field
            (Object.keys(errors) as Path<apiTokenRequestType>[]).forEach((field) => {
                form.setError(field, { message: errors[field] as string })
            })
        }
    }, [errors, form])


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pengajuan Akses API" />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                    <h1 className='font-bold'>Formulir Pengajuan Permintaan Akses API</h1>
                    <InputField 
                        form={form}
                        inputName='application_name'
                        inputLabel='Nama aplikasi'
                        inputPlaceholder='Nama aplikasi'
                    />
                    <TextareaField
                        form={form}
                        inputName='application_description'
                        inputLabel='Deskripsi aplikasi'
                        inputPlaceholder='Deskripsi aplikasi'
                    />
                    <Button type='submit' disabled={isLoading} className='w-fit'>
                        {isLoading && (<LoaderCircle className="animate-spin" />)}
                        Kirim
                    </Button>
                </form>
            </Form>
        </AppLayout>
    );
}