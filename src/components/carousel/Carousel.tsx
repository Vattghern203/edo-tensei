import { HtmlHTMLAttributes, useRef, useState, useEffect, FC, CSSProperties
 } from "react";

interface ImageData {
    key?: number | string;
    imgSrc: string;
    imgAlt: string;
}

interface CarouselProps extends HtmlHTMLAttributes<HTMLDivElement> {
    imgArray: ImageData[];
    showtime?: number;
}

const Carousel: FC<CarouselProps> = ({ imgArray, showtime = 2000 }) => {

    const CarouselStyles: CSSProperties = {

        aspectRatio: 16 / 9,
        width: "100%",
        objectFit: "cover"
    }

    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {

        const interval = setInterval(() => {

            const nextIndex = (currentImgIndex + 1) % imgArray.length;
            setCurrentImgIndex(nextIndex);

        }, showtime);

        return () => {

            clearInterval(interval);
        };

    }, [currentImgIndex, imgArray.length, showtime]);

    return (
        <section aria-roledescription="image carousel" aria-label="Image Carousel">
            <img
                key={imgArray[currentImgIndex]?.key}
                src={imgArray[currentImgIndex]?.imgSrc}
                alt={imgArray[currentImgIndex]?.imgAlt}
                ref={imgRef}
                style={CarouselStyles}
                aria-live="polite"
                role="img"
                aria-labelledby={`carousel-img-${currentImgIndex}`}
            />
            <p
                id={`carousel-img-${currentImgIndex}`}
                style={{display: "none"}}
                aria-hidden="true"
            >
                {imgArray[currentImgIndex]?.imgAlt}
            </p>
        </section>
    );
};

export default Carousel;
