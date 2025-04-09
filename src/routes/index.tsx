
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import Cultura from '../pages/Cultura/Cultura';
import NotFound from '../pages/NotFound';
import InternalRules from '../pages/InternalRules/InternalRules';
import Benefits from '../pages/Benefits/Benefits';
import PlaceholderPage from '../pages/PlaceholderPage/PlaceholderPage';
import Members from '../pages/Members/Members';
import Policies from '../pages/Policies/Policies';
import Paths from '../pages/Paths/Paths';
import Dictionary from '../pages/Dictionary/Dictionary';
import Product from '../pages/Product/Product';
import History from '../pages/History/History';
import Culture from '../pages/Culture/Culture';
import Organization from '../pages/Organization/Organization';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Home page */}
      <Route 
        path="/" 
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        } 
      />
      
      {/* Playbook section */}
      <Route 
        path="/internal-rules" 
        element={
          <MainLayout>
            <InternalRules />
          </MainLayout>
        } 
      />
      <Route 
        path="/benefits" 
        element={
          <MainLayout>
            <Benefits />
          </MainLayout>
        } 
      />
      <Route 
        path="/members" 
        element={
          <MainLayout>
            <Members />
          </MainLayout>
        } 
      />
      <Route 
        path="/policies" 
        element={
          <MainLayout>
            <Policies />
          </MainLayout>
        } 
      />
      
      {/* Work section */}
      <Route 
        path="/paths" 
        element={
          <MainLayout>
            <Paths />
          </MainLayout>
        } 
      />
      <Route 
        path="/voice" 
        element={
          <MainLayout>
            <PlaceholderPage title="Tom de Voz" />
          </MainLayout>
        } 
      />
      <Route 
        path="/purchases" 
        element={
          <MainLayout>
            <PlaceholderPage title="Compras" />
          </MainLayout>
        } 
      />
      <Route 
        path="/rooms" 
        element={
          <MainLayout>
            <PlaceholderPage title="Salas" />
          </MainLayout>
        } 
      />
      <Route 
        path="/office" 
        element={
          <MainLayout>
            <PlaceholderPage title="Escritório e Regras" />
          </MainLayout>
        } 
      />
      <Route 
        path="/calendar" 
        element={
          <MainLayout>
            <PlaceholderPage title="Calendário e Eventos" />
          </MainLayout>
        } 
      />
      <Route 
        path="/work-policies" 
        element={
          <MainLayout>
            <PlaceholderPage title="Políticas" />
          </MainLayout>
        } 
      />
      <Route 
        path="/equipment" 
        element={
          <MainLayout>
            <PlaceholderPage title="Suporte de Equipamentos" />
          </MainLayout>
        } 
      />
      <Route 
        path="/leadership" 
        element={
          <MainLayout>
            <PlaceholderPage title="Portal de Líderes" />
          </MainLayout>
        } 
      />
      
      {/* About section */}
      <Route 
        path="/product" 
        element={
          <MainLayout>
            <Product />
          </MainLayout>
        } 
      />
      <Route 
        path="/history" 
        element={
          <MainLayout>
            <History />
          </MainLayout>
        } 
      />
      <Route 
        path="/culture" 
        element={
          <MainLayout>
            <Culture />
          </MainLayout>
        } 
      />
      <Route 
        path="/partners" 
        element={
          <MainLayout>
            <PlaceholderPage title="Parceiros" />
          </MainLayout>
        } 
      />
      <Route 
        path="/dictionary" 
        element={
          <MainLayout>
            <Dictionary />
          </MainLayout>
        } 
      />
      <Route 
        path="/strategy" 
        element={
          <MainLayout>
            <PlaceholderPage title="Estratégia 2025" />
          </MainLayout>
        } 
      />
      <Route 
        path="/organization" 
        element={
          <MainLayout>
            <Organization />
          </MainLayout>
        } 
      />
      
      {/* 404 page */}
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
