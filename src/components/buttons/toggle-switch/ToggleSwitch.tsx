import { InputHTMLAttributes, useState } from "react"

import styled from "styled-components";



const StyledSwitch = styled.input`
  
  width: 8vmin;
  border-radius: 50%;
`

const Switch = () => {

  const [isChecked, setIsChecked] = useState(false)

  const handleToggle = () => {

    setIsChecked((currentState) => !currentState)

    console.log(isChecked)
  }

  return (

    <StyledSwitch 
      onChange={() => handleToggle}
      checked={isChecked}
      type="checkbox"
    />
  )
}

export default Switch