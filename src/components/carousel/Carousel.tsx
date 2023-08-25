import { useRef, useState, useEffect, CSSProperties } from "react";

interface ImageData {
  key?: number | string;
  imgSrc: string;
  imgAlt: string;
}

interface CarouselProps {
  imgArray: ImageData[];
  showtime?: number;
}

const Carousel = ({ imgArray, showtime = 2000 }:CarouselProps) => {
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0); // Progress value between 0 and 100
  const imgRef = useRef<HTMLImageElement | null>(null);

  const CarouselStyles:CSSProperties = {
    display: "grid",
    placeItems: "center",
    maxWidth: "100%"
  }

  useEffect(() => {

    const interval = setInterval(() => {

      const nextIndex = (currentImgIndex + 1) % imgArray.length;

      setCurrentImgIndex(nextIndex);
  
      setProgress(0); // Reset progress for the new image

    }, showtime);

    return () => {

      clearInterval(interval);
    };

  }, [currentImgIndex, imgArray.length, showtime]);

  return (
    <section 
      style={CarouselStyles}
      aria-roledescription="image carousel" 
      aria-label="Image Carousel"
      tabIndex={0}
      > 
      <div>
        <img
          key={imgArray[currentImgIndex]?.key}
          src={imgArray[currentImgIndex]?.imgSrc}
          alt={imgArray[currentImgIndex]?.imgAlt}
          ref={imgRef}
          style={{ width: "100%", objectFit: "cover", aspectRatio: 16 / 9 }}
          aria-live="polite"
          role="img"
          aria-labelledby={`carousel-img-${currentImgIndex}`}
        />
        <div
          style={{
            width: `${progress}%`,
            height: ".4vmin",
            background: "blue"
          }}
        ></div>
      </div>
      <p
        id={`carousel-img-${currentImgIndex}`}
        style={{ display: "none" }}
        aria-hidden="true"
      >
        {imgArray[currentImgIndex]?.imgAlt}
      </p>
    </section>
  );
};

export default Carousel;
