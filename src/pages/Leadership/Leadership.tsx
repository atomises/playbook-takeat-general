import React, { useState } from 'react';
import { Award, Users, Briefcase, Target, TrendingUp, BookOpen, FileText, Check } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Accordion, { AccordionItem } from '../../components/Accordion/Accordion';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Leadership.css';
import searchData from '../../components/SearchBar/searchBar.data.json';

const Leadership: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tools');
  
  const leadershipAreas = [
    {
      id: 'tools',
      title: 'Ferramentas de Gestão',
      icon: <Briefcase size={20} />
    },
    {
      id: 'development',
      title: 'Desenvolvimento de Times',
      icon: <Users size={20} />
    },
    {
      id: 'performance',
      title: 'Gestão de Desempenho',
      icon: <TrendingUp size={20} />
    },
    {
      id: 'resources',
      title: 'Recursos e Treinamentos',
      icon: <BookOpen size={20} />
    }
  ];
  
  const managementTools = [
    {
      title: "1:1 Framework",
      description: "Metodologia estruturada para reuniões individuais eficazes com sua equipe, focando em feedback, desenvolvimento e alinhamento de expectativas.",
      link: "#",
      icon: <Users size={24} />
    },
    {
      title: "OKR Builder",
      description: "Ferramenta para definição, cascateamento e acompanhamento de Objetivos e Resultados-Chave (OKRs) do seu time.",
      link: "#",
      icon: <Target size={24} />
    },
    {
      title: "Matriz de Competências",
      description: "Template para mapeamento de habilidades da equipe, identificação de gaps e planejamento de desenvolvimento.",
      link: "#",
      icon: <TrendingUp size={24} />
    },
    {
      title: "Feedback Framework",
      description: "Estrutura para dar feedbacks construtivos e eficazes, baseada na metodologia SCI (Situação, Comportamento, Impacto).",
      link: "#",
      icon: <FileText size={24} />
    }
  ];
  
  const teamDevelopment = [
    {
      title: "Plano de Desenvolvimento Individual (PDI)",
      description: "Template estruturado para criar planos de desenvolvimento personalizados para cada membro da equipe.",
      link: "#"
    },
    {
      title: "Mapa de Carreira",
      description: "Guia com trilhas de carreira detalhadas para auxiliar no direcionamento profissional dos colaboradores.",
      link: "#"
    },
    {
      title: "Programa de Mentoria",
      description: "Framework para implementar um programa de mentoria dentro da sua equipe ou departamento.",
      link: "#"
    },
    {
      title: "Desenvolvimento de Competências",
      description: "Catálogo de competências técnicas e comportamentais com sugestões de ações de desenvolvimento.",
      link: "#"
    }
  ];
  
  const performanceMetrics = [
    {
      title: "Dashboard de Desempenho",
      description: "Modelo de dashboard para acompanhamento de KPIs individuais e da equipe, com visualizações personalizáveis.",
      link: "#"
    },
    {
      title: "Avaliação 360°",
      description: "Ferramenta para coleta e análise de feedback multidirecional, incluindo pares, líderes e liderados.",
      link: "#"
    },
    {
      title: "Check-in Trimestral",
      description: "Estrutura para reuniões trimestrais de avaliação de progresso de metas e ajustes de rota.",
      link: "#"
    },
    {
      title: "Recognition Framework",
      description: "Sistema estruturado para reconhecimento e celebração de conquistas da equipe e individuais.",
      link: "#"
    }
  ];
  
  const leadershipResources = [
    {
      title: "Biblioteca de Liderança",
      description: "Coleção curada de livros, artigos, podcasts e vídeos sobre liderança, gestão de pessoas e desenvolvimento de equipes.",
      link: "#"
    },
    {
      title: "Comunidade de Líderes",
      description: "Fórum interno para troca de experiências, discussões e apoio entre líderes da empresa.",
      link: "#"
    },
    {
      title: "Catálogo de Treinamentos",
      description: "Programação completa de treinamentos internos e externos disponíveis para desenvolvimento de líderes.",
      link: "#"
    },
    {
      title: "Toolkit de Facilitação",
      description: "Conjunto de ferramentas e técnicas para facilitar workshops, reuniões e sessões de planejamento com sua equipe.",
      link: "#"
    }
  ];
  
  const faqItems = [
    {
      question: "Como solicitar treinamentos específicos para minha equipe?",
      answer: "Você pode solicitar treinamentos específicos através do Portal de Líderes, na seção 'Solicitação de Treinamentos'. Preencha o formulário detalhando a necessidade, número de participantes e objetivos de aprendizagem. O time de L&D analisará a solicitação e retornará em até 5 dias úteis."
    },
    {
      question: "Qual a frequência recomendada para reuniões 1:1?",
      answer: "Recomendamos reuniões 1:1 quinzenais com cada membro direto da sua equipe, com duração de 30 a 45 minutos. Para equipes grandes (mais de 8 pessoas), considere um formato mensal com check-ins rápidos semanais de 15 minutos."
    },
    {
      question: "Como lidar com um colaborador com baixo desempenho?",
      answer: "Recomendamos seguir o protocolo PIP (Performance Improvement Plan), disponível na seção de Ferramentas. O processo inclui: 1) Conversa clara sobre expectativas não atendidas; 2) Documentação formal dos pontos de melhoria; 3) Plano de ação com metas e prazos específicos; 4) Acompanhamento regular com feedbacks frequentes."
    },
    {
      question: "Como acessar os dados de clima da minha equipe?",
      answer: "Os resultados da pesquisa de clima são disponibilizados trimestralmente no Dashboard de Liderança. Você terá acesso apenas aos dados consolidados da sua equipe, preservando o anonimato individual. Para orientações sobre como interpretar e agir sobre os resultados, agende uma sessão com o time de People Analytics."
    }
  ];
  
  const leadershipEvents = [
    {
      title: "Leadership Summit 2023",
      date: "15/08/2023",
      description: "Encontro anual de líderes com workshops, palestras e atividades de networking.",
      location: "Hotel Grand Hyatt"
    },
    {
      title: "Workshop de Feedback Efetivo",
      date: "25/06/2023",
      description: "Treinamento prático sobre como dar e receber feedbacks de forma construtiva.",
      location: "Online"
    },
    {
      title: "Círculo de Líderes",
      date: "10/07/2023",
      description: "Sessão mensal de troca de experiências entre gestores de diferentes áreas.",
      location: "Sala Colaboração - 5º andar"
    }
  ];
  
  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder="Buscar recursos para líderes..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title="Portal de Líderes"
        description="Recursos exclusivos para líderes gerenciarem suas equipes, acompanharem o desempenho e desenvolverem seus liderados."
        icon={<Award size={28} />}
      />
      
      <div className="leadership-page">
        <section className="welcome-section">
          <div className="welcome-content">
            <h2>Bem-vindo(a) ao Portal de Líderes</h2>
            <p>Este é seu hub centralizado de recursos, ferramentas e orientações para apoiar sua jornada como líder em nossa organização. Aqui você encontrará frameworks, templates e melhores práticas para desenvolver sua equipe e alcançar resultados excepcionais.</p>
          </div>
          
          <div className="welcome-stats">
            <div className="stat-card">
              <div className="stat-value">12</div>
              <div className="stat-label">Ferramentas exclusivas</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">28</div>
              <div className="stat-label">Treinamentos disponíveis</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">150+</div>
              <div className="stat-label">Líderes na comunidade</div>
            </div>
          </div>
        </section>
        
        <InfoBlock
          title="Leadership Principles"
          content="Nossa cultura de liderança é baseada em cinco princípios fundamentais: Inspirar pelo exemplo, Desenvolver talentos, Buscar resultados sustentáveis, Promover um ambiente de confiança e Inovar constantemente."
          variant="highlighted"
          icon={<Award size={24} />}
        />
        
        <section className="resources-section">
          <div className="tabs-header">
            {leadershipAreas.map((area) => (
              <button
                key={area.id}
                className={`tab-button ${activeTab === area.id ? 'active' : ''}`}
                onClick={() => setActiveTab(area.id)}
              >
                <span className="tab-icon">{area.icon}</span>
                <span className="tab-title">{area.title}</span>
              </button>
            ))}
          </div>
          
          <div className="tabs-content">
            {activeTab === 'tools' && (
              <div className="tab-content">
                <p className="tab-description">
                  Ferramentas práticas para apoiar sua gestão diária e facilitar processos de liderança.
                </p>
                
                <div className="resources-grid">
                  {managementTools.map((tool, index) => (
                    <Card
                      key={index}
                      title={tool.title}
                      description={tool.description}
                      icon={tool.icon}
                      className="resource-card"
                    >
                      <a href={tool.link} className="resource-link">
                        Acessar ferramenta
                      </a>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'development' && (
              <div className="tab-content">
                <p className="tab-description">
                  Recursos para apoiar o desenvolvimento da sua equipe, identificar potenciais e acelerar o crescimento dos colaboradores.
                </p>
                
                <div className="resources-grid">
                  {teamDevelopment.map((resource, index) => (
                    <div key={index} className="resource-item">
                      <h3 className="resource-title">{resource.title}</h3>
                      <p className="resource-description">{resource.description}</p>
                      <a href={resource.link} className="resource-link">
                        Acessar recurso
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'performance' && (
              <div className="tab-content">
                <p className="tab-description">
                  Ferramentas para avaliar, monitorar e impulsionar o desempenho individual e coletivo da sua equipe.
                </p>
                
                <div className="resources-grid">
                  {performanceMetrics.map((metric, index) => (
                    <div key={index} className="resource-item">
                      <h3 className="resource-title">{metric.title}</h3>
                      <p className="resource-description">{metric.description}</p>
                      <a href={metric.link} className="resource-link">
                        Acessar ferramenta
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'resources' && (
              <div className="tab-content">
                <p className="tab-description">
                  Conteúdos e materiais para seu desenvolvimento contínuo como líder e para compartilhar com sua equipe.
                </p>
                
                <div className="resources-grid">
                  {leadershipResources.map((resource, index) => (
                    <div key={index} className="resource-item">
                      <h3 className="resource-title">{resource.title}</h3>
                      <p className="resource-description">{resource.description}</p>
                      <a href={resource.link} className="resource-link">
                        Acessar recurso
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
        
        <section className="upcoming-events">
          <h2 className="section-title">Próximos Eventos para Líderes</h2>
          
          <div className="events-list">
            {leadershipEvents.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-date">
                  <span>{event.date}</span>
                </div>
                <div className="event-details">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  <p className="event-location">
                    <Award size={16} />
                    <span>{event.location}</span>
                  </p>
                </div>
                <button className="event-button">Inscrever-se</button>
              </div>
            ))}
          </div>
        </section>
        
        <section className="leadership-best-practices">
          <h2 className="section-title">Melhores Práticas de Liderança</h2>
          
          <div className="practices-list">
            <div className="practice-item">
              <div className="practice-icon">
                <Check size={20} />
              </div>
              <div className="practice-content">
                <h3>Reuniões 1:1 Efetivas</h3>
                <p>Mantenha encontros individuais regulares com cada membro da equipe. Reserve tempo para desenvolvimento, feedback e alinhamento de expectativas, não apenas para status de projetos.</p>
              </div>
            </div>
            
            <div className="practice-item">
              <div className="practice-icon">
                <Check size={20} />
              </div>
              <div className="practice-content">
                <h3>Feedback Contínuo</h3>
                <p>Não espere ciclos formais de avaliação para dar feedbacks. Estabeleça uma cultura de feedback contínuo, específico e baseado em comportamentos observáveis.</p>
              </div>
            </div>
            
            <div className="practice-item">
              <div className="practice-icon">
                <Check size={20} />
              </div>
              <div className="practice-content">
                <h3>Autonomia com Clareza</h3>
                <p>Defina expectativas claras e resultados esperados, mas dê autonomia para que sua equipe encontre os melhores caminhos. Delegue responsabilidades, não apenas tarefas.</p>
              </div>
            </div>
            
            <div className="practice-item">
              <div className="practice-icon">
                <Check size={20} />
              </div>
              <div className="practice-content">
                <h3>Desenvolvimento Contínuo</h3>
                <p>Incentive sua equipe a dedicar tempo para aprendizado e desenvolvimento. Crie um ambiente onde é seguro experimentar e aprender com erros.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="faq-section">
          <h2 className="section-title">Perguntas Frequentes</h2>
          
          <Accordion>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} title={item.question}>
                <p>{item.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="support-contact">
            <p>Não encontrou o que procura? Entre em contato com o time de Desenvolvimento de Lideranças:</p>
            <a href="mailto:lideranca@empresa.com.br" className="contact-email">
              lideranca@empresa.com.br
            </a>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Leadership;
