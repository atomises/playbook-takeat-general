
import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import './Cultura.css';
import data from './cultura.data.json';

// Properly type the Lucide icons
type IconName = keyof typeof LucideIcons;

const Cultura: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Fixed getIcon function with proper typing
  const getIcon = (iconName: string, size = 24) => {
    // Check if the icon exists in LucideIcons
    if (!Object.prototype.hasOwnProperty.call(LucideIcons, iconName)) {
      return null;
    }
    
    // Use dynamic access with type assertion
    const IconComponent = LucideIcons[iconName as IconName];
    // Check if the icon is a valid component function
    if (typeof IconComponent !== 'function') {
      return null;
    }
    
    // Use JSX to render the icon instead of React.createElement
    return <IconComponent size={size} />;
  };

  return (
    <div className="cultura-page">
      <header className="page-header">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="page-title"
        >
          Nossa Cultura
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="page-description"
        >
          Conheça os valores que moldam quem somos e como trabalhamos juntos.
        </motion.p>
      </header>

      <motion.section 
        className="valores-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="section-title">Nossos Valores</h2>
        <div className="valores-grid">
          {data.valores.map((valor) => (
            <motion.div 
              key={valor.id} 
              className="valor-card"
              variants={itemVariants}
            >
              <div className="valor-icon">
                {getIcon(valor.icon)}
              </div>
              <h3 className="valor-title">{valor.title}</h3>
              <p className="valor-description">{valor.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="principios-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="section-title">Princípios Fundamentais</h2>
        <ul className="principios-list">
          {data.principios.map((principio, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="principio-item"
            >
              <div className="principio-bullet">{index + 1}</div>
              <div className="principio-content">
                <h3 className="principio-title">{principio.title}</h3>
                <p className="principio-description">{principio.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
};

export default Cultura;
