
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
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
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const location = useLocation();

  // Inicializa todas as categorias como expandidas, exceto em modo móvel
  useEffect(() => {
    const initialExpanded = sidebarData.categories.reduce((acc, category) => {
      acc[category.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    
    setExpandedCategories(initialExpanded);
  }, []);

  const toggleSidebar = () => {
    const newCollapsedState = !collapsed;
    setCollapsed(newCollapsedState);
    if (onCollapsedChange) {
      onCollapsedChange(newCollapsedState);
    }
  };

  const toggleCategory = (categoryId: string) => {
    if (collapsed) {
      // Se a sidebar estiver colapsada, expande primeiro
      setCollapsed(false);
      if (onCollapsedChange) {
        onCollapsedChange(false);
      }
      
      // Espera a animação da sidebar terminar antes de expandir a categoria
      setTimeout(() => {
        setExpandedCategories(prev => ({
          ...prev,
          [categoryId]: !prev[categoryId]
        }));
      }, 300);
    } else {
      setExpandedCategories(prev => ({
        ...prev,
        [categoryId]: !prev[categoryId]
      }));
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
        {sidebarData.categories.map((category) => {
          const isExpanded = expandedCategories[category.id] || false;
          const hasActiveItem = category.items.some(item => location.pathname === item.path);
          
          return (
            <div key={category.id} className={`sidebar-category ${hasActiveItem ? 'has-active' : ''}`}>
              <div 
                className="category-header"
                onClick={() => toggleCategory(category.id)}
              >
                {!collapsed && (
                  <>
                    <h3 className="category-title">{category.title}</h3>
                    <div className="category-toggle">
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </>
                )}
              </div>
              
              <motion.ul 
                className="sidebar-nav"
                initial={false}
                animate={{ 
                  height: (!collapsed && isExpanded) ? 'auto' : collapsed ? 'auto' : 0,
                  opacity: (!collapsed && isExpanded) ? 1 : collapsed ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.ul>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Sidebar;
