import { CSSProperties } from "react"

interface SkeletonParagraphProps {
    color: string;
    numberOfParagraphs: number;
}

const SkeletonParagraph = ( { color, numberOfParagraphs }:SkeletonParagraphProps ) => {

    const SkeletonParagraphStyles:CSSProperties = {
        padding: `${numberOfParagraphs}rem`
    }

    return (

        <article className="skeleton__wrapper" style={SkeletonParagraphStyles}>
            <div className="skeleton__paragraph"></div>
            <div className="skeleton__paragraph"></div>
            <div className="skeleton__paragraph"></div>
        </article>
    )
}

export default SkeletonParagraph