
import React, { useState } from 'react';
import { Award, Users, Briefcase, Target, TrendingUp, BookOpen, FileText, Check } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import { getIconByName } from '../../utils/iconUtils';
import './Leadership.css';
import leadershipData from './leadership.data.json';

const Leadership: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tools');
  
  return (
    <PageWrapper>
      <SectionHeader
        title={leadershipData.title}
        description={leadershipData.description}
        icon={<Award size={28} />}
      />
      
      <div className="leadership-page">
        <section className="welcome-section">
          <div className="welcome-container">
            <h2 className="welcome-title">{leadershipData.welcome.title}</h2>
            <p className="welcome-message">{leadershipData.welcome.message}</p>
          </div>
        </section>
        
        <section className="principles-section">
          <h2 className="section-title">Princípios de Liderança</h2>
          
          <div className="principles-grid">
            {leadershipData.leadership_principles.map((principle, index) => (
              <Card
                key={index}
                title={principle.title}
                description={principle.description}
                icon={getIconByName(principle.icon)}
                className="principle-card"
              />
            ))}
          </div>
        </section>
        
        <section className="resources-section">
          <div className="resources-nav">
            <button
              className={`nav-tab ${activeTab === 'tools' ? 'active' : ''}`}
              onClick={() => setActiveTab('tools')}
            >
              <FileText size={18} />
              <span>Ferramentas e Recursos</span>
            </button>
            <button
              className={`nav-tab ${activeTab === 'development' ? 'active' : ''}`}
              onClick={() => setActiveTab('development')}
            >
              <TrendingUp size={18} />
              <span>Desenvolvimento</span>
            </button>
            <button
              className={`nav-tab ${activeTab === 'calendar' ? 'active' : ''}`}
              onClick={() => setActiveTab('calendar')}
            >
              <BookOpen size={18} />
              <span>Calendário e Datas</span>
            </button>
          </div>
          
          <div className="resources-content">
            {activeTab === 'tools' && (
              <div className="tools-resources">
                <div className="resources-grid">
                  {leadershipData.tools_resources.map((resource, index) => (
                    <a 
                      key={index}
                      href={resource.link}
                      className="resource-item"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="resource-icon">
                        {getIconByName(resource.icon)}
                      </div>
                      <div className="resource-details">
                        <h3 className="resource-title">{resource.title}</h3>
                        <p className="resource-description">{resource.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'development' && (
              <div className="development-opportunities">
                <div className="programs-section">
                  <h3 className="content-subtitle">Programas Internos</h3>
                  
                  <div className="programs-grid">
                    {leadershipData.development_opportunities.programs.map((program, index) => (
                      <div key={index} className="program-card">
                        <h4 className="program-title">{program.title}</h4>
                        <p className="program-description">{program.description}</p>
                        
                        <div className="program-details">
                          <div className="program-detail">
                            <strong>Duração:</strong> {program.duration}
                          </div>
                          <div className="program-detail">
                            <strong>Formato:</strong> {program.format}
                          </div>
                          <div className="program-detail">
                            <strong>Próxima turma:</strong> {program.next_class}
                          </div>
                          <div className="program-detail">
                            <strong>Inscrições até:</strong> {program.registration}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="external-resources-section">
                  <h3 className="content-subtitle">Recursos Externos</h3>
                  
                  <div className="external-resources-list">
                    {leadershipData.development_opportunities.external_resources.map((resource, index) => (
                      <div key={index} className="external-resource">
                        <h4 className="resource-title">{resource.title}</h4>
                        <p className="resource-description">{resource.description}</p>
                        <div className="access-info">
                          <strong>Como acessar:</strong> {resource.how_to_access}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'calendar' && (
              <div className="calendar-dates">
                <div className="upcoming-events">
                  <h3 className="content-subtitle">Próximos Eventos</h3>
                  
                  <div className="events-list">
                    {leadershipData.calendar.map((event, index) => (
                      <div key={index} className="event-item">
                        <div className="event-date-time">
                          <div className="event-date">{event.date}</div>
                          <div className="event-time">{event.time}</div>
                        </div>
                        <div className="event-details">
                          <h4 className="event-title">{event.title}</h4>
                          <div className="event-location">{event.location}</div>
                          <p className="event-description">{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="important-dates">
                  <h3 className="content-subtitle">Datas Importantes</h3>
                  
                  <div className="dates-list">
                    {leadershipData.important_dates.map((item, index) => (
                      <div key={index} className="date-item">
                        <div className="date-marker">
                          <Check size={16} />
                        </div>
                        <div className="date-details">
                          <div className="date-range">{item.date}</div>
                          <h4 className="date-title">{item.title}</h4>
                          <p className="date-description">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        
        <section className="leader-spotlights-section">
          <h2 className="section-title">Insights de Líderes</h2>
          
          <div className="spotlights-grid">
            {leadershipData.leader_spotlights.map((leader, index) => (
              <div key={index} className="spotlight-card">
                <div className="spotlight-header">
                  <div className="leader-avatar">
                    <img src={leader.image} alt={leader.name} />
                  </div>
                  <div className="leader-info">
                    <h3 className="leader-name">{leader.name}</h3>
                    <div className="leader-role">{leader.role}</div>
                  </div>
                </div>
                <blockquote className="leader-insight">
                  "{leader.insight}"
                </blockquote>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Leadership;
