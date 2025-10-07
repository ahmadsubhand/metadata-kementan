import { ReactNode } from "react";

export default function H2({ text, className='' } : { text: ReactNode, className?: string }) {
    return (
        <h2 className={`text-lg font-semibold ${className}`}>{text}</h2>
    )
}