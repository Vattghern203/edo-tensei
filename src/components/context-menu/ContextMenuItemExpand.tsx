import React, { FC } from "react";
import { ReactNode, CSSProperties, LiHTMLAttributes } from "react";

interface ContextMenuExpandProps extends LiHTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  expandLabel: string;
  isVisible: boolean;
}

const ContextMenuExpand: FC<ContextMenuExpandProps> = ({
  children,
  expandLabel,
  isVisible,
  ...restProps
}) => {
  const expandMenuStyle: CSSProperties = {
    visibility: isVisible ? "visible" : "hidden",
    pointerEvents: isVisible ? "all" : "none",
  };

  return (
    <li className="expand-item" {...restProps}>
      <div
        role="button"
        aria-expanded={isVisible}
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
