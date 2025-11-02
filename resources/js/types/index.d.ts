import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    role: "user" | "admin";
    avatar?: string;
    email_verified_at: string | null;
    approved_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;

    [key: string]: unknown; // This allows for additional properties...
}

export interface SectionProps<T> {
    form: UseFormReturn<T>;
}

export type MetadataForm = {
    id: number
    activity_title: string
    activity_year: number
    status: 'draft' | 'pending' | 'revising' | 'approved' | 'rejected' | 'finalized'
    message: string | null;

    data_collection_approach_id: number | null
    activity_sector_id: number | null
    statistical_activity_type_id: number | null

    data_collection_approach?: {
        id: number
        label: string
    } | null

    activity_sector?: {
        id: number
        label: string
    } | null

    statistical_activity_type?: {
        id: number
        label: string
    } | null
}

export type ApiTokenRequestType = {
    id: number;
    personal_access_token_id: number | null;
    user_id: number;
    application_name: string;
    application_description: string;
    status: "pending" | "approved" | "rejected";
    message: string | null;
}

export type PaginatedResponse<T> = {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export type SimplePaginatedResponse<T> = {
    data: T[];
    current_page: number;
    current_page_url: string;
    first_page_url: string;
    from: number;
    to: number;
    next_page_url: string | null;
    prev_page_url: string | null;
    path: string;
    per_page: number;
}