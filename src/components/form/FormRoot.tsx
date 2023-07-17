import { ReactNode, FormHTMLAttributes } from 'react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  submitAction: string;
  children: ReactNode;
  handleSubmit?: () => void;
  method: 'post' | 'get';
}

const FormRoot = ({ submitAction, children, handleSubmit, method }: FormProps) => {

  const additionalProps = method === 'post' ? { encType: 'multipart/form-data' } : {};

  return (

    <form 
        action={submitAction} 
        method={method} 
        role="form" 
        onSubmit={handleSubmit} 
        {...additionalProps}>
      {children}
    </form>
    
  );
};

export default FormRoot;
