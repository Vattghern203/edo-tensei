import { InputHTMLAttributes } from "react"

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputType: 'text' | 'email' | 'password' | 'number' | 'option' | 'checkbox' | 'select';
    placeholder: string;
    name: string,
    required?: boolean;
}

const FormInput = ({ inputType, placeholder, required, name }:FormInputProps) => {

    return (
        <input 
            type={ inputType } 
            placeholder={ placeholder }
            required={ required ? true : false }
            name={name}

            aria-placeholder={placeholder}
            aria-required={required ? true : false}
        />
    )
}

export default FormInput