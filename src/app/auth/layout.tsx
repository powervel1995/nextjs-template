import { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const layout: FC<LayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default layout;
