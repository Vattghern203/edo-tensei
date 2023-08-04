import { InputHTMLAttributes, ChangeEvent, useRef } from "react";

interface InputFileProps extends  InputHTMLAttributes<HTMLInputElement> {
    onFileChange: (file: File | null) => void;
    accept?: string;
    name?: string;
}

const InputFile = ( { accept, name, onFileChange, ...props }:InputFileProps ) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null
        onFileChange(file);
    }

    return (

        <input 
            type="file"
            name={name}
            accept={accept}
            onChange={handleFileChange}
            ref={inputRef}
            {...props}
        />
    )
}

export default InputFile;