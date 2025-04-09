
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import Benefits from './pages/Benefits/Benefits';
import Culture from './pages/Culture/Culture';
import Dictionary from './pages/Dictionary/Dictionary';
import Members from './pages/Members/Members';

// Import das outras páginas
import Policies from './pages/Policies/Policies';
import Paths from './pages/Paths/Paths';
import Voice from './pages/Voice/Voice';
import Purchases from './pages/Purchases/Purchases';
import Rooms from './pages/Rooms/Rooms';
import Office from './pages/Office/Office';
import Calendar from './pages/Calendar/Calendar';
import WorkPolicies from './pages/WorkPolicies/WorkPolicies';
import Equipment from './pages/Equipment/Equipment';
import Leadership from './pages/Leadership/Leadership';
import Product from './pages/Product/Product';
import History from './pages/History/History';
import Partners from './pages/Partners/Partners';
import Strategy from './pages/Strategy/Strategy';
import Organization from './pages/Organization/Organization';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/benefits" element={<MainLayout><Benefits /></MainLayout>} />
      <Route path="/culture" element={<MainLayout><Culture /></MainLayout>} />
      <Route path="/dictionary" element={<MainLayout><Dictionary /></MainLayout>} />
      <Route path="/members" element={<MainLayout><Members /></MainLayout>} />
      
      {/* Outras rotas */}
      <Route path="/policies" element={<MainLayout><Policies /></MainLayout>} />
      <Route path="/paths" element={<MainLayout><Paths /></MainLayout>} />
      <Route path="/voice" element={<MainLayout><Voice /></MainLayout>} />
      <Route path="/purchases" element={<MainLayout><Purchases /></MainLayout>} />
      <Route path="/rooms" element={<MainLayout><Rooms /></MainLayout>} />
      <Route path="/office" element={<MainLayout><Office /></MainLayout>} />
      <Route path="/calendar" element={<MainLayout><Calendar /></MainLayout>} />
      <Route path="/work-policies" element={<MainLayout><WorkPolicies /></MainLayout>} />
      <Route path="/equipment" element={<MainLayout><Equipment /></MainLayout>} />
      <Route path="/leadership" element={<MainLayout><Leadership /></MainLayout>} />
      <Route path="/product" element={<MainLayout><Product /></MainLayout>} />
      <Route path="/history" element={<MainLayout><History /></MainLayout>} />
      <Route path="/partners" element={<MainLayout><Partners /></MainLayout>} />
      <Route path="/strategy" element={<MainLayout><Strategy /></MainLayout>} />
      <Route path="/organization" element={<MainLayout><Organization /></MainLayout>} />
      
      {/* Rota para páginas não encontradas */}
      <Route path="*" element={<MainLayout><div>Página não encontrada</div></MainLayout>} />
    </Routes>
  );
};

export default AppRoutes;
