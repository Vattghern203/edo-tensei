import { ReactNode, useState, useEffect, useRef } from 'react';

interface ContextMenuProps {
    children: ReactNode;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ children }) => {
    const contextMenuRef = useRef<HTMLDivElement>(null);
    const shareMenuRef = useRef<HTMLUListElement>(null);

    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        
        const handleContextMenu = (event: MouseEvent) => {
            event.preventDefault();

            const { offsetX, offsetY } = event;
            const { innerWidth, innerHeight } = window;

            const contextMenuWidth = contextMenuRef.current?.offsetWidth || 0;
            const contextMenuHeight = contextMenuRef.current?.offsetHeight || 0;

            const shareMenuWidth = shareMenuRef.current?.offsetWidth || 0;

            const x = offsetX > innerWidth - contextMenuWidth ? innerWidth - contextMenuWidth : offsetX;
            const y = offsetY > innerHeight - contextMenuHeight ? innerHeight - contextMenuHeight : offsetY;

            if (offsetX > innerWidth - contextMenuWidth - shareMenuWidth) {

                shareMenuRef.current?.style.setProperty('left', '-20rem');

            } else {

                shareMenuRef.current?.style.removeProperty('left');
                shareMenuRef.current?.style.setProperty('right', '-20rem');

            }

            setPosition({ x, y });
            setIsVisible(true);
        };

        const handleClick = () => {

            setIsVisible(false);

        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('click', handleClick);

        return () => {

            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('click', handleClick);

        };

    }, []);

    const menuStyles: React.CSSProperties = {
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        visibility: isVisible ? 'visible' : 'hidden',
    };

    return (
        <div ref={contextMenuRef} className="wrapper" style={menuStyles}>
            <div className="content">
                {children}
                <ul ref={shareMenuRef} className="share-menu">
                    <li className="item">
                        <em className="uil uil-twitter-alt"></em>
                        <span>Twitter</span>
                    </li>
                    <li className="item">
                        <em className="uil uil-instagram-alt"></em>
                        <span>Instagram</span>
                    </li>
                    <li className="item">
                        <em className="uil uil-telegram-alt"></em>
                        <span>Telegram</span>
                    </li>
                    <li className="item">
                        <em className="uil uil-dribbble"></em>
                        <span>Dribbble</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ContextMenu;
