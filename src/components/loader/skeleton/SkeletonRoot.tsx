import { ReactNode, CSSProperties } from "react"

import styles from "./skeleton.module.css"

interface SkeletonRootProps {
    children: ReactNode;
    animation: "shimmer" | "pulse";
    color: string;
    isLoading: boolean;
}

const SkeletonRoot = ( { children, color, isLoading, animation }:SkeletonRootProps ) => {

    const skeletonStyles: CSSProperties = {
        display: isLoading ? "block" : "none",
        backgroundColor: color,
        animationName: animation,
        animationTimingFunction: "linear",
        animationDuration: "1.75s",
        animationFillMode: "forwards",
        animationIterationCount: "infinite",
    }

    return (

        <div className={styles.skeleton} style={skeletonStyles}>
            {children}
        </div>
    )
}

export default SkeletonRoot