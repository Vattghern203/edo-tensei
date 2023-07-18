import { SelectHTMLAttributes, ReactNode } from "react"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    options: ReactNode;
}

const Select = ( { name, options, ...props }:SelectProps ) => {

    return (

        <select name={name} {...props}>
            {options}
        </select>
    )
}

export default Select;