import { LinkHTMLAttributes } from "react"

import { Link } from "react-router-dom";

import FooterItem from "./FooterItem";

interface FooterExternalProps extends LinkHTMLAttributes<HTMLLinkElement> {
    label: string;
    href: string;
    external: boolean;
}

const FooterLink = ( { label, href, external }:FooterExternalProps ) => {

    return (

        <FooterItem>

            {external 
            
            ? 
            
            <a href={href}>
                {label}
            </a>

            :

            <Link to={href}>
                {label}
            </Link>
        
            }

        </FooterItem>
    )
}

export default FooterLink