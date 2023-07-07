import { ReactNode } from "react";

interface NavigationListProps {
  children: ReactNode,
}

export default function NavigationList({children}:NavigationListProps) {
  return (
    <ul className="flex justify-between gap-32 px-32 py-16">
      {children}
    </ul>
  )
}