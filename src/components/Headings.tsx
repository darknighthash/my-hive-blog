import React from 'react';

interface HeadingProps {
  children?: React.ReactNode;
}

// 定义 h2 组件
export const H2: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h2 className="text-2xl font-bold mt-6 mb-4">
      {children}
    </h2>
  );
};

// 定义 h3 组件
export const H3: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h3 className="text-xl font-bold mt-5 mb-3">
      {children}
    </h3>
  );
};

// 定义 h4 组件
export const H4: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h4 className="text-lg font-bold mt-4 mb-2">
      {children}
    </h4>
  );
};