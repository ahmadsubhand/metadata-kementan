import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"

type CheckboxOptionProps = {
    data: {
        id: string,
        items: Array<{
            label: string,
            value: string
        }>
    },
    className?: string,
}
export default function CheckboxOption({ data, className } : CheckboxOptionProps ) {
    return (
        <ul className={`flex flex-col gap-2 ${className}`}>
            {data.items.map((item, i) => (
                <li className='flex' key={i}>
                    <Checkbox id={`${data.id}_${item.value}`} />
                    <Label htmlFor={`${data.id}_${item.value}`} className='px-2 font-normal'>{item.label}</Label>
                </li>
            ))}
        </ul>
    )
}