
import React, { useState } from 'react';
import { FileText, Calendar, Search, Shield, Users, DollarSign, HelpCircle } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import Accordion, { AccordionItem } from '../../components/Accordion/Accordion';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import './Policies.css';
import policiesData from './policies.data.json';

const Policies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'compliance':
        return <FileText size={18} />;
      case 'security':
        return <Shield size={18} />;
      case 'hr':
        return <Users size={18} />;
      case 'financial':
        return <DollarSign size={18} />;
      default:
        return <FileText size={18} />;
    }
  };

  const filteredPolicies = policiesData.policies.filter(policy => {
    const matchesCategory = activeCategory === 'all' || policy.category === activeCategory;
    const matchesSearch = policy.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          policy.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageWrapper>
      <SectionHeader
        title={policiesData.title}
        description={policiesData.description}
        icon={<FileText size={28} />}
      />
      
      <div className="policies-page">
        <div className="policies-control-panel">
          <div className="policies-search">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Buscar políticas..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="policies-search-input"
            />
          </div>
          
          <div className="policies-categories">
            <button 
              className={`category-filter-button ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              Todas
            </button>
            
            {policiesData.categories.map((category) => (
              <button 
                key={category.id}
                className={`category-filter-button ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {getCategoryIcon(category.id)}
                <span>{category.title}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="policies-content">
          {filteredPolicies.length > 0 ? (
            <div className="policies-grid">
              {filteredPolicies.map((policy) => {
                const category = policiesData.categories.find(cat => cat.id === policy.category);
                
                return (
                  <Card 
                    key={policy.id}
                    title={policy.title}
                    description={policy.summary}
                    icon={getCategoryIcon(policy.category)}
                    className="policy-card"
                  >
                    <div className="policy-card-footer">
                      <div className="policy-category">
                        {getCategoryIcon(policy.category)}
                        <span>{category?.title || policy.category}</span>
                      </div>
                      
                      <div className="policy-updated">
                        <Calendar size={14} />
                        <span>Atualizado em {policy.lastUpdate}</span>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="no-policies-found">
              <HelpCircle size={48} />
              <h3>Nenhuma política encontrada</h3>
              <p>Tente modificar seus filtros ou termos de busca.</p>
            </div>
          )}
        </div>
        
        <section className="policies-faq">
          <h2 className="section-title">Perguntas Frequentes</h2>
          
          <Accordion>
            {policiesData.faq.map((faq, index) => (
              <AccordionItem key={index} title={faq.question}>
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        
        <section className="policies-contact">
          <h2 className="section-title">Precisa de ajuda?</h2>
          
          <InfoBlock
            title="Departamento responsável"
            content={`Para dúvidas sobre políticas, entre em contato com ${policiesData.contact.department} pelo e-mail ${policiesData.contact.email} ou telefone ${policiesData.contact.phone}.`}
            variant="info"
            icon={<HelpCircle size={24} />}
          />
        </section>
      </div>
    </PageWrapper>
  );
};

export default Policies;
