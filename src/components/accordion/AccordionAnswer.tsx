interface AccordionAnswerProps {

    answerText: string
}

const AccordionAnswer = ( { answerText }:AccordionAnswerProps ) => {

    return (

        <dd>
            {answerText}
        </dd>
    )
}

export default AccordionAnswer