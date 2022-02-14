import React from 'react';

const LayoutWrapper = ({children}) => {
  return <div className="flex flex-col justify-between h-[calc(100vh)]">{children}</div>;
};

export default LayoutWrapper;
