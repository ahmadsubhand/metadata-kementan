import { ReactNode } from "react";

export default function FormLayout({ children, className='' } : { children: ReactNode, className?: string }) {
    return (
        <div className={`flex flex-col gap-6 ${className}`}>
            {children}
        </div>
    )
}