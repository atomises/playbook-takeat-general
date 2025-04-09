
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import Culture from './pages/Culture/Culture';
import History from './pages/History/History';
import Strategy from './pages/Strategy/Strategy';
import Product from './pages/Product/Product';
import Benefits from './pages/Benefits/Benefits';
import Policies from './pages/Policies/Policies';
import Members from './pages/Members/Members';
import InternalRules from './pages/InternalRules/InternalRules';
import Dictionary from './pages/Dictionary/Dictionary';
import Organization from './pages/Organization/Organization';
import Paths from './pages/Paths/Paths';
import Voice from './pages/Voice/Voice';
import Purchases from './pages/Purchases/Purchases';
import Rooms from './pages/Rooms/Rooms';
import Office from './pages/Office/Office';
import Calendar from './pages/Calendar/Calendar';
import WorkPolicies from './pages/WorkPolicies/WorkPolicies';
import Equipment from './pages/Equipment/Equipment';
import Leadership from './pages/Leadership/Leadership';
import Partners from './pages/Partners/Partners';
import UsefulLinks from './pages/UsefulLinks/UsefulLinks';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/history" element={<History />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/product" element={<Product />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/members" element={<Members />} />
          <Route path="/internal-rules" element={<InternalRules />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/paths" element={<Paths />} />
          <Route path="/voice" element={<Voice />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/office" element={<Office />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/work-policies" element={<WorkPolicies />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/useful-links" element={<UsefulLinks />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
