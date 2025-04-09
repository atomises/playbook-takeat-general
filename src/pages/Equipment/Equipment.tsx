
import React from 'react';
import { ShoppingBag, Truck, InfoIcon, CheckSquare, HelpCircle, ShoppingCart } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Accordion, { AccordionItem } from '../../components/Accordion/Accordion';
import './Equipment.css';
import equipmentData from './equipment.data.json';

const Equipment: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title={equipmentData.title}
        description={equipmentData.description}
        icon={<ShoppingBag size={28} />}
      />
      
      <div className="equipment-page">
        <div className="equipment-process-overview">
          <h2 className="section-title">Processo de Solicitação</h2>
          
          <div className="process-steps">
            {equipmentData.request_process.steps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <h3 className="step-title">Passo {index + 1}</h3>
                  <p className="step-description">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <InfoBlock
          title="Importante"
          content="Todas as solicitações devem ser aprovadas pelo seu gestor antes de serem processadas pelo departamento de TI."
          variant="info"
          icon={<InfoIcon size={24} />}
        />
        
        <div className="equipment-categories">
          <h2 className="section-title">Equipamentos Disponíveis</h2>
          
          <div className="equipment-grid">
            {equipmentData.equipment_types.map((category, index) => (
              <Card 
                key={index}
                title={category.type}
                description={category.description}
                icon={<ShoppingCart size={20} />}
                className="equipment-card"
              >
                <div className="equipment-items">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="equipment-item">
                      <span className="item-name">{item.name}</span>
                      <span className="item-specs">{item.specs}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="delivery-info">
          <h2 className="section-title">Prazos de Entrega</h2>
          <div className="delivery-grid">
            <div className="delivery-item">
              <div className="delivery-icon">
                <Truck size={24} />
              </div>
              <div className="delivery-content">
                <h3 className="delivery-title">Escritório</h3>
                <p className="delivery-description">Até 5 dias úteis após aprovação</p>
              </div>
            </div>
            <div className="delivery-item">
              <div className="delivery-icon">
                <Truck size={24} />
              </div>
              <div className="delivery-content">
                <h3 className="delivery-title">Home Office</h3>
                <p className="delivery-description">Até 10 dias úteis após aprovação</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="equipment-faq">
          <h2 className="section-title">Perguntas Frequentes</h2>
          
          <Accordion>
            {equipmentData.faqs.map((item, index) => (
              <AccordionItem 
                key={index}
                title={item.question}
              >
                <p>{item.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="equipment-support">
          <h2 className="section-title">Suporte</h2>
          
          <div className="support-contacts">
            {equipmentData.support.channels.map((contact, index) => (
              <div key={index} className="support-contact">
                <h3 className="contact-name">{contact.name}</h3>
                <div className="contact-detail">
                  <strong>Descrição:</strong> {contact.description}
                </div>
                <div className="contact-detail">
                  <strong>Contato:</strong> {contact.url}
                </div>
                <div className="contact-detail">
                  <strong>Tempo de resposta:</strong> {contact.response_time}
                </div>
              </div>
            ))}
          </div>
          
          <InfoBlock
            title="Horário de atendimento"
            content={equipmentData.support.business_hours}
            variant="info"
            icon={<HelpCircle size={24} />}
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Equipment;
