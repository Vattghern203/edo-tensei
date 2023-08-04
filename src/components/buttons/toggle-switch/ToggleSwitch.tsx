import React from "react";
import { InputHTMLAttributes } from "react";
import "./toggle-switch.css";

interface ToggleSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  onToggle: () => void;
  buttonType: 'squared' | 'rounded';
  activeColor: string;
}

const ToggleSwitch = ({ onToggle, buttonType, activeColor }: ToggleSwitchProps) => {
  const switchRef = React.useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    // Handle keyboard interaction (optional, but recommended)
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (switchRef.current) {
        switchRef.current.click();
      }
    }
  };

  return (
    <>
      <style>
        {`
          .switch__input:checked + .switch__slider {
            background-color: ${activeColor};
          }

          .switch__input:focus + .switch__slider {
            box-shadow: 0 0 1px ${activeColor};
          }
        `}
      </style>

      <label className="switch" htmlFor="switch__input">
        <input
          ref={switchRef}
          className="switch__input"
          type="checkbox"
          onClick={onToggle}
          onKeyDown={handleKeyDown}
          aria-checked="true"
          role="switch"
          // Add an accessible label or aria-labelledby here:
          aria-label="Toggle Switch"
        />
        <span className={`switch__slider ${buttonType}`} />
      </label>
    </>
  );
};

export default ToggleSwitch;
