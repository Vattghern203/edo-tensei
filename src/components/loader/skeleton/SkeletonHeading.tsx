import { CSSProperties } from "react"

interface SkeletonHeadingProps {
    color: string;
    height: string;
}

const SkeletonHeading = ( { color, height }:SkeletonHeadingProps ) => {

    const SkeletonHeadingStyles:CSSProperties = {
        height: height,
        backgroundColor: color
    }

    return (

        <div 
            className="skeleton__heading" 
            style={SkeletonHeadingStyles}
        >

        </div>
    )
}

export default SkeletonHeading