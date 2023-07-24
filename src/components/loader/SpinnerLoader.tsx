import { CSSProperties } from "react";

import './loader.css'

interface SpinnerLoaderProps {

    size?: number;
    color?: string;
    isLoading?: boolean;
}



const SpinnerLoader = ( { color = `#444444`, size = 50, isLoading }:SpinnerLoaderProps ) => {

    const spinnerStyles: CSSProperties = {

        display: isLoading ? "flex" : "none",
        width: size,
        height: size,
        borderRadius: '50%',
        border: `${size / 10}px solid ${color}`,
        borderTop: `${size / 10}px solid transparent`,
    }


    return (

        <div data-spinner-loader style={spinnerStyles} role="loading">

        </div>
        

    )
}

export default SpinnerLoader;