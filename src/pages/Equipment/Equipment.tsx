
import React, { useState } from 'react';
import { Monitor, Laptop, Smartphone, Mouse, Box, HelpCircle, Clock, AlertCircle, CheckCircle, Download, ArrowRight } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import './Equipment.css';
import equipmentData from './equipment.data.json';

const Equipment: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>(equipmentData.equipment_types[0].type);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  
  // Filtrar o tipo de equipamento selecionado
  const selectedEquipmentType = equipmentData.equipment_types.find(type => type.type === selectedType);
  
  // Mapear ícones para tipos de equipamento
  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'Computadores':
        return <Laptop size={24} />;
      case 'Monitores':
        return <Monitor size={24} />;
      case 'Acessórios':
        return <Mouse size={24} />;
      case 'Smartphones':
        return <Smartphone size={24} />;
      default:
        return <Box size={24} />;
    }
  };
  
  // Alternar exibição de FAQ
  const toggleFaq = (index: number) => {
    if (selectedFaq === index) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(index);
    }
  };
  
  return (
    <PageWrapper>
      <SectionHeader
        title={equipmentData.title}
        description={equipmentData.description}
        icon={<Laptop size={28} />}
      />
      
      <div className="equipment-page">
        <section className="equipment-catalog-section">
          <h2 className="section-title">Catálogo de Equipamentos</h2>
          
          <div className="equipment-tabs">
            {equipmentData.equipment_types.map((type) => (
              <button
                key={type.type}
                className={`equipment-tab ${selectedType === type.type ? 'active' : ''}`}
                onClick={() => setSelectedType(type.type)}
              >
                {getTypeIcon(type.type)}
                <span>{type.type}</span>
              </button>
            ))}
          </div>
          
          {selectedEquipmentType && (
            <div className="equipment-type-details">
              <p className="type-description">{selectedEquipmentType.description}</p>
              
              <div className="equipment-items-grid">
                {selectedEquipmentType.items.map((item, index) => (
                  <Card
                    key={index}
                    title={item.name}
                    description={item.specs}
                    className="equipment-card"
                  >
                    <div className="equipment-details">
                      <div className="equipment-detail">
                        <strong>Elegível para:</strong>
                        <span>{item.eligible_for}</span>
                      </div>
                      <div className="equipment-detail">
                        <strong>Ciclo de substituição:</strong>
                        <span>{item.replacement_cycle}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </section>
        
        <section className="request-process-section">
          <div className="request-container">
            <h2 className="section-title">{equipmentData.request_process.title}</h2>
            
            <div className="request-steps">
              <ol className="steps-list">
                {equipmentData.request_process.steps.map((step, index) => (
                  <li key={index} className="step-item">
                    <div className="step-number">{index + 1}</div>
                    <div className="step-content">{step}</div>
                  </li>
                ))}
              </ol>
            </div>
            
            <InfoBlock
              title="Novos Colaboradores"
              content={equipmentData.request_process.new_hire}
              variant="info"
              icon={<HelpCircle size={24} />}
            />
          </div>
        </section>
        
        <section className="support-section">
          <h2 className="section-title">{equipmentData.support.title}</h2>
          
          <div className="support-channels-grid">
            {equipmentData.support.channels.map((channel, index) => (
              <div key={index} className="support-channel-card">
                <h3 className="channel-name">{channel.name}</h3>
                <p className="channel-description">{channel.description}</p>
                
                <div className="channel-details">
                  <div className="channel-contact">
                    <strong>Contato:</strong>
                    <span>{channel.url}</span>
                  </div>
                  <div className="channel-response">
                    <Clock size={16} />
                    <span>{channel.response_time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="support-hours">
            <div className="hours-info">
              <Clock size={20} />
              <span><strong>Horário de Atendimento:</strong> {equipmentData.support.business_hours}</span>
            </div>
            
            <div className="emergency-info">
              <AlertCircle size={20} />
              <span><strong>Emergências:</strong> {equipmentData.support.emergency}</span>
            </div>
          </div>
        </section>
        
        <div className="two-columns">
          <section className="maintenance-section">
            <h2 className="section-title">{equipmentData.maintenance.title}</h2>
            
            <div className="maintenance-content">
              <div className="maintenance-schedule">
                <h3>Cronograma</h3>
                <ul className="schedule-list">
                  {equipmentData.maintenance.schedule.map((item, index) => (
                    <li key={index} className="schedule-item">{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="maintenance-tips">
                <h3>Dicas</h3>
                <ul className="tips-list">
                  {equipmentData.maintenance.tips.map((tip, index) => (
                    <li key={index} className="tip-item">{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          
          <section className="return-section">
            <h2 className="section-title">{equipmentData.return.title}</h2>
            
            <div className="return-content">
              <div className="return-when">
                <h3>Quando Devolver</h3>
                <ul className="when-list">
                  {equipmentData.return.when.map((item, index) => (
                    <li key={index} className="when-item">{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="return-process">
                <h3>Processo</h3>
                <ol className="process-list">
                  {equipmentData.return.process.map((step, index) => (
                    <li key={index} className="process-item">{step}</li>
                  ))}
                </ol>
              </div>
              
              <div className="return-remote">
                <h3>Devolução Remota</h3>
                <p>{equipmentData.return.remote_return}</p>
              </div>
            </div>
          </section>
        </div>
        
        <section className="faqs-section">
          <h2 className="section-title">Perguntas Frequentes</h2>
          
          <div className="faqs-list">
            {equipmentData.faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${selectedFaq === index ? 'active' : ''}`}
              >
                <div 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{faq.question}</h3>
                  <div className="faq-toggle">
                    {selectedFaq === index ? (
                      <ArrowRight size={16} className="rotated" />
                    ) : (
                      <ArrowRight size={16} />
                    )}
                  </div>
                </div>
                
                {selectedFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Equipment;
