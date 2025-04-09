
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import Cultura from '../pages/Cultura/Cultura';
import NotFound from '../pages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        } 
      />
      <Route 
        path="/culture" 
        element={
          <MainLayout>
            <Cultura />
          </MainLayout>
        } 
      />
      <Route 
        path="*" 
        element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;
