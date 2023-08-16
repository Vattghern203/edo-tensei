import { createContext } from 'react'

export const contextSettings = createContext({
    x: 0, 
    y: 0,
    isVisible: false,
    side: "right"
})