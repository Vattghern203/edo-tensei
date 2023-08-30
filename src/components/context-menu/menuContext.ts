import { createContext } from 'react'

export type IContextMenu = {
    x: number | null;
    y: number | null;
    isVisible: boolean | null;
    side: string;
}

export const contextSettings = createContext({
    x: 0, 
    y: 0,
    isVisible: false,
    side: "right"
})