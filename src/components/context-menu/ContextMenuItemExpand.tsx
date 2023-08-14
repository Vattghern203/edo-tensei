import { FC, ReactNode, CSSProperties, LiHTMLAttributes, useContext } from "react";

import { contextSettings } from "./menuContext"


interface ContextMenuExpandProps extends LiHTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  expandLabel: string;
  isVisible: boolean;
}

const ContextMenuExpand: FC<ContextMenuExpandProps> = ({
  children,
  expandLabel,
  ...restProps
}) => {

  const menuContext = useContext(contextSettings)

  const expandMenuStyle: CSSProperties = {
    visibility: menuContext.isVisible ? "visible" : "hidden",
    pointerEvents: menuContext.isVisible ? "all" : "none",
    top: menuContext.x,
    left: menuContext.y
  };
  
  return (
    <li className="expand-item" {...restProps}>
      <div
        role="button"
        aria-expanded={menuContext.isVisible}
        aria-haspopup="true"
        aria-label={expandLabel}
      >
        <span>{`${expandLabel} >`}</span>
      </div>

      <ul style={expandMenuStyle} role="menu">
        {children}
      </ul>
    </li>
  );
};

export default ContextMenuExpand;