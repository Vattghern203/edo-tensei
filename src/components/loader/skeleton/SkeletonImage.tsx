import { CSSProperties } from "react"

interface SkeletonImageProps {
    size: number;
}

const SkeletonImage = ( { size }:SkeletonImageProps ) => {

    const SkeletonImageStyle: CSSProperties = {
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
    }

    return (
        
        <div style={SkeletonImageStyle}>

        </div>
    )
}

export default SkeletonImage