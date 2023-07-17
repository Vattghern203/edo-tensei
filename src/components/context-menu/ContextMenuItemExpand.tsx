import { ReactElement, FC, ReactNode, CSSProperties, LiHTMLAttributes } from "react"

interface ContextMenuExpandProps extends LiHTMLAttributes<HTMLLIElement> {
    children?: ReactElement | ReactNode,
    expandLabel: string,
    isVisible: boolean
}

const ContextMenuExpand: FC<ContextMenuExpandProps> = ( { children, expandLabel, isVisible } ) => {

    //const expandMenuRef = useRef<HTMLUListElement>(null)

    const expandMenuStyle: CSSProperties = {
        visibility: isVisible ? 'visible' : 'hidden',
        pointerEvents: isVisible ? 'all' : 'none',
    }

    return (
        <li className="expand-item">
            <div>
                <span>
                    {`${expandLabel} >`}
                </span>
            </div>

            <ul style={expandMenuStyle}>
                {children}
            </ul>
        </li>
    )
}

export default ContextMenuExpand