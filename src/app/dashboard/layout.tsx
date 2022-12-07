import { FC, ReactNode } from 'react';
import NavBarWindow from '../../components/ui/NavBarWindow';

interface LayoutProps {
  children: ReactNode;
}

const layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBarWindow />
      {children}
    </>
  );
};

export default layout;
