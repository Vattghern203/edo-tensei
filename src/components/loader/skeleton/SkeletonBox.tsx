import { CSSProperties } from "react"

interface SkeletonBoxProps {

    color: string;
    width: string | number
    height: string | number
}

const SkeletonBox = ( { color, height, width }:SkeletonBoxProps ) => {

    const SkeletonBoxStyles:CSSProperties = {
        height: height,
        width: width,
        backgroundColor: color
    }

    return (

        <div className="skeleton__box" style={SkeletonBoxStyles}>
            
        </div>
    )
}

export default SkeletonBox