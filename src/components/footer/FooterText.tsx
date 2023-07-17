import { HTMLAttributes, ReactNode, ReactElement } from "react"

interface FooterTextProps extends HTMLAttributes<HTMLHeadingElement> {

    text: string | 
}

const FooterText = ( { text }:FooterTextProps ) => {

    return (

        <h5
            aria-description="footer text"
        >
            {text}
        </h5>
    )
}

export default FooterText