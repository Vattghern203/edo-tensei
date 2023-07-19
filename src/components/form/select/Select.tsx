import { SelectHTMLAttributes, ReactNode} from "react"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    value: string | number;
    children: ReactNode;
}

const Select = ( { name, value, children, ...props }:SelectProps ) => {

    return (

        <select name={name} value={value} {...props} >
            {children}
        </select>
    )
}

export default Select;