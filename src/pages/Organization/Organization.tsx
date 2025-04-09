
import React from 'react';
import { motion } from 'framer-motion';
import { Users, ChevronRight, Mail, Briefcase } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Organization.css';
import data from './organization.data.json';
import searchData from '../../components/SearchBar/searchBar.data.json';

const Organization: React.FC = () => {
  const [expandedDepartment, setExpandedDepartment] = React.useState<string | null>(null);

  const handleDepartmentClick = (deptId: string) => {
    setExpandedDepartment(expandedDepartment === deptId ? null : deptId);
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
          placeholder="Buscar no organograma..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title={data.title}
        description={data.description}
        icon={<Users size={28} />}
      />
      
      <div className="organization-page">
        <div className="org-leadership">
          <h2 className="section-title">Liderança Executiva</h2>
          
          <div className="ceo-card">
            <div className="ceo-photo">
              {data.leadership.ceo.photo ? (
                <img src={data.leadership.ceo.photo} alt={data.leadership.ceo.name} />
              ) : (
                <div className="avatar-placeholder">
                  {data.leadership.ceo.name.charAt(0)}
                </div>
              )}
            </div>
            <div className="ceo-info">
              <h3 className="ceo-name">{data.leadership.ceo.name}</h3>
              <p className="ceo-title">{data.leadership.ceo.title}</p>
              <p className="ceo-bio">{data.leadership.ceo.bio}</p>
              <div className="ceo-contact">
                <Mail size={16} />
                <a href={`mailto:${data.leadership.ceo.email}`}>{data.leadership.ceo.email}</a>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="executive-team"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {data.leadership.executives.map((executive, index) => (
              <motion.div 
                key={index} 
                className="executive-card"
                variants={itemVariants}
              >
                <div className="executive-photo">
                  {executive.photo ? (
                    <img src={executive.photo} alt={executive.name} />
                  ) : (
                    <div className="avatar-placeholder">
                      {executive.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="executive-info">
                  <h3 className="executive-name">{executive.name}</h3>
                  <p className="executive-title">{executive.title}</p>
                  <p className="executive-bio">{executive.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="org-departments">
          <h2 className="section-title">Estrutura Organizacional</h2>
          
          <div className="departments-list">
            {data.departments.map((dept) => (
              <div key={dept.id} className="department-section">
                <div 
                  className="department-header"
                  onClick={() => handleDepartmentClick(dept.id)}
                >
                  <div className="department-icon">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="department-name">{dept.name}</h3>
                  <div className="department-meta">
                    <span className="department-size">{dept.teamSize} membros</span>
                    <ChevronRight 
                      size={20} 
                      className={`chevron ${expandedDepartment === dept.id ? 'expanded' : ''}`} 
                    />
                  </div>
                </div>
                
                {expandedDepartment === dept.id && (
                  <motion.div 
                    className="department-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="department-description">
                      <p>{dept.description}</p>
                      <div className="department-leader">
                        <strong>Líder:</strong> {dept.leader}
                      </div>
                    </div>
                    
                    <div className="teams-grid">
                      {dept.teams.map((team, index) => (
                        <Card
                          key={index}
                          title={team.name}
                          description={team.description}
                          className="team-card"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="org-metrics">
          <h2 className="section-title">Métricas Organizacionais</h2>
          
          <div className="metrics-grid">
            {data.metrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
                {metric.trend && (
                  <div className={`metric-trend ${metric.trend}`}>
                    {metric.trend === 'up' ? '↑' : '↓'} {metric.trendValue}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="org-locations">
          <h2 className="section-title">Nossas Localizações</h2>
          
          <div className="locations-grid">
            {data.locations.map((location, index) => (
              <div key={index} className="location-card">
                <div className="location-flag">{location.country}</div>
                <h3 className="location-city">{location.city}</h3>
                <p className="location-address">{location.address}</p>
                <div className="location-teams">
                  <strong>Equipes:</strong> {location.teams.join(', ')}
                </div>
                <div className="location-size">
                  <strong>Tamanho:</strong> {location.employeeCount} colaboradores
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Organization;
