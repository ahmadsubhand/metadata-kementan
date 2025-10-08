import { Control, FieldValues, Path } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { ReactNode } from 'react';
import { Checkbox } from '../ui/checkbox';

interface Option {
    label: string;
    value: number;
}

interface CheckboxOptionProps<T extends FieldValues> {
    form: {
        control: Control<T>;
    };
    checkboxName: Path<T>;
    checkboxLabel: ReactNode;
    options: Option[];
    className?: string;
}

export default function CheckboxOption<T extends FieldValues>({
    form,
    checkboxName,
    checkboxLabel,
    options,
    className = '',
}: CheckboxOptionProps<T>) {
    return (
        <FormField
            control={form.control}
            name={checkboxName}
            render={() => (
                <FormItem className={`flex flex-col gap-2 ${className}`}>
                    <FormLabel>{checkboxLabel}</FormLabel>
                    {options.map((option) => (
                        <FormField 
                            key={option.value}
                            control={form.control}
                            name={checkboxName}
                            render={({ field }) => (
                                <FormItem
                                    key={option.value}
                                    className={`flex gap-2`}
                                >
                                    <FormControl>
                                        <Checkbox 
                                            checked={field.value?.includes(option.value)}
                                            onCheckedChange={(checked) => {
                                                if (field.value) {
                                                    return checked
                                                        ? field.onChange([...field.value, option.value])
                                                        : field.onChange(
                                                            field.value?.filter(
                                                                (value: number) => value !== option.value
                                                            )
                                                        )
                                                } else {
                                                    return field.onChange([option.value])
                                                }
                                            }}
                                        />
                                    </FormControl>
                                    <FormLabel className='font-normal'>{option.label}</FormLabel>
                                </FormItem>

                            )}
                        />
                    ))}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
