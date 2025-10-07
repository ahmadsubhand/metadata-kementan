import { ReactNode } from "react";

export default function SectionLayout({ children, className='' } : { children: ReactNode, className?: string }) {
    return (
        <div className={`flex flex-row gap-4 items-start ${className}`}>
            {children}
        </div>
    )
}