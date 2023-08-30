import { ButtonHTMLAttributes } from "react"

interface CarouseBtnProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: string
    onClick: () => void
}

const CarouselBtn = ( { icon, onClick }:CarouseBtnProps ) => {

    return (

        <button onClick={ onClick }>
            { icon }
        </button>
    )
}

export default CarouselBtn