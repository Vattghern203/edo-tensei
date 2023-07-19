import { OptionHTMLAttributes } from "react"

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {

    value: number | string;
}

const Option = ( { value, ...props}:OptionProps ) => {

    return (

        <option value={value} {...props}>
            {value}
        </option>
    )
}

export default Option;