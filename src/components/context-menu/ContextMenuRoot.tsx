import { useState, useEffect, useRef, ReactNode, ReactElement, MenuHTMLAttributes } from 'react';

import { contextSettings } from './menuContext';

interface ContextMenuProps extends MenuHTMLAttributes<HTMLDivElement> {
    children: ReactNode | ReactElement;
    expandMenu?: ReactNode;
}

const ContextMenuRoot: React.FC<ContextMenuProps> = ({ children }) => {

    //const currentPos = useContext(contextPosition);

    const contextMenuRef = useRef<HTMLDivElement>(null);
    const expandMenuRef = useRef<HTMLUListElement>(null);

    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });


    useEffect(() => {

        const handleContextMenu = (event: MouseEvent) => {
            event.preventDefault();

            const { offsetX, offsetY } = event;
            const { innerWidth, innerHeight } = window;

            const contextMenuWidth = contextMenuRef.current?.offsetWidth || 0;
            const contextMenuHeight = contextMenuRef.current?.offsetHeight || 0;

            const expandMenuWidth = expandMenuRef.current?.offsetWidth || 0;

            const x = offsetX > innerWidth - contextMenuWidth ? innerWidth - contextMenuWidth : offsetX;
            const y = offsetY > innerHeight - contextMenuHeight ? innerHeight - contextMenuHeight : offsetY;

            if (offsetX > innerWidth - contextMenuWidth - expandMenuWidth) {

                expandMenuRef.current?.style.setProperty('left', '-20rem');

            } else {

                expandMenuRef.current?.style.removeProperty('left');
                expandMenuRef.current?.style.setProperty('right', '-20rem');

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
        pointerEvents: isVisible ? 'all' : 'none',
        backgroundColor: '#1f1f1f',
        listStyle: 'none'
    };

    return (
        <div ref={contextMenuRef} className="wrapper" style={menuStyles} aria-hidden="true">
            <div className="content" role='list'>

               <contextSettings.Provider value={{x: position.x, y:position.y, isVisible:isVisible}}>
                {children}
               </contextSettings.Provider>

            </div>
        </div>
    );
};

export default ContextMenuRoot;