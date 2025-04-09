
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Clock, MapPin, Users, FileText, AlertCircle, Home as HomeIcon } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import SearchBar from '../../components/SearchBar/SearchBar';
import EmployeeSpotlight from '../../components/EmployeeSpotlight/EmployeeSpotlight';
import './Home.css';
import searchData from '../../components/SearchBar/searchBar.data.json';
import employeeData from '../../components/EmployeeSpotlight/employeeSpotlight.data.json';
import { getIconByName } from '../../utils/iconUtils';

const Home: React.FC = () => {
  const randomEmployee = employeeData.employees[Math.floor(Math.random() * employeeData.employees.length)];
  
  // Data para exibir cards na página inicial
  const featuredSections = [
    {
      id: "benefits",
      title: "Benefícios",
      description: "Conheça todos os benefícios disponíveis para você como colaborador.",
      icon: "Gift",
      path: "/benefits"
    },
    {
      id: "culture",
      title: "Nossa Cultura",
      description: "Descubra os valores e princípios que nos guiam como empresa.",
      icon: "Heart",
      path: "/culture"
    },
    {
      id: "equipment",
      title: "Suporte de Equipamentos",
      description: "Saiba como solicitar novos equipamentos ou resolver problemas técnicos.",
      icon: "Monitor",
      path: "/equipment"
    },
    {
      id: "policies",
      title: "Políticas",
      description: "Acesse nossas políticas e regulamentos internos.",
      icon: "FileText",
      path: "/policies"
    }
  ];
  
  // Dados para anúncios recentes
  const announcements = [
    {
      id: 1,
      title: "Nova política de trabalho remoto",
      date: "10/04/2025",
      author: "Departamento de RH",
      content: "Estamos atualizando nossa política de trabalho remoto para permitir até 3 dias por semana. Consulte o documento completo para mais detalhes."
    },
    {
      id: 2,
      title: "Treinamento obrigatório de segurança",
      date: "08/04/2025",
      author: "Departamento de TI",
      content: "Todos os colaboradores devem completar o treinamento de segurança da informação até o final do mês. O link foi enviado por e-mail."
    }
  ];
  
  // Dados para eventos próximos
  const upcomingEvents = [
    {
      id: 1,
      title: "Workshop de Design Thinking",
      day: "15",
      month: "Abr",
      time: "14:00 - 16:00",
      location: "Sala de Reuniões 3"
    },
    {
      id: 2,
      title: "Happy Hour da Empresa",
      day: "20",
      month: "Abr",
      time: "18:00 - 21:00",
      location: "Terraço"
    },
    {
      id: 3,
      title: "Apresentação de Resultados Q1",
      day: "22",
      month: "Abr",
      time: "10:00 - 11:30",
      location: "Auditório Principal"
    }
  ];
  
  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder="Pesquisar no Compass Guide..." 
          items={searchData.searchItems}
        />
      </div>
      
      <div className="home-page">
        <section className="welcome-section">
          <motion.div 
            className="welcome-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="welcome-icon">
              <HomeIcon size={28} />
            </div>
            <div className="welcome-content">
              <h2 className="welcome-title">Bem-vindo ao Compass Guide</h2>
              <p className="welcome-text">
                Seu portal central para todas as informações, recursos e ferramentas que você
                precisa como parte da nossa equipe. Explore as seções abaixo para começar.
              </p>
              <div className="quick-links">
                <a href="/benefits" className="quick-link">
                  {getIconByName("Gift", 16)}
                  <span>Benefícios</span>
                </a>
                <a href="/policies" className="quick-link">
                  {getIconByName("FileText", 16)}
                  <span>Políticas</span>
                </a>
                <a href="/culture" className="quick-link">
                  {getIconByName("Heart", 16)}
                  <span>Nossa Cultura</span>
                </a>
                <a href="/dictionary" className="quick-link">
                  {getIconByName("BookOpen", 16)}
                  <span>Dicionário</span>
                </a>
              </div>
            </div>
          </motion.div>
          
          <InfoBlock
            title="Dica do dia"
            content="Lembre-se de agendar sua reunião 1:1 com seu gestor através do calendário compartilhado. Estas reuniões são essenciais para seu desenvolvimento!"
            variant="highlighted"
            icon={<AlertCircle size={24} />}
          />
        </section>
        
        <div className="home-row">
          <section className="announcements-section">
            <h3 className="highlights-title">Anúncios Recentes</h3>
            
            {announcements.map((announcement) => (
              <motion.div 
                key={announcement.id}
                className="announcement"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="announcement-title">{announcement.title}</h4>
                <div className="announcement-meta">
                  <div className="announcement-date">
                    <Calendar size={14} />
                    <span>{announcement.date}</span>
                  </div>
                  <div className="announcement-author">
                    <Users size={14} />
                    <span>{announcement.author}</span>
                  </div>
                </div>
                <p className="announcement-content">{announcement.content}</p>
              </motion.div>
            ))}
          </section>
          
          <motion.section 
            className="upcoming-events-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="events-title">
              <Calendar size={20} className="events-icon" />
              <span>Próximos Eventos</span>
            </h3>
            
            <div className="event-list">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="event-item">
                  <div className="event-date">
                    <span className="event-day">{event.day}</span>
                    <span className="event-month">{event.month}</span>
                  </div>
                  <div className="event-details">
                    <h4 className="event-title">{event.title}</h4>
                    <div className="event-time">
                      <Clock size={14} />
                      <span>{event.time}</span>
                    </div>
                    <div className="event-location">
                      <MapPin size={14} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
        
        <section className="highlights-section">
          <h3 className="highlights-title">Destaques</h3>
          
          <div className="highlights-grid">
            <EmployeeSpotlight
              name={randomEmployee.name}
              role={randomEmployee.role}
              department={randomEmployee.department}
              image={randomEmployee.image}
              achievement={randomEmployee.achievement}
              quote={randomEmployee.quote}
              stats={randomEmployee.stats}
            />
            
            <InfoBlock
              title="Projeto em destaque"
              content="A equipe de produtos lançou o novo dashboard com métricas em tempo real. Acesse na plataforma principal e confira as novidades!"
              variant="success"
              icon={<Heart size={24} />}
            />
          </div>
        </section>
        
        <hr className="section-divider" />
        
        <section>
          <SectionHeader
            title="Seções em Destaque"
            description="Recursos e informações essenciais para você navegar na empresa."
            centered={true}
          />
          
          <motion.div 
            className="featured-sections"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {featuredSections.map((section, index) => (
              <motion.div
                key={section.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Card
                  title={section.title}
                  description={section.description}
                  icon={getIconByName(section.icon)}
                  onClick={() => window.location.href = section.path}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Home;
