import { ReactNode } from 'react'

interface HeaderProps {
    children: ReactNode,
}

export default function HeaderRoot({ children }:HeaderProps) {

    return (
        <header className='flex justify-around'>
            {children}
        </header>
    )
}