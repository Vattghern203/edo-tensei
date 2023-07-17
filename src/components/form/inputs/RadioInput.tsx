import { InputHTMLAttributes, FC } from "react"

type CustomInputProps = {

    name: string;
    value: string | number;

} & InputHTMLAttributes<HTMLInputElement>

const RadioInput: FC<CustomInputProps> = ( { name, value, ...restProps }:CustomInputProps ) => {

    return (

        <input 
        
            name={name}
            type="radio"
            value={value}
            {...restProps}
        />

    )
}

export default RadioInput

