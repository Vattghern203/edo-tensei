import { useRef } from "react"

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
    transition: opacity .4s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
        opacity: 70%;
        cursor: pointer;
    }

    
    &.open ~ dd {
        visibility: hidden;
    }

    &.open::after {
        rotate: initial;
    }

    dd {
        visibility: hidden;
        height: 0;
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
    }

    &::after:active {
        rotate: initial;
    }
`

const AccordionQuestion = ( {questionText}:AccordionQuestionProps ) => {

    const handleClick = ( event:MouseEvent ) => {
        const target = event.target as HTMLElement

        if (target instanceof HTMLElement) {

            target.classList.toggle('open')

            console.log("clicked")
        }

        else {
            return
        }
    }

    return (

        <Dt onClick={handleClick}>
            {questionText}
        </Dt>
    )
}

export default AccordionQuestion