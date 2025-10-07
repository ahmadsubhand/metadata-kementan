import { ReactNode } from "react";

export default function InputLayout({ children, className='' } : { children: ReactNode, className?: string }) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {children}
        </div>
    )
}