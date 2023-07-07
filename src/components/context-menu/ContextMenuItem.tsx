interface ContextMenuItemProps {
    hasAction: boolean,
    onClickAction?: () => void,
    labelText: string,

}

export default function ContextMenuItem({hasAction, onClickAction, labelText}:ContextMenuItemProps) {

    return (

        hasAction ? 

        <li className="item cursor-pointer" onClick={onClickAction}>
            <em className="uil uil-twitter-alt"></em>
            <span>{labelText}</span>
        </li>

        :

        <li className="item cursor-pointer">
            <em className="uil uil-twitter-alt"></em>
            <span>{labelText}</span>
        </li>
    )
}