import { Control, FieldValues, Path } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Option {
    label: string;
    value: number;
}

interface SelectOptionProps<T extends FieldValues> {
    form: {
        control: Control<T>;
    };
    selectName: Path<T>;
    selectLabel: string;
    selectPlaceholder: string;
    options: Option[];
    className?: string;
}

export default function SelectOption<T extends FieldValues>({
    form,
    selectName,
    selectLabel,
    selectPlaceholder,
    options,
    className = '',
}: SelectOptionProps<T>) {
    return (
        <FormField
            control={form.control}
            name={selectName}
            render={({ field }) => (
                <FormItem className={`flex flex-col gap-2 ${className}`}>
                    <FormLabel>{selectLabel}</FormLabel>
                    <FormControl>
                        <Select
                            onValueChange={field.onChange}
                            value={field.value}
                        >
                            <SelectTrigger className='gap-2'>
                                <SelectValue placeholder={selectPlaceholder} />
                            </SelectTrigger>
                            <SelectContent>
                                {options.map((option) => (
                                    <SelectItem
                                        key={option.value}
                                        value={String(option.value)}
                                    >
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
