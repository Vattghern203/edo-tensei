import { FC, HTMLAttributes } from 'react';

// Define the union type for the allowed HTML elements
type ContextIconProps = {
  as: 'span' | 'i' | 'em'; // Add more allowed elements if needed
  iconName: string;
  ariaLabel?: string; // Optional ariaLabel prop to provide a descriptive label for the icon
} & HTMLAttributes<HTMLElement>; // Extend from HTMLAttributes to allow standard HTML attributes

const ContextIcon: FC<ContextIconProps> = ({ as, iconName, ariaLabel, ...restProps }) => {
  // Depending on the value of the "as" prop, render the appropriate element
  switch (as) {
    case 'span':
      return (
        <span className={`uil ${iconName}`} aria-label={ariaLabel} {...restProps} />
      );
    case 'i':
      return (
        <i className={`uil ${iconName}`} aria-label={ariaLabel} {...restProps} />
      );
    case 'em':
      return (
        <em className={`uil ${iconName}`} aria-label={ariaLabel} {...restProps} />
      );
    default:
      // If an invalid "as" prop value is provided, render a default element (e.g., <span>)
      return (
        <span className={`uil ${iconName}`} aria-label={ariaLabel} {...restProps} />
      );
  }
};

export default ContextIcon;
