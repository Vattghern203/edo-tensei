import { ReactNode, JSX } from "react"

interface AccordionWrapperProps {

    children: ReactNode | JSX.Element;
    
}

/**
 * This is a functional component that displays a button.
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the button.
 * @param {Function} props.onClick - The function to call when the button is clicked.
 * @returns {JSX.Element} The rendered button element.
 */
const AccordionWrapper = ( { children }:AccordionWrapperProps ) => {

    return (

        <section>
            {children}
            
        </section>
        
    )
}

export default AccordionWrapper