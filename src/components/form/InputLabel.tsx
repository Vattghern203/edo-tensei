interface InputLabelProps {
    labelText: string,
    labelFor?: string,
}

const InputLabel = ( { labelText, labelFor }:InputLabelProps ) => {

    return (

        <label 
            htmlFor={labelFor}
        >
            { labelText }
        </label>

    )
}

export default InputLabel