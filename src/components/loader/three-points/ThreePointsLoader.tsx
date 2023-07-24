import { CSSProperties } from "react"

import './style.css'

interface ThreePointsLoader {
    size?: number;
    color?: string,
    isLoading?: boolean
}

const ThreePointsLoader = ( { color='white', size=50, isLoading }:ThreePointsLoader ) => {

    const mainLoaderStyles: CSSProperties =  {

        display: isLoading ? "inline-flex" : "none",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: `4px`,
        width: `${size}px`,
        height: `${size}px`,
        padding: 0,
        margin: 0,
    }

    const childLoaderStyles: CSSProperties = {

        backgroundColor: color,
        height: '100%',
        width: '20%',
        borderRadius: '100vmin'
    }

    return (

        <article data-3points-loader style={mainLoaderStyles}>
            <span className='side-point' style={childLoaderStyles}></span>
            <span className='center-point' style={childLoaderStyles}></span>
            <span className='side-point' style={childLoaderStyles}></span>
        </article>
    )
}

export default ThreePointsLoader;