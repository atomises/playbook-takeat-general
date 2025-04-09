
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import cardData from '../../components/Card/card.data.json';
import * as LucideIcons from 'lucide-react';
import './Home.css';

// Type assertion for dynamic icon lookup
type IconComponentType = keyof typeof LucideIcons;

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  // Fixed getIcon function with proper typing
  const getIcon = (iconName: string) => {
    if (iconName in LucideIcons) {
      const Icon = LucideIcons[iconName as IconComponentType];
      return <Icon size={24} />;
    }
    return null;
  };

  return (
    <div className="home-page">
      <motion.div 
        className="hero-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Bem-vindo ao seu Onboarding
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Tudo o que você precisa saber para começar sua jornada conosco
        </motion.p>
      </motion.div>

      <motion.div 
        className="home-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <section className="getting-started">
          <h2 className="section-title">Comece por aqui</h2>
          <p className="section-description">
            Aqui você encontrará todas as informações necessárias para se integrar à nossa empresa. 
            Explore os recursos abaixo para começar:
          </p>
          
          <div className="cards-grid">
            {cardData.cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Card
                  title={card.title}
                  description={card.description}
                  icon={getIcon(card.icon)}
                  onClick={() => {
                    if (card.id === 'culture') {
                      navigate('/culture');
                    } else {
                      navigate(`/${card.id}`);
                    }
                  }}
                />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="welcome-message">
          <h2 className="section-title">Mensagem de Boas-Vindas</h2>
          <div className="message-content">
            <p>
              É com grande satisfação que damos as boas-vindas a você em nossa equipe!
            </p>
            <p>
              Estamos muito felizes por tê-lo(a) conosco e confiantes de que sua jornada 
              será repleta de aprendizado, desafios e conquistas. Nossa empresa valoriza 
              profundamente cada membro da equipe e acreditamos que sua contribuição 
              será fundamental para o nosso crescimento coletivo.
            </p>
            <p>
              Este guia de onboarding foi criado especialmente para facilitar sua integração 
              e proporcionar todas as informações necessárias para que você se sinta em casa 
              desde o primeiro dia.
            </p>
            <p>
              Não hesite em fazer perguntas ou solicitar ajuda sempre que precisar. 
              Estamos todos aqui para apoiá-lo(a) nesta nova fase.
            </p>
            <p className="message-signature">
              Equipe de Recursos Humanos
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Home;
