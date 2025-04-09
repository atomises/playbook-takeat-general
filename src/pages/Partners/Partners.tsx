
import React from 'react';
import { Users, Briefcase, Award, Globe, Map, Star } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Highlight from '../../components/Highlight/Highlight';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Partners.css';
import searchData from '../../components/SearchBar/searchBar.data.json';

const Partners: React.FC = () => {
  const featuredPartners = [
    {
      name: "TechCorp Global",
      logo: "https://placehold.co/200x100/f8f9fa/495057?text=TechCorp",
      description: "Parceria estratégica para desenvolvimento de soluções integradas de alta performance.",
      industry: "Tecnologia",
      since: 2018,
      highlight: "Aumento de 45% em eficiência operacional"
    },
    {
      name: "FinancePro Solutions",
      logo: "https://placehold.co/200x100/f8f9fa/495057?text=FinancePro",
      description: "Colaboração para implementação de soluções financeiras e gestão de risco para o setor bancário.",
      industry: "Finanças",
      since: 2019,
      highlight: "Implementação em 5 dos maiores bancos do país"
    },
    {
      name: "HealthTech Innovations",
      logo: "https://placehold.co/200x100/f8f9fa/495057?text=HealthTech",
      description: "Parceria para desenvolvimento de soluções tecnológicas para o setor de saúde.",
      industry: "Saúde",
      since: 2020,
      highlight: "Redução de 30% em tempo de atendimento"
    }
  ];
  
  const partnerCategories = [
    {
      title: "Tecnologia",
      icon: <Briefcase size={24} />,
      partners: [
        { name: "TechCorp Global", location: "Global" },
        { name: "CloudSystem", location: "EUA" },
        { name: "SecureNet Solutions", location: "Brasil" },
        { name: "DataFlow Systems", location: "Alemanha" }
      ]
    },
    {
      title: "Finanças",
      icon: <Globe size={24} />,
      partners: [
        { name: "FinancePro Solutions", location: "Brasil" },
        { name: "InvestSmart", location: "Reino Unido" },
        { name: "Capital Partners", location: "Singapura" }
      ]
    },
    {
      title: "Saúde",
      icon: <Star size={24} />,
      partners: [
        { name: "HealthTech Innovations", location: "Brasil" },
        { name: "MedicalSystems", location: "Canadá" },
        { name: "LifeCare Solutions", location: "Austrália" }
      ]
    },
    {
      title: "Educação",
      icon: <Award size={24} />,
      partners: [
        { name: "EduTech Global", location: "Brasil" },
        { name: "LearningSphere", location: "França" },
        { name: "KnowledgeBase", location: "Brasil" }
      ]
    }
  ];
  
  const partnerBenefits = [
    {
      title: "Acesso a Tecnologia de Ponta",
      description: "Nossos parceiros têm acesso antecipado a novas tecnologias e soluções em desenvolvimento.",
      icon: <Briefcase size={24} />
    },
    {
      title: "Co-Desenvolvimento",
      description: "Oportunidades de desenvolver conjuntamente soluções inovadoras para desafios específicos de mercado.",
      icon: <Users size={24} />
    },
    {
      title: "Expansão de Mercado",
      description: "Acesso a novos mercados e clientes através de nossa rede global de relacionamentos.",
      icon: <Globe size={24} />
    },
    {
      title: "Programa de Certificação",
      description: "Capacitação e certificação oficial para equipes técnicas e comerciais de parceiros.",
      icon: <Award size={24} />
    }
  ];
  
  const successStories = [
    {
      title: "Transformação Digital no Setor Bancário",
      partner: "FinancePro Solutions",
      description: "Implementação de plataforma integrada que reduziu o tempo de processamento de transações em 65% e aumentou a segurança operacional.",
      results: [
        "5 grandes bancos implementaram a solução",
        "Redução de 65% no tempo de processamento",
        "Aumento de 40% na detecção de fraudes"
      ],
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=500&h=300&fit=crop"
    },
    {
      title: "Revolução no Atendimento Médico",
      partner: "HealthTech Innovations",
      description: "Desenvolvimento de sistema integrado para gestão de pacientes e telemedicina que transformou o atendimento em clínicas e hospitais.",
      results: [
        "Implementado em mais de 50 hospitais",
        "Redução de 30% no tempo de atendimento",
        "Aumento de 45% na satisfação dos pacientes"
      ],
      image: "https://images.unsplash.com/photo-1516549655669-df64a6cd0c1b?w=500&h=300&fit=crop"
    }
  ];
  
  const becomePartnerSteps = [
    {
      number: "01",
      title: "Candidatura",
      description: "Preencha o formulário de inscrição com informações sobre sua empresa e áreas de interesse."
    },
    {
      number: "02",
      title: "Avaliação",
      description: "Nossa equipe avaliará seu perfil e alinhamento com nossa estratégia de parcerias."
    },
    {
      number: "03",
      title: "Onboarding",
      description: "Processo estruturado de integração, incluindo treinamentos e certificações."
    },
    {
      number: "04",
      title: "Colaboração",
      description: "Início oficial da parceria com desenvolvimento de plano de ação conjunto."
    }
  ];
  
  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder="Buscar parceiros..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title="Parceiros"
        description="Conheça nosso ecossistema de parceiros estratégicos e como podemos colaborar."
        icon={<Users size={28} />}
      />
      
      <div className="partners-page">
        <section className="featured-partners-section">
          <h2 className="section-title">Parceiros em Destaque</h2>
          
          <div className="featured-partners-grid">
            {featuredPartners.map((partner, index) => (
              <div key={index} className="featured-partner-card">
                <div className="partner-logo">
                  <img src={partner.logo} alt={`${partner.name} logo`} />
                </div>
                <div className="partner-content">
                  <h3 className="partner-name">{partner.name}</h3>
                  <p className="partner-description">{partner.description}</p>
                  
                  <div className="partner-details">
                    <div className="partner-detail">
                      <span className="detail-label">Setor:</span>
                      <span className="detail-value">{partner.industry}</span>
                    </div>
                    <div className="partner-detail">
                      <span className="detail-label">Parceiro desde:</span>
                      <span className="detail-value">{partner.since}</span>
                    </div>
                  </div>
                  
                  <div className="partner-highlight">
                    <Award size={16} />
                    <span>{partner.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="partner-categories-section">
          <h2 className="section-title">Nosso Ecossistema de Parceiros</h2>
          
          <div className="partner-categories-grid">
            {partnerCategories.map((category, index) => (
              <div key={index} className="partner-category-card">
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                
                <ul className="partners-list">
                  {category.partners.map((partner, idx) => (
                    <li key={idx} className="partner-item">
                      <span className="partner-name">{partner.name}</span>
                      <span className="partner-location">
                        <Map size={14} />
                        {partner.location}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        <InfoBlock
          title="Programa de Parceiros"
          content="Nosso programa de parceiros é desenhado para criar um ecossistema de inovação e colaboração que beneficia todos os envolvidos. Buscamos relacionamentos de longo prazo baseados em confiança e resultados mútuos."
          variant="highlighted"
          icon={<Users size={24} />}
        />
        
        <section className="partner-benefits-section">
          <h2 className="section-title">Benefícios para Parceiros</h2>
          
          <div className="benefits-grid">
            {partnerBenefits.map((benefit, index) => (
              <Card
                key={index}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                className="benefit-card"
              />
            ))}
          </div>
        </section>
        
        <section className="success-stories-section">
          <h2 className="section-title">Histórias de Sucesso</h2>
          
          <div className="success-stories-grid">
            {successStories.map((story, index) => (
              <div key={index} className="success-story-card">
                <div className="story-image">
                  <img src={story.image} alt={story.title} />
                </div>
                <div className="story-content">
                  <h3 className="story-title">{story.title}</h3>
                  <p className="story-partner">Em parceria com {story.partner}</p>
                  <p className="story-description">{story.description}</p>
                  
                  <div className="story-results">
                    <h4>Resultados</h4>
                    <ul>
                      {story.results.map((result, idx) => (
                        <li key={idx}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="become-partner-section">
          <h2 className="section-title">Como se Tornar um Parceiro</h2>
          
          <div className="become-partner-steps">
            {becomePartnerSteps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="partner-cta">
            <h3>Interessado em se tornar um parceiro?</h3>
            <p>Entre em contato com nossa equipe para iniciar uma conversa sobre possíveis colaborações.</p>
            <button className="partner-cta-button">Fale com nossa equipe</button>
          </div>
        </section>
        
        <div className="partners-highlight-section">
          <Highlight
            text="Acreditamos que as melhores soluções surgem da colaboração. Nossos parceiros são extensões da nossa equipe, compartilhando nossa visão de transformar indústrias através da tecnologia."
            author="Carlos Mendes, Diretor de Parcerias Estratégicas"
            variant="primary"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Partners;
