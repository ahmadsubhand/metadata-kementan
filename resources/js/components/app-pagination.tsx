import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';
import { ReactNode } from 'react';
import { Button } from './ui/button';
import { router } from '@inertiajs/react';
import { ApiTokenRequestType, PaginatedResponse } from '@/types';

const handleClick = (url: string | null) => {
    if (url) {
        router.get(url);
    }
};

type AppPaginationTypes = {
    current_page: number;
    last_page: number;
    links: PaginatedResponse<ApiTokenRequestType>["links"]
}
export default function AppPagination({ current_page, last_page, links } : AppPaginationTypes) {
    return (
        <Pagination>
            <PaginationContent>
                {
                    links.map((link, i) => {
                        let pagiationItemContent: ReactNode;

                        if (link.label.includes('Sebelumnya')) {
                            pagiationItemContent = 
                                <Button disabled={!(current_page > 1)} variant={'ghost'}
                                    onClick={() => handleClick(link.url)}
                                >
                                    &laquo; &nbsp; Sebelumnya
                                </Button>
                        } else if (link.label.includes('Berikutnya')) {
                            pagiationItemContent = 
                                <Button disabled={!(current_page < last_page)} variant={'ghost'}
                                    onClick={() => handleClick(link.url)}
                                >
                                    Berikutnya &nbsp; &raquo;
                                </Button>
                        } else {
                            pagiationItemContent =
                                <PaginationLink href={link.url || undefined} isActive={link.active}>{link.label}</PaginationLink>
                        }
                        return (
                            <PaginationItem key={i}>
                                {pagiationItemContent}
                            </PaginationItem>
                        )
                    })
                }
            </PaginationContent>
        </Pagination>
    )
}

type PaginationNavigateTypes = {
    prev_page_link: string | null;
    next_page_link: string | null;
    isDashboard?: boolean;
}
export function SimplePagination({ prev_page_link, next_page_link, isDashboard=false } : PaginationNavigateTypes) {
    return (
        <Pagination className={isDashboard ? 'w-full' : undefined}>
            <PaginationContent className={isDashboard ? 'w-full justify-between' : undefined}>
                <PaginationItem>
                    <Button disabled={!(prev_page_link)} variant={'ghost'}
                        onClick={() => handleClick(prev_page_link)}
                    >
                        &laquo; &nbsp; Sebelumnya
                    </Button>
                </PaginationItem>
                <PaginationItem>
                    <Button disabled={!(next_page_link)} variant={'ghost'}
                        onClick={() => handleClick(next_page_link)}
                    >
                        Berikutnya &nbsp; &raquo;
                    </Button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}