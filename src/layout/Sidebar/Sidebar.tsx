
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Sidebar.css';
import sidebarData from './sidebar.data.json';
import logo from '../../assets/logo.svg';
import { getIconByName } from '../../utils/iconUtils';

interface SidebarProps {
  className?: string;
  onCollapsedChange?: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  className = '', 
  onCollapsedChange 
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    const newCollapsedState = !collapsed;
    setCollapsed(newCollapsedState);
    if (onCollapsedChange) {
      onCollapsedChange(newCollapsedState);
    }
  };

  // Notify parent component of initial collapsed state
  useEffect(() => {
    if (onCollapsedChange) {
      onCollapsedChange(collapsed);
    }
  }, []);

  const sidebarVariants = {
    expanded: { width: '280px' },
    collapsed: { width: '72px' }
  };

  return (
    <motion.div 
      className={`sidebar ${className} ${collapsed ? 'collapsed' : ''}`}
      initial="expanded"
      animate={collapsed ? 'collapsed' : 'expanded'}
      variants={sidebarVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src={logo} alt="Company Logo" className="logo-image" />
          {!collapsed && <span className="logo-text">MyCompany</span>}
        </div>
        <button className="collapse-button" onClick={toggleSidebar}>
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <div className="sidebar-content">
        {sidebarData.categories.map((category) => (
          <div key={category.id} className="sidebar-category">
            {!collapsed && <h3 className="category-title">{category.title}</h3>}
            <ul className="sidebar-nav">
              {category.items.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.id}>
                    <Link 
                      to={item.path} 
                      className={`sidebar-link ${isActive ? 'active' : ''}`}
                      title={collapsed ? item.title : ''}
                    >
                      <span className="sidebar-icon">{getIconByName(item.icon, 20)}</span>
                      {!collapsed && <span className="sidebar-label">{item.title}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;
