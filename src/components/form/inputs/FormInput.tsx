interface FormInputProps {
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
        />
    )
}

export default FormInput