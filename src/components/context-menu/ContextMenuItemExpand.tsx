import { ReactNode, CSSProperties, LiHTMLAttributes, useContext } from "react";

import { contextSettings } from "./menuContext"

import styled from "styled-components";

interface ContextMenuExpandProps extends LiHTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  expandLabel: string;
}

const ExpandWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: wheat;
  align-items: center;
  justify-content: space-between;

  & svg {
    fill: inherit;
    align-self: center;
    width: 100%;
    height: 1em;
    padding: 0;
    margin: 0;
  }
`

const ContextMenuExpand = ({ children, expandLabel, ...restProps} : ContextMenuExpandProps) => {

  const menuContext = useContext(contextSettings)

  const expandMenuStyle: CSSProperties = {

    visibility: menuContext.isVisible ? "visible" : "hidden",
    pointerEvents: menuContext.isVisible ? "all" : "none",
    top: menuContext.x,
    left: menuContext.y
  };
  
  return (
    <li className="expand-item" {...restProps}>

      <ExpandWrapper
        role="button"
        aria-expanded={menuContext.isVisible}
        aria-haspopup="true"
        aria-label={expandLabel}
      >

        <span>

          {expandLabel}

        </span>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg>


      </ExpandWrapper>

      <ul style={expandMenuStyle} role="menu">

        {children}

      </ul>

    </li>

  );
  
};

export default ContextMenuExpand;