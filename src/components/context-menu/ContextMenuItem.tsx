import { LiHTMLAttributes } from "react"

interface ContextMenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
    hasAction: boolean;
    onClickAction?: () => void;
    labelText: string;
}

export default function ContextMenuItem({
    hasAction,
    onClickAction,
    labelText,
    ...props
}: ContextMenuItemProps) {
    return hasAction ? (
        <li className="item cursor-pointer" onClick={onClickAction} role="listitem" {...props}>
            <span aria-label={labelText}>{labelText}</span>
        </li>
    ) : (
        <li className="item cursor-pointer" role="listitem" {...props}>
            <span aria-label={labelText}>{labelText}</span>
        </li>
    );
}
