import { useState, useEffect, useRef, ReactNode, ReactElement, MenuHTMLAttributes } from 'react';

import { contextSettings, IContextMenu } from './menuContext';

interface ContextMenuProps extends MenuHTMLAttributes<HTMLDivElement> {
    children: ReactNode | ReactElement;
    expandMenu?: ReactNode;
}

const ContextMenuRoot: React.FC<ContextMenuProps> = ({ children }) => {

    const contextMenuRef = useRef<HTMLDivElement>(null);

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [side, setSide] = useState("");


    useEffect(() => {
        const handleContextMenu = (event: MouseEvent) => {
            event.preventDefault();
    
            const { clientX: mouseX, clientY: mouseY } = event;
            const { innerWidth, innerHeight } = window;
    
            const contextMenuWidth = contextMenuRef.current?.offsetWidth || 0;
            const contextMenuHeight = contextMenuRef.current?.offsetHeight || 0;
    
            // Calculate the maximum allowed x-coordinate to prevent overflow
            const maxX = innerWidth - contextMenuWidth;
    
            // Calculate the x-coordinate without overflowing
            const x = Math.min(mouseX, maxX);
    
            // Calculate the maximum allowed y-coordinate to prevent overflow
            const maxY = innerHeight - contextMenuHeight;
    
            // Calculate the y-coordinate without overflowing
            const y = Math.min(mouseY, maxY);
    
            // Adjust x-coordinate to fit the context menu's width within the viewport
            const adjustedX = Math.max(0, x - contextMenuWidth);
    
            const side = x === mouseX ? "right" : "left";
    
            setPosition({ x: adjustedX, y });
            setSide(side);
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
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'all' : 'none',
        backgroundColor: 'white',
        listStyle: 'none',
        border: 'solid 1px red',
        zIndex: 1000,
        transition: 'opacity .4s ease-in'
    };

    return (
        <nav 
            ref={contextMenuRef} 
            className="wrapper" 
            style={menuStyles} 
            aria-hidden={!isVisible} 
            role='menu'
            data-open={isVisible}
        >
            <contextSettings.Provider 
                value={
                    {
                        x: position.x, 
                        y: position.y, 
                        isVisible: isVisible,
                        side: side
                    }
                }
            >

                {children}

            </contextSettings.Provider>
        </nav>
    );
};

export default ContextMenuRoot;