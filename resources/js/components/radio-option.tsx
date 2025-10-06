import { Control, FieldValues, Path } from 'react-hook-form';
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Option {
    label: string;
    value: number;
}

interface RadioOptionProps<T extends FieldValues> {
    form: {
        control: Control<T>;
    };
    radioName: Path<T>;
    radioLabel: string;
    options: Option[];
    classNameWrapper?: string;
    classNameItem?: string;
}

export default function RadioOption<T extends FieldValues>({
    form,
    radioName,
    radioLabel,
    options,
    classNameWrapper = '',
    classNameItem = ''
}: RadioOptionProps<T>) {
    return (
        <FormField
            control={form.control}
            name={radioName}
            render={({ field }) => (
                <FormItem className={`flex flex-col gap-2 ${classNameWrapper}`}>
                    <FormLabel>{radioLabel}</FormLabel>
                    <FormControl>
                        <RadioGroup
                            onValueChange={(value) => field.onChange(Number(value))}
                            value={field.value ? String(field.value) : ""}
                            className={`flex gap-12 ${classNameItem}`}
                        >
                            {options.map((option) => (
                                <FormItem
                                    key={option.value}
                                    className="flex gap-0"
                                >
                                    <RadioGroupItem
                                        value={String(option.value)}
                                        id={`${radioName}_${option.value}`}
                                    />
                                    <Label htmlFor={`${radioName}_${option.value}`} className='px-2 font-normal'>
                                        {option.label}
                                    </Label>
                                </FormItem>
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
