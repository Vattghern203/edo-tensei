import { ReactNode, CSSProperties, HTMLAttributes } from "react"

import "./skeleton.css"

import styled from "styled-components";

interface SkeletonRootProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    animation: "shimmer" | "pulse";
    color: string;
    isLoading: boolean;
}

const SkeletonRoot = ({ children, color, isLoading, animation }: SkeletonRootProps) => {

    const Skeleton = styled.div`
        
        --animation: ${animation};
        --color: ${color};
        --radius: .4vmin;
        display: ${isLoading ? "block" : "none"};
        width: 100%;
        background-color: transparent;
        display: grid;
        place-items: center;
        grid-auto-rows: min-content;
        gap: .4vmin;
        padding: .4vmin;

        & *, & {
            background-color: var(--color);
            animation: ${animation} 1.75s linear infinite;
        }

        & *:not(.skeleton__img) {
            border-radius: var(--radius);
        }

        &.shimmer *:not(.skeleton__wrapper) {
            background-image: linear-gradient(0.25turn, transparent, var(--shimer-clr), transparent);
            background-size: 250%;
            background-repeat: no-repeat;
            background-position: 150% 0;
            filter: blur(0.08vmin);
        }

        & > img {
            border-radius: 50%;
        }

        &__wrapper {
            display: flex;
            flex-direction: column;
            align-items: left;
            justify-content: center;
            width: 100%;
            height: 100%;
            gap: .6vmin;
        }

        &__paragraph {
            height: 2vmin;
        }

        &__paragraph:not(:last-child) {
            width: 100%;
        }

        &__paragraph:last-child {
            width: 75%;
        }

        @keyframes shimmer {
            to {
                background-position: -100% 0;
            }
        }

        @keyframes pulse {
            0% {
                opacity: 1;
            }

            100% {
                opacity: .4;
            }
        }
    `

    const skeletonStyles: CSSProperties = {
        display: isLoading ? "block" : "none",
        backgroundColor: color,
    }

    return (


        <Skeleton
            className={`skeleton ${animation}`}
            style={skeletonStyles}
            role="loading"
            aria-label="loading"
            aria-hidden={!isLoading}
            data-loading={isLoading}
        >
            {children}
        </Skeleton>
    )
}

export default SkeletonRoot