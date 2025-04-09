
import React from 'react';
import { Clock, Award, Flag, Bookmark, Calendar } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Highlight from '../../components/Highlight/Highlight';
import SearchBar from '../../components/SearchBar/SearchBar';
import './History.css';
import data from './history.data.json';
import searchData from '../../components/SearchBar/searchBar.data.json';

const History: React.FC = () => {
  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder="Buscar na história..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title="Nossa História"
        description="Conheça a trajetória da nossa empresa desde sua fundação até os dias atuais."
        icon={<Clock size={28} />}
      />
      
      <div className="history-page">
        <section className="founder-section">
          <h2 className="section-title">Nossos Fundadores</h2>
          
          <div className="founders-grid">
            <div className="founder-card">
              <div className="founder-image">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face" alt="Fundadora Ana Silva" />
              </div>
              <div className="founder-info">
                <h3>Ana Silva</h3>
                <p className="founder-title">Co-fundadora e CEO</p>
                <p className="founder-bio">Formada em Administração, Ana iniciou sua carreira em consultoria estratégica antes de identificar a oportunidade de mercado que deu origem à empresa em 2010.</p>
              </div>
            </div>
            
            <div className="founder-card">
              <div className="founder-image">
                <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop&crop=face" alt="Fundador Pedro Mendes" />
              </div>
              <div className="founder-info">
                <h3>Pedro Mendes</h3>
                <p className="founder-title">Co-fundador e CTO</p>
                <p className="founder-bio">Engenheiro de Software com mais de 15 anos de experiência, Pedro liderou o desenvolvimento da plataforma tecnológica que impulsionou nosso crescimento inicial.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="timeline-section">
          <h2 className="section-title">Linha do Tempo</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <Calendar size={24} />
                <span className="timeline-year">2010</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Fundação</h3>
                <p className="timeline-description">
                  A empresa foi fundada em São Paulo por Ana Silva e Pedro Mendes, com um investimento inicial de R$ 200 mil e apenas 5 funcionários em um pequeno escritório.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">
                <Flag size={24} />
                <span className="timeline-year">2012</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Primeiro Grande Cliente</h3>
                <p className="timeline-description">
                  Fechamos contrato com nossa primeira grande conta corporativa, o que acelerou o crescimento e permitiu a expansão da equipe para 25 funcionários.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">
                <Award size={24} />
                <span className="timeline-year">2015</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Prêmio de Inovação</h3>
                <p className="timeline-description">
                  Recebemos o prêmio de empresa mais inovadora do setor, consolidando nossa posição como líderes em tecnologia e inovação no mercado brasileiro.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">
                <Bookmark size={24} />
                <span className="timeline-year">2018</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Expansão Internacional</h3>
                <p className="timeline-description">
                  Abrimos nosso primeiro escritório internacional em Lisboa, Portugal, marcando o início da nossa expansão global. Neste mesmo ano, nossa equipe ultrapassou 200 colaboradores.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">
                <Calendar size={24} />
                <span className="timeline-year">2020</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Transformação Digital</h3>
                <p className="timeline-description">
                  Implementamos um modelo de trabalho 100% remoto em resposta à pandemia, acelerando nossa transformação digital interna e criando novas soluções para nossos clientes.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">
                <Flag size={24} />
                <span className="timeline-year">2023</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Marco de Crescimento</h3>
                <p className="timeline-description">
                  Alcançamos a marca de 1000 funcionários e expandimos nossa presença para 6 países, consolidando nossa posição como uma das líderes do mercado na América Latina.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <InfoBlock
          title="Nossa Missão"
          content="Desde nossa fundação, temos sido guiados pela missão de transformar a maneira como as empresas utilizam tecnologia para impulsionar seus negócios. Acreditamos que a inovação é o caminho para criar um futuro mais conectado e eficiente."
          variant="highlighted"
          icon={<Flag size={24} />}
        />
        
        <section className="milestones-section">
          <h2 className="section-title">Marcos Importantes</h2>
          
          <div className="milestones-grid">
            <Card
              title="5 Milhões de Usuários"
              description="Em 2021, nossa plataforma alcançou a marca de 5 milhões de usuários ativos mensais, um crescimento de 150% em relação ao ano anterior."
              icon={<Award size={20} />}
              className="milestone-card"
            />
            
            <Card
              title="50 Milhões em Investimentos"
              description="Em 2019, captamos uma rodada de investimento Série B de R$ 50 milhões liderada por um dos maiores fundos de venture capital da América Latina."
              icon={<Award size={20} />}
              className="milestone-card"
            />
            
            <Card
              title="12 Países"
              description="Atualmente, nossas soluções são utilizadas por empresas em 12 países diferentes, espalhados pela América Latina, Europa e América do Norte."
              icon={<Award size={20} />}
              className="milestone-card"
            />
            
            <Card
              title="25 Prêmios"
              description="Ao longo de nossa história, fomos reconhecidos com 25 prêmios de inovação, qualidade e excelência em diferentes categorias do mercado."
              icon={<Award size={20} />}
              className="milestone-card"
            />
          </div>
        </section>
        
        <div className="history-highlight-section">
          <Highlight
            text="Nossa história é construída diariamente por cada um de nossos colaboradores. Somos uma empresa que valoriza o crescimento conjunto e acredita que nossos melhores capítulos ainda estão por vir."
            author="Ana Silva, CEO e Co-fundadora"
            variant="primary"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default History;
