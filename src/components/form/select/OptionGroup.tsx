import { OptgroupHTMLAttributes, ReactNode } from "react"

interface OptionGroupProps extends OptgroupHTMLAttributes<HTMLOptGroupElement> {

    label: string;
    option: ReactNode;
}

const OptionGroup = ( { label, option, ...props }:OptionGroupProps ) => {

    return (

        <optgroup
            label={label}
            {...props}
        >

            {option}

        </optgroup>
    )
}

export default OptionGroup;