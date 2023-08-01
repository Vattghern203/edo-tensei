import { CSSProperties } from "react"

import "./skeleton.css"

interface SkeletonImageProps {
    size: number;
    color: string;
}

const SkeletonImage = ( { size, color }:SkeletonImageProps ) => {

    const SkeletonImageStyle: CSSProperties = {
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
    }

    return (
        
        <div className="skeleton__img" style={SkeletonImageStyle}>

        </div>
    )
}

export default SkeletonImage