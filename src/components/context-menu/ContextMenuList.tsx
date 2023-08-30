import { ReactNode, HtmlHTMLAttributes, useContext } from "react"

import {contextSettings, IContextMenu} from './menuContext';

interface ContextMenuProps extends HtmlHTMLAttributes<HTMLUListElement> {

    children: ReactNode
}


const ContextMenuList = ( { children }:ContextMenuProps ) => {

    const context:IContextMenu = useContext(contextSettings)

    return (

        <ul 
            className="content"
            role='list'
        >
            {children}
        </ul>
    )
}

export default ContextMenuList