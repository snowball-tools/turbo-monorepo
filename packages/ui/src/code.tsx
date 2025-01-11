import React, { ReactNode } from 'react';

interface ComponentProps {
  className?: string;
  children?: ReactNode;
}

export const Component: React.FC<ComponentProps> = ({
  className,
  children
}) => {
  return <div className={className}>{children}</div>;
};
