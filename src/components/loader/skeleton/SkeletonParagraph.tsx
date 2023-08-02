import { CSSProperties } from "react"

interface SkeletonParagraphProps {
    color: string;
}

const SkeletonParagraph = ( { color }:SkeletonParagraphProps ) => {

    const SkeletonParagraphStyles:CSSProperties = {
        backgroundColor: color
    }

    return (

        <article className="skeleton__wrapper" role="loading">
            <div className="skeleton__paragraph" style={SkeletonParagraphStyles}></div>
            <div className="skeleton__paragraph" style={SkeletonParagraphStyles}></div>
            <div className="skeleton__paragraph" style={SkeletonParagraphStyles}></div>
        </article>
    )
}

export default SkeletonParagraph