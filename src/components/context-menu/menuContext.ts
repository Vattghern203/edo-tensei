import { createContext } from 'react'

export const contextPosition = createContext({
    x: 0, y:0
})

export const isVisibleContext = createContext(false)