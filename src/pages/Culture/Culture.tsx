
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './Culture.css';
import data from './culture.data.json';
import { getIconByName } from '../../utils/iconUtils';

const Culture: React.FC = () => {
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

  return (
    <PageWrapper>
      <SectionHeader
        title="Nossa Cultura"
        description="Conheça os valores que moldam quem somos e como trabalhamos juntos."
        icon={<Heart size={28} />}
      />
      
      <div className="culture-page">
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
                  {getIconByName(valor.icon)}
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
    </PageWrapper>
  );
};

export default Culture;
