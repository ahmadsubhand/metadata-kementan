import { Control, FieldValues, Path  } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from './ui/input';
import { ReactNode } from 'react';

interface InputFieldProps<T extends FieldValues> {
    form: {
        control: Control<T>;
    };
    inputName: Path<T>;
    inputLabel: ReactNode;
    inputPlaceholder: string;
    inputType?: "text" | "number";
    className?: string;
}

export default function InputField<T extends FieldValues>({
    form,
    inputName,
    inputLabel,
    inputPlaceholder,
    inputType = "text",
    className = '',
}: InputFieldProps<T>) {
    return (
        <FormField
            control={form.control}
            name={inputName}
            render={({ field }) => (
                <FormItem className={`flex flex-col gap-2 ${className}`}>
                    <FormLabel>{inputLabel}</FormLabel>
                    <FormControl>
                        <Input placeholder={inputPlaceholder} {...field} type={inputType} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}