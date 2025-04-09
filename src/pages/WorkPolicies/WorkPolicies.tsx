
import React, { useState } from 'react';
import { BookOpen, Home, Clock, MessageCircle, Shield, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './WorkPolicies.css';
import workPoliciesData from './workPolicies.data.json';

const WorkPolicies: React.FC = () => {
  const [expandedPolicy, setExpandedPolicy] = useState<string | null>("hybrid-work");
  
  const togglePolicy = (policyId: string) => {
    if (expandedPolicy === policyId) {
      setExpandedPolicy(null);
    } else {
      setExpandedPolicy(policyId);
    }
  };
  
  // Mapear ícones para categorias
  const getCategoryIcon = (id: string) => {
    switch(id) {
      case 'hybrid-work':
        return <Home size={20} />;
      case 'home-office':
        return <Home size={20} />;
      case 'working-hours':
        return <Clock size={20} />;
      case 'communication':
        return <MessageCircle size={20} />;
      case 'security':
        return <Shield size={20} />;
      default:
        return <BookOpen size={20} />;
    }
  };
  
  return (
    <PageWrapper>
      <SectionHeader
        title={workPoliciesData.title}
        description={workPoliciesData.description}
        icon={<BookOpen size={28} />}
      />
      
      <div className="work-policies-page">
        <div className="policy-categories">
          {workPoliciesData.categories.map((category) => (
            <div 
              key={category.id}
              className={`policy-category ${expandedPolicy === category.id ? 'expanded' : ''}`}
            >
              <div 
                className="category-header"
                onClick={() => togglePolicy(category.id)}
              >
                <div className="category-icon-title">
                  <div className="category-icon">
                    {getCategoryIcon(category.id)}
                  </div>
                  <h2 className="category-title">{category.title}</h2>
                </div>
                
                <div className="toggle-icon">
                  {expandedPolicy === category.id ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
              </div>
              
              {expandedPolicy === category.id && (
                <div className="policy-content">
                  <div className="policy-summary">
                    <p>{category.policy.summary}</p>
                  </div>
                  
                  {category.id === 'hybrid-work' && (
                    <>
                      <div className="policy-section">
                        <h3>Regras Básicas</h3>
                        <ul className="policy-list">
                          {category.policy.rules.map((rule, index) => (
                            <li key={index}>{rule}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="policy-section">
                        <h3>Exceções</h3>
                        <ul className="policy-list">
                          {category.policy.exceptions.map((exception, index) => (
                            <li key={index}>{exception}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                  
                  {category.id === 'home-office' && (
                    <>
                      <div className="policy-section">
                        <h3>Equipamentos</h3>
                        <ul className="policy-list">
                          {category.policy.equipment.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="policy-section">
                        <h3>Ergonomia</h3>
                        <ul className="policy-list">
                          {category.policy.ergonomics.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="policy-section">
                        <h3>Conectividade</h3>
                        <ul className="policy-list">
                          {category.policy.connectivity.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                  
                  {category.id === 'working-hours' && (
                    <>
                      <div className="policy-section">
                        <h3>Horário Principal</h3>
                        <p>{category.policy.core_hours}</p>
                      </div>
                      
                      <div className="policy-section">
                        <h3>Horário Flexível</h3>
                        <p>{category.policy.flexible_hours}</p>
                      </div>
                      
                      <div className="policy-section">
                        <h3>Registro de Ponto</h3>
                        <ul className="policy-list">
                          {category.policy.time_tracking.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="policy-section">
                        <h3>Horas Extras</h3>
                        <ul className="policy-list">
                          {category.policy.overtime.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                  
                  {category.id === 'communication' && (
                    <>
                      <div className="policy-section">
                        <h3>Canais de Comunicação</h3>
                        <div className="channels-grid">
                          {category.policy.channels.map((channel, index) => (
                            <div key={index} className="channel-card">
                              <h4 className="channel-name">{channel.name}</h4>
                              <div className="channel-purpose">
                                <strong>Objetivo:</strong> {channel.purpose}
                              </div>
                              <div className="channel-expectations">
                                <strong>Expectativas:</strong> {channel.expectations}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="policy-section">
                        <h3>Reuniões</h3>
                        <ul className="policy-list">
                          {category.policy.meetings.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="policy-section">
                        <h3>Disponibilidade</h3>
                        <ul className="policy-list">
                          {category.policy.availability.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                  
                  {category.id === 'security' && (
                    <>
                      <div className="policy-section">
                        <h3>Senhas</h3>
                        <ul className="policy-list">
                          {category.policy.password.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="policy-section">
                        <h3>Segurança de Dispositivos</h3>
                        <ul className="policy-list">
                          {category.policy.device_security.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="policy-section">
                        <h3>Proteção de Dados</h3>
                        <ul className="policy-list">
                          {category.policy.data_protection.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="policy-section">
                        <h3>Reporte de Incidentes</h3>
                        <p>{category.policy.incident_reporting}</p>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <section className="contact-section">
          <h2 className="section-title">Contatos para Suporte</h2>
          
          <div className="contacts-grid">
            {workPoliciesData.contacts.map((contact, index) => (
              <div key={index} className="contact-card">
                <h3 className="department-name">{contact.department}</h3>
                <div className="contact-info">
                  <Phone size={16} />
                  <span>{contact.contact}</span>
                </div>
                <div className="contact-topics">
                  <h4>Assuntos:</h4>
                  <ul>
                    {contact.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default WorkPolicies;
