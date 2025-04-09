
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, Phone, Building, Shield, Users, DollarSign, FileCheck } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Accordion, { AccordionItem } from '../../components/Accordion/Accordion';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Policies.css';
import data from './policies.data.json';
import searchData from '../../components/SearchBar/searchBar.data.json';

const Policies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const getIconByCategory = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield size={24} />;
      case 'Users':
        return <Users size={24} />;
      case 'DollarSign':
        return <DollarSign size={24} />;
      case 'FileCheck':
        return <FileCheck size={24} />;
      default:
        return <FileText size={24} />;
    }
  };
  
  const filteredPolicies = selectedCategory 
    ? data.policies.filter(policy => policy.category === selectedCategory)
    : data.policies;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder="Buscar políticas..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title={data.title}
        description={data.description}
        icon={<FileText size={28} />}
      />
      
      <div className="policies-page">
        <motion.div 
          className="policies-categories"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {data.categories.map((category) => (
            <motion.div 
              key={category.id} 
              className="category-card"
              variants={itemVariants}
              onClick={() => setSelectedCategory(category.id === selectedCategory ? null : category.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="category-header">
                <div className="category-icon">
                  {getIconByCategory(category.icon)}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <p className="category-description">{category.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="policies-list">
          <div className="policies-list-header">
            <h2 className="policies-list-title">
              {selectedCategory 
                ? `Políticas de ${data.categories.find(c => c.id === selectedCategory)?.title}` 
                : 'Todas as Políticas'}
            </h2>
            <p className="policies-list-description">
              {selectedCategory 
                ? data.categories.find(c => c.id === selectedCategory)?.description
                : 'Lista completa de políticas e regulamentos da empresa'}
            </p>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredPolicies.map((policy) => (
              <motion.div 
                key={policy.id}
                className="policy-card"
                variants={itemVariants}
              >
                <div className="policy-header">
                  <h3 className="policy-title">{policy.title}</h3>
                  <span className="policy-date">Atualizado em: {policy.lastUpdate}</span>
                </div>
                <div className="policy-body">
                  <p className="policy-summary">{policy.summary}</p>
                  <p className="policy-content">{policy.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="policies-faq">
          <h2 className="policies-list-title">Perguntas Frequentes</h2>
          <Accordion>
            {data.faq.map((item, index) => (
              <AccordionItem key={index} title={item.question}>
                <p>{item.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="policies-contact">
          <h3 className="policies-contact-title">Precisa de ajuda com políticas?</h3>
          <div className="contact-info">
            <div className="contact-icon"><Building size={18} /></div>
            <span className="contact-text">Departamento: {data.contact.department}</span>
          </div>
          <div className="contact-info">
            <div className="contact-icon"><Mail size={18} /></div>
            <span className="contact-text">{data.contact.email}</span>
          </div>
          <div className="contact-info">
            <div className="contact-icon"><Phone size={18} /></div>
            <span className="contact-text">{data.contact.phone}</span>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Policies;
