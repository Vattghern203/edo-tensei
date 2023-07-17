import { HTMLAttributes, ReactNode } from "react"

interface FooterRootProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const FooterRoot = ( { children }:FooterRootProps ) => {

    return (

        <footer>
            {children}
        </footer>
    )
}

export default FooterRoot