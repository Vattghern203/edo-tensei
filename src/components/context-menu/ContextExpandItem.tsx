import { useContext, CSSProperties } from 'react'

import { contextSettings } from "./menuContext"

interface IContextMenu {
    x: number;
    y: number;
    isVisible: boolean;
}

interface ExpandItemProps {
  labelText: string
}

const ContextExpandItem = ( { labelText }:ExpandItemProps ) => {

    const context:IContextMenu = useContext(contextSettings)

    const ContextItemStyles:CSSProperties = {
        backgroundColor: "red",
        top: context.x,
        left: context.y,
        visibility: context.isVisible ? "visible" : 'hidden'
    } 

  return (
    <article style={ContextItemStyles} aria-hidden={!context.isVisible}>
        {labelText}
    </article>
  )
}

export default ContextExpandItem
