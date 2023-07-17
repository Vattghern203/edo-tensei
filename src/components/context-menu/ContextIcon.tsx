import {FC, HTMLAttributes} from 'react';

// Define the union type for the allowed HTML elements
type ContextIconProps = {
  as: 'span' | 'i' | 'em'; // Add more allowed elements if needed
  iconName: string;
} & HTMLAttributes<HTMLElement>; // Extend from HTMLAttributes to allow standard HTML attributes

const ContextIcon: FC<ContextIconProps> = ({ as, iconName, ...restProps }) => {
  // Depending on the value of the "as" prop, render the appropriate element
  switch (as) {
    case 'span':
      return <span className={`uil ${iconName}`} {...restProps} />;
    case 'i':
      return <i className={`uil ${iconName}`} {...restProps} />;
    case 'em':
      return <em className={`uil ${iconName}`} {...restProps} />;
    default:
      // If an invalid "as" prop value is provided, render a default element (e.g., <span>)
      return <span className={`uil ${iconName}`} {...restProps} />;
  }
};

export default ContextIcon;
