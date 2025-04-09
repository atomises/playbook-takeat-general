
import React from 'react';
import { Building, Coffee, Wifi, Users, Clock, Map, Car, Utensils, AlertTriangle } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Accordion, { AccordionItem } from '../../components/Accordion/Accordion';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Office.css';
import searchData from '../../components/SearchBar/searchBar.data.json';

const Office: React.FC = () => {
  const locations = [
    {
      name: "Sede São Paulo",
      address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
      phone: "(11) 3456-7890",
      email: "saopaulo@empresa.com.br",
      hours: "Segunda a Sexta, 8h às 18h",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&h=300&fit=crop"
    },
    {
      name: "Escritório Rio de Janeiro",
      address: "Av. Rio Branco, 500 - Centro, Rio de Janeiro - RJ",
      phone: "(21) 3456-7890",
      email: "rio@empresa.com.br",
      hours: "Segunda a Sexta, 9h às 18h",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop"
    }
  ];

  const amenities = [
    {
      title: "Café e Copa",
      description: "Áreas de descompressão com café gratuito, snacks e refeições. Geladeiras e micro-ondas disponíveis.",
      icon: <Coffee size={24} />
    },
    {
      title: "Internet de Alta Velocidade",
      description: "Wi-Fi de alta velocidade em todos os ambientes, além de conexões cabeadas nas estações de trabalho.",
      icon: <Wifi size={24} />
    },
    {
      title: "Salas de Reunião",
      description: "Diversas salas equipadas com tecnologia para videoconferências e apresentações.",
      icon: <Users size={24} />
    },
    {
      title: "Horário Flexível",
      description: "Política de horário flexível com core hours das 10h às 16h para reuniões e colaboração.",
      icon: <Clock size={24} />
    }
  ];

  const faqItems = [
    {
      question: "Quais são os horários de funcionamento do escritório?",
      answer: "Os escritórios estão abertos das 7h às 22h nos dias úteis. Para acesso fora desse horário ou em fins de semana, é necessário solicitar autorização prévia ao departamento de Facilities."
    },
    {
      question: "Como funciona o estacionamento?",
      answer: "Temos vagas limitadas no subsolo que devem ser reservadas com antecedência através do app corporativo. Colaboradores também têm desconto no estacionamento do shopping ao lado."
    },
    {
      question: "Posso trazer visitantes para o escritório?",
      answer: "Sim! Visitantes são bem-vindos, mas precisam ser cadastrados com antecedência pelo portal. Na recepção, será necessário apresentar documento com foto e usar crachá de visitante durante toda a permanência."
    },
    {
      question: "Existe dress code?",
      answer: "Adotamos uma política de vestimenta casual para o dia a dia. Para reuniões com clientes ou eventos formais, recomendamos traje business casual. Sempre priorize o bom senso e o conforto."
    },
    {
      question: "Como funciona o uso de salas de reunião?",
      answer: "As salas devem ser reservadas pelo sistema de agendamento, disponível na intranet. Sempre libere a sala caso sua reunião termine antes do previsto."
    }
  ];

  const officeRules = [
    {
      title: "Espaços compartilhados",
      rules: [
        "Mantenha a limpeza e organização das áreas comuns",
        "Respeite o espaço e materiais dos colegas",
        "Não deixe pertences pessoais em áreas comuns durante a noite",
        "Mantenha um tom de voz adequado, especialmente em áreas abertas"
      ]
    },
    {
      title: "Segurança",
      rules: [
        "Use sempre seu crachá de identificação",
        "Não empreste seu crachá ou permita acesso de terceiros",
        "Reporte imediatamente pessoas não identificadas",
        "Mantenha seus pertences de valor seguros"
      ]
    },
    {
      title: "Sustentabilidade",
      rules: [
        "Desligue equipamentos e luzes ao sair",
        "Utilize as lixeiras de coleta seletiva corretamente",
        "Evite o uso de descartáveis na copa",
        "Reporte vazamentos ou desperdícios ao time de facilities"
      ]
    }
  ];

  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder="Buscar informações sobre escritórios..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title="Escritórios e Regras"
        description="Conheça nossos espaços de trabalho, facilidades e regras para uma convivência harmoniosa."
        icon={<Building size={28} />}
      />
      
      <div className="office-page">
        <section className="locations-section">
          <h2 className="section-title">Nossos Escritórios</h2>
          
          <div className="locations-grid">
            {locations.map((location, index) => (
              <div key={index} className="location-card">
                <div className="location-image">
                  <img src={location.image} alt={location.name} />
                </div>
                <div className="location-content">
                  <h3 className="location-name">{location.name}</h3>
                  
                  <div className="location-details">
                    <div className="location-detail">
                      <Map size={18} />
                      <span>{location.address}</span>
                    </div>
                    
                    <div className="location-detail">
                      <Clock size={18} />
                      <span>{location.hours}</span>
                    </div>
                    
                    <div className="location-detail">
                      <div className="contact-info">
                        <div>{location.phone}</div>
                        <div>{location.email}</div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="location-map-btn">
                    Ver no mapa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="amenities-section">
          <h2 className="section-title">Facilidades e Recursos</h2>
          
          <div className="amenities-grid">
            {amenities.map((amenity, index) => (
              <Card
                key={index}
                title={amenity.title}
                description={amenity.description}
                icon={amenity.icon}
                className="amenity-card"
              />
            ))}
          </div>
        </section>
        
        <section className="commuting-section">
          <h2 className="section-title">Como Chegar</h2>
          
          <div className="commuting-options">
            <div className="commuting-option">
              <div className="commuting-icon">
                <Car size={24} />
              </div>
              <div className="commuting-content">
                <h3>De Carro</h3>
                <p>Estacionamento disponível no subsolo com vagas limitadas para colaboradores. Reserva pelo app corporativo. Estacionamento público no shopping ao lado com desconto para funcionários.</p>
              </div>
            </div>
            
            <div className="commuting-option">
              <div className="commuting-icon">
                <Map size={24} />
              </div>
              <div className="commuting-content">
                <h3>Transporte Público</h3>
                <p>Estação de metrô a 200m (Estação República). Diversas linhas de ônibus nas avenidas próximas. Bicicletário disponível no subsolo com vestiários.</p>
              </div>
            </div>
            
            <div className="commuting-option">
              <div className="commuting-icon">
                <Users size={24} />
              </div>
              <div className="commuting-content">
                <h3>Carona Solidária</h3>
                <p>Incentivamos o compartilhamento de caronas entre os colaboradores. Utilizamos o aplicativo corporativo para conectar pessoas com rotas similares.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="services-section">
          <h2 className="section-title">Serviços nas Proximidades</h2>
          
          <div className="services-grid">
            <div className="service-card">
              <Utensils size={24} />
              <h3>Alimentação</h3>
              <ul>
                <li>Praça de alimentação no shopping (50m)</li>
                <li>Restaurante por quilo "Sabor Caseiro" (100m)</li>
                <li>Cafeteria "Grão Especial" (150m)</li>
                <li>Food trucks na praça (segundas e quartas)</li>
              </ul>
            </div>
            
            <div className="service-card">
              <Map size={24} />
              <h3>Conveniência</h3>
              <ul>
                <li>Farmácia 24h (esquina)</li>
                <li>Academia (no shopping)</li>
                <li>Banco e caixas eletrônicos (térreo)</li>
                <li>Correios (200m)</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="rules-section">
          <h2 className="section-title">Regras de Convivência</h2>
          
          <InfoBlock
            title="Respeito Mútuo"
            content="Nossa principal regra é o respeito mútuo. Esperamos que todos os colaboradores mantenham um ambiente agradável, inclusivo e produtivo, respeitando o espaço e as diferenças de cada um."
            variant="highlighted"
            icon={<Users size={24} />}
          />
          
          <div className="rules-categories">
            {officeRules.map((category, categoryIndex) => (
              <div key={categoryIndex} className="rules-category">
                <h3 className="category-title">{category.title}</h3>
                <ul className="rules-list">
                  {category.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="rule-item">{rule}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="important-notice">
            <AlertTriangle size={24} />
            <p>O descumprimento reiterado das regras de convivência pode resultar em medidas disciplinares conforme nossa política interna. Dúvidas ou sugestões devem ser direcionadas ao departamento de Facilities.</p>
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
        </section>
      </div>
    </PageWrapper>
  );
};

export default Office;
