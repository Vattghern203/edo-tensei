import { SyntheticEvent, useRef } from "react"

import styled from "styled-components"

interface AccordionQuestionProps {

    questionText: string
}

const Dt = styled.dt`

    background-color: lightgray;
    padding: 1vmin .8vmin;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all .4s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
        opacity: 70%;
        cursor: pointer;
    }

    
    &.open + dd {
        visibility: visible;
        height: 100%;
        margin-top: 2vmin;
    }

    &.open::after {
        rotate: initial;
    }

    & + dd {
        visibility: hidden;
        height: 0%;
        background-color: lightgray;
        padding: 1vmin .8vmin;
        transition: all .4s ease-in;
    }

    &::after {
        content: "";
        background-image: url("public/close.svg");
        background-repeat: no-repeat;
        background-size: cover;
        display: block;
        width: 2rem;
        height: 2rem;
        rotate: 45deg;
        transition: all .4s cubic-bezier(0.19, 1, 0.22, 1);
    }

    &::after:active {
        rotate: initial;
    }
`

const AccordionQuestion = ({ questionText }: AccordionQuestionProps) => {

    const handleClick = (event: MouseEvent | SyntheticEvent) => {
        const target = event.target as HTMLElement

        if (target instanceof HTMLElement) {

            target.classList.toggle('open')

            console.log(event)
        }

        else {
            return
        }
    }

    return (

        <Dt onClick={(e) => handleClick(e)}>
            {questionText}
        </Dt>
    )
}

export default AccordionQuestion