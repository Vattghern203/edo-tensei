import { ReactNode } from 'react'

interface HeaderProps {
    children: ReactNode,
    headerLabel?: string, // Optional prop for providing a custom accessible label
}

export default function HeaderRoot({ children, headerLabel }: HeaderProps) {
    return (
        <header aria-label={headerLabel}>
            {children}
        </header>
    )
}
