import { ReactNode } from "react"

import styled from "styled-components"

interface AccordionRootProps {

    children: ReactNode
}

const Dl = styled.dl`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const AccordionRoot = ( { children }:AccordionRootProps ) => {

    return (

        <dl
            role="group"
        >
            {children}
        </dl>
    )
}

export default AccordionRoot