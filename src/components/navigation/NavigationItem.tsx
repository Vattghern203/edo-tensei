import { Link } from 'react-router-dom'

interface NavItemProps {
    external?: boolean,
    url: string,
    txt: string
}

export default function NavigationItem({ external, url, txt }:NavItemProps) {
    
    return (

        external

        ?

        <li role='listitem' aria-description='listitem'>
            <Link to={url}>
                {txt}
            </Link>
        </li>

        :

        <li role='listitem' aria-description='listitem'>
            <a href={url}>
                {txt}
            </a>
        </li>
    )
}