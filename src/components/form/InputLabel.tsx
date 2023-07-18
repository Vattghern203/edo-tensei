import { LabelHTMLAttributes } from "react"

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    labelText: string,
    labelFor?: string,
}

const InputLabel = ( { labelText, labelFor, ...props }:InputLabelProps ) => {

    return (

        <label 
            htmlFor={labelFor}
            {...props}
        >
            { labelText }
        </label>

    )
}

export default InputLabel