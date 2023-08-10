import { LiHTMLAttributes, ReactNode } from  "react"

interface FooterItemProps extends LiHTMLAttributes<HTMLLIElement> {
    children: ReactNode
}

const FooterItem = ( {id, children, ...rest}:FooterItemProps ) => {


    return (

        <li key={id} {...rest}>
            {children}
        </li>
    )
}

export default FooterItem