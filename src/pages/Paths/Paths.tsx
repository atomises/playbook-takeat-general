
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Package, GitBranch, ArrowRight, ExternalLink } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Paths.css';
import data from './paths.data.json';
import searchData from '../../components/SearchBar/searchBar.data.json';

const Paths: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<{trackId: string, level: number} | null>(null);
  
  const getIconByName = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={24} />;
      case 'Palette':
        return <Palette size={24} />;
      case 'Package':
        return <Package size={24} />;
      default:
        return <GitBranch size={24} />;
    }
  };
  
  const handleTrackClick = (trackId: string) => {
    setSelectedTrack(trackId === selectedTrack ? null : trackId);
    setSelectedRole(null);
  };
  
  const handleRoleClick = (trackId: string, level: number) => {
    if (selectedRole && selectedRole.trackId === trackId && selectedRole.level === level) {
      setSelectedRole(null);
    } else {
      setSelectedRole({ trackId, level });
    }
  };
  
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
          placeholder="Buscar trilhas de carreira..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title={data.title}
        description={data.description}
        icon={<GitBranch size={28} />}
      />
      
      <div className="paths-page">
        <div className="paths-overview">
          <p>{data.overview}</p>
        </div>
        
        <motion.div 
          className="paths-tracks"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {data.tracks.map((track) => (
            <motion.div 
              key={track.id} 
              className="track-card"
              variants={itemVariants}
            >
              <div 
                className="track-header"
                onClick={() => handleTrackClick(track.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="track-icon">
                  {getIconByName(track.icon)}
                </div>
                <h3 className="track-title">{track.title}</h3>
              </div>
              
              <div className="track-description">
                <p>{track.description}</p>
              </div>
              
              <div className="track-roles">
                <h4 className="track-roles-title">Níveis de Carreira</h4>
                <ul className="role-list">
                  {track.roles.map((role) => (
                    <li 
                      key={role.level} 
                      className="role-item"
                      onClick={() => handleRoleClick(track.id, role.level)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="role-level">{role.level}</div>
                      <div className="role-info">
                        <h5 className="role-title">{role.title}</h5>
                        <span className="role-timeframe">Tempo estimado: {role.timeframe}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {selectedRole && selectedRole.trackId === track.id && (
                <motion.div 
                  className="role-details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {track.roles
                    .filter(role => role.level === selectedRole.level)
                    .map(role => (
                      <div key={`detail-${role.level}`}>
                        <h4 className="role-details-title">{role.title}</h4>
                        
                        <div className="role-requirements">
                          <h5 className="role-requirements-title">Requisitos</h5>
                          <ul className="requirements-list">
                            {role.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="role-requirements">
                          <h5 className="role-requirements-title">Competências</h5>
                          <div className="role-skills">
                            {role.skills.map((skill, index) => (
                              <span key={index} className="role-skill">{skill}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        <div className="paths-success-stories">
          <h2 className="success-stories-title">Histórias de Sucesso</h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {data.successStories.map((story, index) => (
              <motion.div 
                key={index} 
                className="success-story-card"
                variants={itemVariants}
              >
                <div className="success-story-header">
                  <div className="success-story-progress">
                    <span className="story-role">{story.from}</span>
                    <span className="story-arrow"><ArrowRight size={18} /></span>
                    <span className="story-role">{story.to}</span>
                    <span className="story-time">em {story.time}</span>
                  </div>
                  <h4 className="story-name">{story.name}</h4>
                </div>
                <p className="success-story-testimonial">"{story.testimonial}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="paths-resources">
          <h2 className="resources-title">Recursos para Desenvolvimento</h2>
          
          <motion.div 
            className="resources-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {data.resources.map((resource, index) => (
              <motion.div 
                key={index} 
                className="resource-card"
                variants={itemVariants}
              >
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                <a href={resource.link} className="resource-link">
                  Acessar recurso
                  <span className="resource-link-icon">
                    <ExternalLink size={14} />
                  </span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Paths;
