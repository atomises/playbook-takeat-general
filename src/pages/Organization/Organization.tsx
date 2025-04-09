
import React from 'react';
import { Users, Building, BarChart, MapPin, TrendingUp } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Organization.css';
import data from './organization.data.json';
import searchData from '../../components/SearchBar/searchBar.data.json';

const Organization: React.FC = () => {
  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder="Buscar na organização..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title={data.title}
        description={data.description}
        icon={<Users size={28} />}
      />
      
      <div className="organization-page">
        <section className="leadership-section">
          <h2 className="section-title">Liderança Executiva</h2>
          
          <div className="ceo-profile">
            <div className="ceo-image">
              <Users size={64} />
            </div>
            <div className="ceo-info">
              <h3>{data.leadership.ceo.name}</h3>
              <p className="ceo-title">{data.leadership.ceo.title}</p>
              <p className="ceo-bio">{data.leadership.ceo.bio}</p>
              <p className="ceo-contact">Contato: {data.leadership.ceo.email}</p>
            </div>
          </div>
          
          <div className="executives-grid">
            {data.leadership.executives.map((executive, index) => (
              <div key={index} className="executive-card">
                <div className="executive-icon">
                  <Users size={36} />
                </div>
                <div className="executive-info">
                  <h4>{executive.name}</h4>
                  <p className="executive-title">{executive.title}</p>
                  <p className="executive-bio">{executive.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="departments-section">
          <h2 className="section-title">Departamentos</h2>
          
          <div className="departments-list">
            {data.departments.map((department) => (
              <div key={department.id} className="department-card">
                <div className="department-header">
                  <h3 className="department-name">
                    <Building size={20} />
                    {department.name}
                  </h3>
                  <span className="department-size">{department.teamSize} pessoas</span>
                </div>
                <p className="department-leader">Liderança: {department.leader}</p>
                <p className="department-description">{department.description}</p>
                
                <div className="teams-list">
                  <h4 className="teams-title">Times</h4>
                  <ul>
                    {department.teams.map((team, index) => (
                      <li key={index} className="team-item">
                        <h5 className="team-name">{team.name}</h5>
                        <p className="team-description">{team.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="metrics-section">
          <h2 className="section-title">Métricas Organizacionais</h2>
          
          <div className="metrics-cards">
            {data.metrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-value">
                  {metric.value}
                  {metric.trend && (
                    <span className={`metric-trend ${metric.trend}`}>
                      <TrendingUp size={16} />
                    </span>
                  )}
                </div>
                <div className="metric-label">{metric.label}</div>
                {metric.trendValue && (
                  <div className="metric-trend-value">{metric.trendValue}</div>
                )}
              </div>
            ))}
          </div>
        </section>
        
        <section className="locations-section">
          <h2 className="section-title">Escritórios Globais</h2>
          <div className="locations-grid">
            {data.locations.map((location, index) => (
              <Card
                key={index}
                title={`${location.city}, ${location.country}`}
                description={`${location.address}`}
                className="location-card"
                icon={<MapPin size={20} />}
              >
                <div className="location-details">
                  <p className="location-employee-count">
                    <strong>{location.employeeCount}</strong> colaboradores
                  </p>
                  <div className="location-teams">
                    <p className="location-teams-title">Times:</p>
                    <div className="location-teams-list">
                      {location.teams.map((team, idx) => (
                        <span key={idx} className="location-team-tag">{team}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
        
        <InfoBlock
          title="Nossos Valores Organizacionais"
          content="Nossa estrutura organizacional foi desenhada para promover colaboração, agilidade e inovação. Acreditamos que times multidisciplinares e autônomos, apoiados por uma liderança acessível, são fundamentais para entregar o melhor valor possível aos nossos clientes."
          variant="highlighted"
          icon={<BarChart size={24} />}
        />
      </div>
    </PageWrapper>
  );
};

export default Organization;
