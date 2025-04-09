
import React from 'react';
import { Target, TrendingUp, Award, BarChart, Compass, Flag } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Highlight from '../../components/Highlight/Highlight';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Strategy.css';
import searchData from '../../components/SearchBar/searchBar.data.json';

const Strategy: React.FC = () => {
  const strategicPillars = [
    {
      title: "Crescimento Sustentável",
      description: "Expandir nossa presença de mercado de forma sustentável, priorizando rentabilidade e impacto positivo.",
      icon: <TrendingUp size={24} />,
      goals: [
        "Aumentar receita recorrente em 40% até 2025",
        "Expandir para 3 novos mercados internacionais",
        "Reduzir o CAC em 20% através de otimização de canais"
      ]
    },
    {
      title: "Excelência Operacional",
      description: "Otimizar processos internos para garantir escalabilidade, qualidade e eficiência em todas as operações.",
      icon: <Compass size={24} />,
      goals: [
        "Implementar metodologia Lean em 100% dos departamentos",
        "Reduzir tempo de entrega em 30%",
        "Automatizar 60% dos processos operacionais"
      ]
    },
    {
      title: "Inovação Contínua",
      description: "Investir em novas tecnologias e metodologias para desenvolver soluções disruptivas que atendam necessidades emergentes.",
      icon: <Award size={24} />,
      goals: [
        "Lançar 5 novos produtos/features inovadores por ano",
        "Estabelecer centro de inovação e pesquisa",
        "Desenvolver programa de inovação aberta com startups"
      ]
    },
    {
      title: "Pessoas & Cultura",
      description: "Desenvolver um ambiente de trabalho inspirador que atraia, desenvolva e retenha os melhores talentos do mercado.",
      icon: <Flag size={24} />,
      goals: [
        "Atingir 85% de engajamento em pesquisas de clima",
        "Reduzir turnover para menos de 10% ao ano",
        "Implementar programa de desenvolvimento de lideranças"
      ]
    }
  ];
  
  const strategicMetrics = [
    {
      name: "Crescimento de Receita",
      current: "18%",
      target: "25%",
      progress: 72,
      trend: "up"
    },
    {
      name: "NPS (Net Promoter Score)",
      current: "68",
      target: "75",
      progress: 90,
      trend: "up"
    },
    {
      name: "Engajamento de Colaboradores",
      current: "78%",
      target: "85%",
      progress: 92,
      trend: "up"
    },
    {
      name: "Tempo de Lançamento",
      current: "45 dias",
      target: "30 dias",
      progress: 67,
      trend: "down"
    }
  ];
  
  const strategicInitiatives = [
    {
      title: "Expansão Internacional",
      description: "Estabelecer presença operacional em novos mercados da América Latina e Europa, com foco inicial em México e Portugal.",
      status: "Em andamento",
      progress: 65,
      leader: "Carlos Mendes",
      deadline: "Q4 2023"
    },
    {
      title: "Transformação Digital",
      description: "Implementar ferramentas e processos de automação em todas as áreas da empresa para aumentar eficiência operacional.",
      status: "Em andamento",
      progress: 40,
      leader: "Mariana Santos",
      deadline: "Q2 2024"
    },
    {
      title: "Academia de Liderança",
      description: "Desenvolver programa estruturado de capacitação para líderes atuais e futuros, com foco em gestão de equipes e resultados.",
      status: "Planejamento",
      progress: 15,
      leader: "Ana Costa",
      deadline: "Q1 2024"
    },
    {
      title: "Plataforma de Inovação Aberta",
      description: "Criar ecossistema de inovação conectando nossa empresa a startups, universidades e desenvolvedores independentes.",
      status: "Não iniciado",
      progress: 0,
      leader: "Pedro Lima",
      deadline: "Q3 2024"
    }
  ];
  
  const industryTrends = [
    {
      title: "Inteligência Artificial Aplicada",
      description: "Integração de IA em produtos e processos para automação, personalização e insights preditivos.",
      impact: "Alto",
      timeframe: "Curto prazo"
    },
    {
      title: "Trabalho Distribuído",
      description: "Consolidação de modelos híbridos e equipes globalmente distribuídas como padrão de mercado.",
      impact: "Médio",
      timeframe: "Imediato"
    },
    {
      title: "Sustentabilidade Como Vantagem",
      description: "Crescimento da demanda por produtos e serviços alinhados a práticas ESG (Ambiental, Social e Governança).",
      impact: "Médio",
      timeframe: "Médio prazo"
    },
    {
      title: "Experiências Imersivas",
      description: "Adoção de tecnologias como AR/VR para criar experiências de cliente mais imersivas e memoráveis.",
      impact: "Alto",
      timeframe: "Médio/Longo prazo"
    }
  ];
  
  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder="Buscar na estratégia..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title="Estratégia 2025"
        description="Conheça os objetivos estratégicos da empresa para os próximos anos."
        icon={<Target size={28} />}
      />
      
      <div className="strategy-page">
        <section className="vision-mission-section">
          <div className="vision-mission-container">
            <div className="vision-box">
              <h2>Nossa Visão</h2>
              <p>"Ser reconhecida como a empresa mais inovadora do setor até 2025, criando soluções que transformam positivamente a maneira como as pessoas trabalham."</p>
            </div>
            
            <div className="mission-box">
              <h2>Nossa Missão</h2>
              <p>"Desenvolver tecnologias que aumentam a produtividade e o bem-estar de nossos clientes, através de soluções intuitivas, escaláveis e sustentáveis."</p>
            </div>
          </div>
        </section>
        
        <section className="strategic-metrics-section">
          <h2 className="section-title">Indicadores Estratégicos</h2>
          
          <div className="metrics-grid">
            {strategicMetrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-header">
                  <h3 className="metric-name">{metric.name}</h3>
                  <div className={`metric-trend ${metric.trend}`}>
                    <TrendingUp size={16} />
                  </div>
                </div>
                
                <div className="metric-values">
                  <div className="metric-current">
                    <span className="metric-value">{metric.current}</span>
                    <span className="metric-label">Atual</span>
                  </div>
                  <div className="metric-target">
                    <span className="metric-value">{metric.target}</span>
                    <span className="metric-label">Meta 2025</span>
                  </div>
                </div>
                
                <div className="metric-progress-container">
                  <div className="metric-progress-bar">
                    <div 
                      className="metric-progress-fill" 
                      style={{ width: `${metric.progress}%` }}
                    ></div>
                  </div>
                  <span className="metric-progress-text">{metric.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="pillars-section">
          <h2 className="section-title">Pilares Estratégicos</h2>
          
          <div className="pillars-grid">
            {strategicPillars.map((pillar, index) => (
              <div key={index} className="pillar-card">
                <div className="pillar-icon">
                  {pillar.icon}
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-description">{pillar.description}</p>
                
                <div className="pillar-goals">
                  <h4>Objetivos 2025</h4>
                  <ul>
                    {pillar.goals.map((goal, idx) => (
                      <li key={idx}>{goal}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <InfoBlock
          title="Nossa Proposta de Valor"
          content="Oferecemos soluções que combinam tecnologia de ponta, experiência do usuário excepcional e escalabilidade, permitindo que nossos clientes se concentrem em seu core business enquanto nós cuidamos da infraestrutura e processos."
          variant="highlighted"
          icon={<Award size={24} />}
        />
        
        <section className="initiatives-section">
          <h2 className="section-title">Iniciativas Estratégicas</h2>
          
          <div className="initiatives-list">
            {strategicInitiatives.map((initiative, index) => (
              <div key={index} className="initiative-card">
                <div className="initiative-header">
                  <h3 className="initiative-title">{initiative.title}</h3>
                  <span className={`initiative-status ${initiative.status.toLowerCase().replace(' ', '-')}`}>
                    {initiative.status}
                  </span>
                </div>
                
                <p className="initiative-description">{initiative.description}</p>
                
                <div className="initiative-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${initiative.progress}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">{initiative.progress}% concluído</span>
                </div>
                
                <div className="initiative-details">
                  <div className="initiative-detail">
                    <span className="detail-label">Responsável:</span>
                    <span className="detail-value">{initiative.leader}</span>
                  </div>
                  <div className="initiative-detail">
                    <span className="detail-label">Prazo:</span>
                    <span className="detail-value">{initiative.deadline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="industry-trends-section">
          <h2 className="section-title">Tendências de Mercado</h2>
          <p className="section-description">
            Tendências relevantes que estamos monitorando e que influenciam nossa estratégia:
          </p>
          
          <div className="trends-grid">
            {industryTrends.map((trend, index) => (
              <Card
                key={index}
                title={trend.title}
                description={trend.description}
                className="trend-card"
              >
                <div className="trend-details">
                  <div className="trend-detail">
                    <span className="detail-label">Impacto:</span>
                    <span className={`trend-impact ${trend.impact.toLowerCase()}`}>{trend.impact}</span>
                  </div>
                  <div className="trend-detail">
                    <span className="detail-label">Prazo:</span>
                    <span className="trend-timeframe">{trend.timeframe}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
        
        <div className="strategy-highlight-section">
          <Highlight
            text="Nossa estratégia 2025 é ambiciosa mas alcançável. Ela combina crescimento acelerado com sustentabilidade e bem-estar, colocando nossos clientes e colaboradores no centro de todas as decisões."
            author="Mariana Santos, CEO"
            variant="primary"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Strategy;
