import { TextareaHTMLAttributes } from "react"

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    resize?: 'horizontal' | 'vertical' | 'none',
    cols?: number,
    rows?: number,
    required: boolean,
    disabled?: boolean
}

const TextArea = ({ placeholder, required, cols, resize, rows, disabled }:TextAreaProps) => {
    
    return (

        <textarea
            style={
                {
                    resize: resize,
                    fontFamily: 'inherit',
                }
            }
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            rows={rows}
            cols={cols}
        >

        </textarea>
    )
}

export default TextArea