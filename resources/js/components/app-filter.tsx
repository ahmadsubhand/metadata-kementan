import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import { Filter } from 'lucide-react';
import { router } from '@inertiajs/react';

type AppFilterTypes = {
    url: string;
    status: {
        label: string;
        value: string;
    }[]
}
export default function AppFilter({ url, status } :  AppFilterTypes) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button size={'icon'} variant={'outline'}><Filter /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {
                    status.map((stat, i) => (
                        <DropdownMenuItem key={i}
                            className='flex justify-between gap-4'
                            onClick={() => router.get(url, { status: stat.value })}
                        >
                            {stat.label}
                        </DropdownMenuItem>
                    ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}