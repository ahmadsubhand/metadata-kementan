import { ReactNode } from "react";

export default function H3({ text, className='' } : { text: ReactNode, className?: string }) {
    return (
        <h3 className={`text-sm font-semibold ${className}`}>{text}</h3>
    )
}
