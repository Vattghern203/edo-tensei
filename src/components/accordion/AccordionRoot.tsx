import { ReactNode } from "react"

import styled from "styled-components"

interface AccordionRootProps {

    children: ReactNode
}

const Dl = styled.dl`
    width: 100%;
    background-color: lightgray;
    padding: 2rem 8rem;
`
const AccordionRoot = ( { children }:AccordionRootProps ) => {

    return (

        <dl>
            {children}
        </dl>
    )
}

export default AccordionRoot