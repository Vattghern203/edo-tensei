import { HTMLAttributes } from "react"

interface HeroProps extends HTMLAttributes<HTMLDivElement> {
    heroImg: string,
    heroSize?: string,
    heroPos?: string,
    ariaLabel?: string, // Optional prop for providing an accessible label
}

export default function Hero({ heroImg, heroSize = 'cover', heroPos = 'center', ariaLabel }: HeroProps) {
    return (
        <div
            style={{
                backgroundImage: `url(${heroImg})`,
                backgroundSize: heroSize,
                backgroundPosition: heroPos,
            }}
            aria-label={ariaLabel}
            role="hero"
        >

        </div>
    );
}