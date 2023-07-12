interface ContextMenuItemProps {
    hasAction: boolean,
    onClickAction?: () => void,
    labelText: string,
}

export default function ContextMenuItem({hasAction, onClickAction, labelText}:ContextMenuItemProps) {

    return (

        hasAction ? 

        <li className="item cursor-pointer" onClick={onClickAction}>
            <span>{labelText}</span>
        </li>

        :

        <li className="item cursor-pointer">
            <span>{labelText}</span>
        </li>
    )
}