interface AccordionAnswerProps {

    answerText: string
}

const AccordionAnswer = ( { answerText }:AccordionAnswerProps ) => {

    return (

        <dd
            role="region"
            aria-labelledby="accordion-question"
        >
            {answerText}
        </dd>
    )
}

export default AccordionAnswer