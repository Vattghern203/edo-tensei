import { InputHTMLAttributes } from "react";

import "./toggle-switch.css"

interface ToggleSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
    onToggle: () => void
    buttonType: 'squared' | 'rounded'
    activeColor: string
}

const ToggleSwitch = ({ onToggle, buttonType, activeColor }: ToggleSwitchProps) => {

    return (

        <>
        
            <style>
                {`
                .switch__input:checked+.switch__slider {
                    background-color: ${activeColor};
                }

                .switch__input:focus+.switch__slider {
                    box-shadow: 0 0 1px ${activeColor};
                }
                `}
            </style>

            <label className="switch">
                <input className="switch__input" type="checkbox" onClick={onToggle} />
                <span className={`switch__slider ${buttonType}`}></span>
            </label>
        
        </>

    )
}

export default ToggleSwitch