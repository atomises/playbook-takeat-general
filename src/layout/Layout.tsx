
import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  return (
    <div className="app-layout">
      <Sidebar 
        onCollapsedChange={setSidebarCollapsed}
      />
      <div className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Header />
        <main className="page-content">
          {children}
        </main>
        <Footer githubLink="https://github.com/mycompany/intranet" />
      </div>
      <style jsx="true">{`
        .app-layout {
          display: flex;
          min-height: 100vh;
        }
        
        .main-content {
          flex: 1;
          margin-left: 280px;
          transition: margin-left 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        
        .main-content.sidebar-collapsed {
          margin-left: 72px;
        }
        
        .page-content {
          flex: 1;
          padding: 20px;
          background-color: #f8fafc;
        }
        
        @media (max-width: 768px) {
          .main-content {
            margin-left: 0;
          }
          
          .main-content.sidebar-collapsed {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
