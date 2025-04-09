
import React, { useState } from 'react';
import { GitBranch, ChevronUp, ChevronDown, BookOpen, Award, Star, Calendar, ExternalLink } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import Highlight from '../../components/Highlight/Highlight';
import './Paths.css';
import pathsData from './paths.data.json';

const Paths: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<string>(pathsData.tracks[0].id);
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({});
  
  const toggleRole = (level: number) => {
    setExpandedRoles(prev => ({
      ...prev,
      [level]: !prev[level]
    }));
  };
  
  const getTrackIcon = (iconName: string) => {
    switch(iconName) {
      case 'Code':
        return <GitBranch size={20} />;
      case 'Palette':
        return <BookOpen size={20} />;
      case 'Package':
        return <Award size={20} />;
      default:
        return <GitBranch size={20} />;
    }
  };
  
  const currentTrack = pathsData.tracks.find(track => track.id === activeTrack);
  
  return (
    <PageWrapper>
      <SectionHeader
        title={pathsData.title}
        description={pathsData.description}
        icon={<GitBranch size={28} />}
      />
      
      <div className="paths-page">
        <Highlight
          title="Desenvolvendo sua carreira"
          content={pathsData.overview}
          icon={<Star size={24} />}
        />
        
        <div className="track-selector">
          {pathsData.tracks.map(track => (
            <button
              key={track.id}
              className={`track-button ${activeTrack === track.id ? 'active' : ''}`}
              onClick={() => setActiveTrack(track.id)}
            >
              {getTrackIcon(track.icon)}
              <span>{track.title}</span>
            </button>
          ))}
        </div>
        
        {currentTrack && (
          <div className="selected-track">
            <div className="track-header">
              <div className="track-icon">{getTrackIcon(currentTrack.icon)}</div>
              <div className="track-info">
                <h2 className="track-title">{currentTrack.title}</h2>
                <p className="track-description">{currentTrack.description}</p>
              </div>
            </div>
            
            <div className="career-levels">
              {currentTrack.roles.map(role => {
                const isExpanded = expandedRoles[role.level] || false;
                
                return (
                  <div 
                    key={role.level} 
                    className={`career-level ${isExpanded ? 'expanded' : ''}`}
                  >
                    <div 
                      className="level-header" 
                      onClick={() => toggleRole(role.level)}
                    >
                      <div className="level-badge">Nível {role.level}</div>
                      <h3 className="level-title">{role.title}</h3>
                      <div className="level-timeframe">
                        <Calendar size={16} />
                        <span>{role.timeframe}</span>
                      </div>
                      {isExpanded ? (
                        <ChevronUp size={20} className="level-toggle-icon" />
                      ) : (
                        <ChevronDown size={20} className="level-toggle-icon" />
                      )}
                    </div>
                    
                    {isExpanded && (
                      <div className="level-details">
                        <div className="requirements-section">
                          <h4 className="detail-section-title">Requisitos</h4>
                          <ul className="requirements-list">
                            {role.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="skills-section">
                          <h4 className="detail-section-title">Competências</h4>
                          <div className="skills-list">
                            {role.skills.map((skill, index) => (
                              <span key={index} className="skill-badge">{skill}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        <section className="success-stories-section">
          <h2 className="section-title">Histórias de Sucesso</h2>
          <div className="stories-grid">
            {pathsData.successStories.map((story, index) => (
              <div key={index} className="success-story">
                <div className="story-header">
                  <div className="story-person">
                    <h3 className="person-name">{story.name}</h3>
                    <div className="story-journey">
                      {story.from} → {story.to}
                    </div>
                    <div className="story-time">
                      <Calendar size={14} />
                      <span>Em {story.time}</span>
                    </div>
                  </div>
                </div>
                <blockquote className="story-testimonial">
                  "{story.testimonial}"
                </blockquote>
              </div>
            ))}
          </div>
        </section>
        
        <section className="resources-section">
          <h2 className="section-title">Recursos para Desenvolvimento</h2>
          <div className="resources-grid">
            {pathsData.resources.map((resource, index) => (
              <Card
                key={index}
                title={resource.title}
                description={resource.description}
                className="resource-card"
              >
                <div className="resource-link">
                  <a href={resource.link} className="resource-link-button">
                    <span>Acessar recurso</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Paths;
