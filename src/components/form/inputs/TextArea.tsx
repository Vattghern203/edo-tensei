interface TextAreaProps {
    resize?: 'horizontal' | 'vertical' | 'none',
    cols?: number,
    rows?: number,
    placeholder: string,
    minLen?: number,
    maxLen?: number,
    required: boolean,
    disabled?: boolean
}

const TextArea = ({ placeholder, required, cols, maxLen, resize, minLen, rows, disabled }:TextAreaProps) => {
    
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
            minLength={minLen}
            maxLength={maxLen}
        >

        </textarea>
    )
}

export default TextArea