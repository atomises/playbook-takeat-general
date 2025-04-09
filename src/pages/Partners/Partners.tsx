
import React, { useState } from 'react';
import { Users, ExternalLink, Handshake, BookOpen, Headphones, Code, TrendingUp, Mail } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import { getIconByName } from '../../utils/iconUtils';
import './Partners.css';
import partnersData from './partners.data.json';

const Partners: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Filtrar parceiros por categoria
  const filteredPartners = selectedCategory === 'all' 
    ? partnersData.partners 
    : partnersData.partners.filter(partner => partner.category === selectedCategory);
  
  return (
    <PageWrapper>
      <SectionHeader
        title={partnersData.title}
        description={partnersData.description}
        icon={<Handshake size={28} />}
      />
      
      <div className="partners-page">
        <section className="overview-section">
          <p className="overview-text">{partnersData.overview}</p>
        </section>
        
        <section className="partners-section">
          <div className="partners-header">
            <h2 className="section-title">Nossos Parceiros</h2>
            
            <div className="category-filters">
              <button
                className={`category-filter ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                Todos
              </button>
              
              {partnersData.categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-filter ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="partners-grid">
            {filteredPartners.map((partner) => (
              <div key={partner.id} className="partner-card">
                <div className="partner-header">
                  <div className="partner-logo">
                    <img src={partner.logo} alt={`${partner.name} logo`} />
                  </div>
                  <div className="partner-name-type">
                    <h3 className="partner-name">{partner.name}</h3>
                    <div className="partner-type">{partner.partnership_type}</div>
                  </div>
                </div>
                
                <p className="partner-description">{partner.description}</p>
                
                {partner.testimonial && (
                  <div className="partner-testimonial">
                    <blockquote className="testimonial-quote">
                      "{partner.testimonial.quote}"
                    </blockquote>
                    <div className="testimonial-author">
                      {partner.testimonial.author}, {partner.testimonial.role}
                    </div>
                  </div>
                )}
                
                <a 
                  href={partner.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="partner-website"
                >
                  <ExternalLink size={16} />
                  <span>Visitar Website</span>
                </a>
              </div>
            ))}
          </div>
        </section>
        
        <section className="benefits-section">
          <h2 className="section-title">Benefícios para Parceiros</h2>
          
          <div className="benefits-grid">
            {partnersData.benefits.map((benefit, index) => (
              <Card
                key={index}
                title={benefit.title}
                description={benefit.description}
                icon={getIconByName(benefit.icon)}
                className="benefit-card"
              />
            ))}
          </div>
        </section>
        
        <section className="become-partner-section">
          <div className="become-partner-container">
            <div className="become-partner-content">
              <h2 className="become-partner-title">{partnersData.become_partner.title}</h2>
              <p className="become-partner-description">{partnersData.become_partner.description}</p>
              
              <div className="partner-process">
                <h3>Processo de Parceria</h3>
                <ol className="process-steps">
                  {partnersData.become_partner.process.map((step, index) => (
                    <li key={index} className="process-step">{step}</li>
                  ))}
                </ol>
              </div>
            </div>
            
            <div className="contact-box">
              <h3 className="contact-title">Entre em Contato</h3>
              <div className="contact-name">{partnersData.become_partner.contact.name}</div>
              
              <div className="contact-info">
                <div className="contact-item">
                  <Mail size={16} />
                  <a href={`mailto:${partnersData.become_partner.contact.email}`}>
                    {partnersData.become_partner.contact.email}
                  </a>
                </div>
                <div className="contact-item">
                  <Users size={16} />
                  <span>{partnersData.become_partner.contact.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Partners;
