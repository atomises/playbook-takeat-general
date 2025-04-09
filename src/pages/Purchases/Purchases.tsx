
import React from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import Accordion, { AccordionItem } from '../../components/Accordion/Accordion';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import { getIconByName } from '../../utils/iconUtils';
import './Purchases.css';
import purchasesData from './purchases.data.json';

const Purchases: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title={purchasesData.title}
        description={purchasesData.description}
        icon={<ShoppingCart size={28} />}
      />
      
      <div className="purchases-page">
        <section>
          <h2 className="category-title">Categorias de Compras</h2>
          <div className="purchases-grid">
            {purchasesData.categories.map((category) => (
              <Card 
                key={category.id}
                title={category.title}
                description={category.description}
                icon={getIconByName(category.icon)}
              />
            ))}
          </div>
        </section>
        
        <section className="purchase-category">
          <h2 className="category-title">
            {purchasesData.process.title}
          </h2>
          
          <motion.div 
            className="purchase-process"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {purchasesData.process.steps.map((step) => (
              <div key={step.id} className="process-step">
                <div className="step-number">{step.id}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </section>
        
        <section className="purchase-category">
          <h2 className="category-title">Níveis de Aprovação</h2>
          
          <div className="approval-levels">
            {purchasesData.approval_levels.map((level, index) => (
              <div key={index} className="approval-level">
                <div className="level-amount">{level.amount}</div>
                <div className="level-approver">
                  <ArrowRight size={16} style={{ display: 'inline', marginRight: '8px' }} />
                  {level.approver}
                </div>
              </div>
            ))}
          </div>
          
          <div className="purchase-limit-card">
            <h3 className="limit-title">{purchasesData.purchase_limits.title}</h3>
            <p>{purchasesData.purchase_limits.description}</p>
            <ul style={{ marginTop: '10px' }}>
              {purchasesData.purchase_limits.limits.map((item, index) => (
                <li key={index} style={{ margin: '5px 0' }}>
                  <strong>{item.department}:</strong> {item.limit}
                </li>
              ))}
            </ul>
          </div>
        </section>
        
        <section className="purchase-faq">
          <h2 className="category-title">Perguntas Frequentes</h2>
          
          <Accordion>
            {purchasesData.faq.map((item, index) => (
              <AccordionItem key={index} title={item.question}>
                <p>{item.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        
        <InfoBlock
          title="Precisa de ajuda com compras?"
          content="Entre em contato com o departamento de compras pelo e-mail compras@empresa.com ou pelo ramal 1234."
          variant="info"
          icon={<ShoppingCart size={24} />}
        />
      </div>
    </PageWrapper>
  );
};

export default Purchases;
