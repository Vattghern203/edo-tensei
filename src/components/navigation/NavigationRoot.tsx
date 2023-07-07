import { ReactNode } from "react";

interface NavigationProps {
    children: ReactNode
}

export default function NavigationRoot({ children }:NavigationProps) {

    return (
        <nav>
            {children}
        </nav>
    )
}