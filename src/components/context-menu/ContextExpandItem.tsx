import { useContext, CSSProperties } from 'react'

import { contextSettings } from "./menuContext"

interface ExpandItemProps {
    position: { x: number, y: number}
    isVisible: boolean
}

const ContextExpandItem = ( {position, isVisible }:ExpandItemProps ) => {

    const contextSetting = useContext(contextSettings)

    const  ContextItemStyles:CSSProperties = {
        backgroundColor: "red",
        top: position.x,
        left: position.y
    } 

  return (
    <article style={ContextItemStyles}>
        <p>{contextSetting.isVisible}</p>
    </article>
  )
}

export default ContextExpandItem
