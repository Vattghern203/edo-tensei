import { ReactNode, CSSProperties, HTMLAttributes } from "react"

import "./skeleton.css"

interface SkeletonRootProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    animation: "shimmer" | "pulse";
    color: string;
    isLoading: boolean;
}

const SkeletonRoot = ( { children, color, isLoading, animation }:SkeletonRootProps ) => {

    const skeletonStyles: CSSProperties = {
        display: isLoading ? "block" : "none",
        backgroundColor: color,
    }

    return (


        <div className={`skeleton ${animation}`} style={skeletonStyles}>
            {children}
        </div>
    )
}

export default SkeletonRoot