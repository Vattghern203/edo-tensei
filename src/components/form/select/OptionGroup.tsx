import { OptgroupHTMLAttributes, ReactNode } from "react"

interface OptionGroupProps extends OptgroupHTMLAttributes<HTMLOptGroupElement> {

    label: string;
    children: ReactNode;
}

const OptionGroup = ( { label, children, ...props }:OptionGroupProps ) => {

    return (

        <optgroup
            label={label}
            {...props}
        >

            {children}

        </optgroup>
    )
}

export default OptionGroup;