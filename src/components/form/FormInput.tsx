interface FormInputProps {
    inputType: 'text' | 'email' | 'password' | 'number' | 'option' | 'checkbox' | 'select' | 'textarea';
    placeholder: string;
    required?: boolean;
}

const FormInput = ({ inputType, placeholder, required, }:FormInputProps) => {

    return (
        <input 
            type={ inputType } 
            placeholder={ placeholder }
            required={ required ? true : false }
        />
    )
}

export default FormInput