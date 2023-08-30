import React, { ReactNode, LiHTMLAttributes, useContext, useRef } from "react";
import { contextSettings } from "./menuContext";
import styled from "styled-components";

interface ContextMenuExpandProps extends LiHTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  expandLabel: string;
}

const ExpandItem = styled.li`
  cursor: pointer;
  position: relative;

  & ul {
    display: none;
  }

  &:hover ul,
  ul:hover {
    display: block;
  }
`;

const ExpandWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: wheat;
  align-items: center;
  justify-content: space-between;
  position: relative;

  & svg {
    fill: inherit;
    align-self: center;
    width: fit-content;
    height: 1em;
    padding: 0;
    margin: 0;
  }
`;

const ExpandMenu = styled.ul`
  position: absolute;
  left: 105%;
  top: 0;
`;

const ContextMenuExpand = ({
  children,
  expandLabel,
  ...restProps
}: ContextMenuExpandProps) => {
  const expandMenuRef = useRef<HTMLUListElement>(null);
  const menuContext = useContext(contextSettings);

  const setSide = () => {
    if (menuContext.side === "left") {
      expandMenuRef.current?.style.removeProperty("left");
      expandMenuRef.current?.style.setProperty("right", "102%");
    } else {
      expandMenuRef.current?.style.removeProperty("right");
      expandMenuRef.current?.style.setProperty("left", "105%");
    }
  };

  // Call the setSide function
  setSide();

  return (
    <ExpandItem className="expand-item" {...restProps}>
      <ExpandWrapper
        role="button"
        aria-haspopup="true"
        aria-expanded={menuContext.isVisible}
      >
        <span aria-label={expandLabel}>{expandLabel}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
          <path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z" />
        </svg>
      </ExpandWrapper>
      <ExpandMenu
        ref={expandMenuRef}
        role="menu"
        aria-hidden={!menuContext.isVisible}
      >
        {children}
      </ExpandMenu>
    </ExpandItem>
  );
};

export default ContextMenuExpand;