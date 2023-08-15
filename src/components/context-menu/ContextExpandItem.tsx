import { useContext, CSSProperties } from 'react'

import { contextSettings } from "./menuContext"

interface IContextMenu {
    x: number;
    y: number;
    isVisible: boolean;
}

const ContextExpandItem = () => {

    const context:IContextMenu = useContext(contextSettings)

    const ContextItemStyles:CSSProperties = {
        backgroundColor: "red",
        top: context.x,
        left: context.y,
        visibility: context.isVisible ? "visible" : 'hidden'
    } 

  return (
    <article style={ContextItemStyles} aria-hidden={!context.isVisible}>
        <p>{context.isVisible}</p>
    </article>
  )
}

export default ContextExpandItem
