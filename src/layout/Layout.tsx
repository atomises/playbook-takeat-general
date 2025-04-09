
import React from 'react';
import MainLayout from './MainLayout/MainLayout';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Layout;
