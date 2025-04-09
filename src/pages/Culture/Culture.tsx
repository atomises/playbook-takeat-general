
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, Users, Lightbulb, Award, Shield } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Highlight from '../../components/Highlight/Highlight';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Culture.css';
import data from './culture.data.json';
import searchData from '../../components/SearchBar/searchBar.data.json';

const Culture: React.FC = () => {
  const getIconByName = (iconName: string) => {
    switch (iconName) {
      case 'Eye':
        return <Eye size={24} />;
      case 'Users':
        return <Users size={24} />;
      case 'Lightbulb':
        return <Lightbulb size={24} />;
      case 'Award':
        return <Award size={24} />;
      case 'Heart':
        return <Heart size={24} />;
      case 'Shield':
        return <Shield size={24} />;
      default:
        return <Heart size={24} />;
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
          placeholder="Buscar em cultura..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title="Nossa Cultura"
        description="Os valores e princípios que definem quem somos e como trabalhamos juntos para alcançar nossos objetivos."
        icon={<Heart size={28} />}
      />
      
      <div className="culture-page">
        <div className="culture-intro">
          <h2 className="section-title">O Que Nos Define</h2>
          <p className="intro-text">
            Nossa cultura é o coração da nossa empresa. É o que nos une, nos motiva e nos diferencia. 
            Construímos um ambiente onde todos podem prosperar, inovar e fazer o melhor trabalho de suas vidas.
          </p>
          
          <motion.div 
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {data.valores.map((valor) => (
              <motion.div 
                key={valor.id}
                className="value-card"
                variants={itemVariants}
              >
                <div className="value-icon">
                  {getIconByName(valor.icon)}
                </div>
                <h3 className="value-title">{valor.title}</h3>
                <p className="value-description">{valor.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <section className="principles-section">
          <h2 className="section-title">Princípios Fundamentais</h2>
          <div className="principles-list">
            {data.principios.map((principio, index) => (
              <Card
                key={index}
                title={principio.title}
                description={principio.description}
                className="principle-card"
              />
            ))}
          </div>
        </section>
        
        <section className="work-environment-section">
          <h2 className="section-title">Nosso Ambiente de Trabalho</h2>
          
          <div className="environment-features">
            <div className="environment-feature">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fHx8MTYxNjQzMTAzMg&ixlib=rb-4.0.3&q=80&w=500" alt="Espaço colaborativo" />
              </div>
              <div className="feature-content">
                <h3>Espaços Colaborativos</h3>
                <p>
                  Projetamos nossos escritórios para fomentar a colaboração, 
                  criatividade e bem-estar. Espaços abertos se misturam com 
                  áreas de foco e relaxamento.
                </p>
              </div>
            </div>
            
            <div className="environment-feature reverse">
              <div className="feature-content">
                <h3>Flexibilidade e Equilíbrio</h3>
                <p>
                  Acreditamos no trabalho flexível que permite equilíbrio entre 
                  vida pessoal e profissional. Oferecemos horários flexíveis e 
                  trabalho remoto para que cada pessoa encontre seu melhor ritmo.
                </p>
              </div>
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d29yayUyMGxpZmUlMjBiYWxhbmNlfGVufDB8fHx8MTYxNjQzMTEyMw&ixlib=rb-4.0.3&q=80&w=500" alt="Equilíbrio trabalho-vida" />
              </div>
            </div>
          </div>
          
          <InfoBlock
            title="Desenvolvimento Contínuo"
            content="Investimos no crescimento de nossos colaboradores com programas de aprendizado personalizado, mentoria, workshops e acesso a plataformas educacionais. Acreditamos que quando cada pessoa cresce, toda a empresa evolui."
            variant="highlighted"
            icon={<Award size={24} />}
          />
        </section>
        
        <section className="diversity-section">
          <h2 className="section-title">Diversidade e Inclusão</h2>
          <div className="diversity-content">
            <div className="diversity-text">
              <p>
                Acreditamos que equipes diversas criam melhores produtos e soluções. 
                Estamos comprometidos em criar um ambiente onde todos se sintam bem-vindos, 
                respeitados e valorizados, independentemente de gênero, raça, orientação 
                sexual, religião, idade ou background.
              </p>
              <p>
                Nossas iniciativas incluem programas de recrutamento inclusivo, grupos 
                de afinidade, treinamentos de conscientização e políticas que promovem a 
                equidade em todas as nossas operações.
              </p>
            </div>
            <div className="diversity-stats">
              <div className="stat-item">
                <div className="stat-value">45%</div>
                <div className="stat-label">Mulheres em posições de liderança</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">30+</div>
                <div className="stat-label">Nacionalidades representadas</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">100%</div>
                <div className="stat-label">Equidade salarial</div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="culture-highlight-section">
          <Highlight
            text="Nossa cultura não é apenas sobre o que fazemos, mas como fazemos. É o reflexo das pessoas extraordinárias que compõem nossa equipe e dos valores que compartilhamos."
            author="Diretoria de Pessoas"
            variant="primary"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Culture;
