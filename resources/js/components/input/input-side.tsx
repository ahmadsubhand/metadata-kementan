import { Control, FieldValues, Path  } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { ReactNode } from 'react';

interface InputSideProps<T extends FieldValues> {
    form: {
        control: Control<T>;
    };
    inputName: Path<T>;
    firstInputLabel: ReactNode;
    secondInputLabel?: ReactNode;
    inputPlaceholder: string;
    inputType?: "text" | "number";
    classNameWrapper?: string;
    classNameInput?: string;
}

export default function InputSide<T extends FieldValues>({
    form,
    inputName,
    firstInputLabel,
    secondInputLabel,
    inputPlaceholder,
    inputType = "text",
    classNameWrapper = '',
    classNameInput = '',
}: InputSideProps<T>) {
    return (
        <FormField
            control={form.control}
            name={inputName}
            render={({ field }) => (
                <div className="flex flex-col gap-2">
                    <FormItem className={`flex flex-row gap-4 items-start ${classNameWrapper}`}>
                        <FormLabel className='font-normal'>{firstInputLabel}</FormLabel>
                        <FormControl>
                            <input type={inputType} {...field} placeholder={inputPlaceholder} className={`focus:outline-none placeholder:text-muted-foreground text-sm pb-[1px] border-b-[1px] ${classNameInput}`} />
                        </FormControl>
                        <FormLabel className='font-normal'>{secondInputLabel}</FormLabel>
                    </FormItem>
                    <FormMessage />
                </div>
            )}
        />
    )
}