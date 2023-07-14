import { ReactNode } from 'react'

interface FormProps {
    submitAction: string
    children: ReactNode
    preventDefault?: boolean 
}

const Form = ( { submitAction, children }:FormProps ) => {

    return (

        <form action={submitAction}>
            {children}
        </form>

    )
}

export default Form