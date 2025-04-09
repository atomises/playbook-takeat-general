
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, Clock, AlertTriangle } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import SearchBar from '../../components/SearchBar/SearchBar';
import EmployeeSpotlight from '../../components/EmployeeSpotlight/EmployeeSpotlight';
import searchData from '../../components/SearchBar/searchBar.data.json';
import employeeData from '../../components/EmployeeSpotlight/employeeSpotlight.data.json';
import './PlaceholderPage.css';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  const randomEmployee = employeeData.employees[Math.floor(Math.random() * employeeData.employees.length)];
  
  // Generate random content based on the page title
  const getRandomParagraphs = (count: number, seed: string) => {
    const paragraphs = [
      `Esta seção contém informações essenciais sobre ${title.toLowerCase()}. Todos os membros da equipe devem estar familiarizados com estes conceitos para garantir uma operação eficiente e alinhada com os valores da empresa.`,
      `Os princípios de ${title.toLowerCase()} são fundamentais para o sucesso da nossa organização. Eles formam a base de como interagimos entre equipes e como atendemos nossos clientes.`,
      `Implementamos práticas modernas de ${title.toLowerCase()} que são constantemente atualizadas para refletir as melhores metodologias do mercado e as necessidades específicas do nosso negócio.`,
      `Entender ${title.toLowerCase()} é essencial para todos os colaboradores, independentemente de sua função. Isso garante que estejamos todos alinhados e trabalhando em direção aos mesmos objetivos estratégicos.`,
      `Nossa abordagem para ${title.toLowerCase()} foi desenvolvida após anos de experiência e aprendizado. Ela representa a combinação ideal entre eficiência operacional e bem-estar dos colaboradores.`
    ];
    
    let result = [];
    for (let i = 0; i < count; i++) {
      // Use the title as a seed to get consistent but varied paragraphs
      const index = (title.length + i * seed.length) % paragraphs.length;
      result.push(paragraphs[index]);
    }
    return result;
  };
  
  const paragraphs = getRandomParagraphs(2, title);
  
  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder={`Buscar em ${title.toLowerCase()}...`} 
          items={searchData.searchItems}
        />
      </div>
      
      <div className="placeholder-layout">
        <div className="placeholder-main">
          <SectionHeader
            title={title}
            description={paragraphs[0]}
            icon={<FileText size={28} />}
          />
          
          <div className="placeholder-content">
            <p className="placeholder-text">{paragraphs[1]}</p>
            
            <motion.div 
              className="placeholder-cards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="placeholder-card">
                <h3>Recursos Disponíveis</h3>
                <ul>
                  <li>Documentação completa</li>
                  <li>Treinamentos online</li>
                  <li>Workshops mensais</li>
                  <li>Suporte da equipe responsável</li>
                </ul>
              </div>
              
              <div className="placeholder-card">
                <h3>Próximas Atualizações</h3>
                <ul>
                  <li>Revisão de diretrizes (Q2 2023)</li>
                  <li>Novos templates e ferramentas</li>
                  <li>Integração com outros sistemas</li>
                  <li>Programa de certificação interna</li>
                </ul>
              </div>
            </motion.div>
            
            <InfoBlock
              title="Em Desenvolvimento"
              content={`Esta seção sobre ${title.toLowerCase()} está sendo expandida. Nossa equipe está trabalhando para adicionar mais conteúdo, exemplos práticos e ferramentas para auxiliar seu trabalho.`}
              variant="warning"
              icon={<AlertTriangle size={24} />}
            />
            
            <div className="placeholder-contact">
              <h3>Precisa de mais informações?</h3>
              <p>Entre em contato com a equipe responsável:</p>
              <div className="placeholder-contact-info">
                <Mail size={18} />
                <span>{title.toLowerCase().replace(/\s+/g, '-')}@empresa.com</span>
              </div>
              <div className="placeholder-contact-info">
                <Clock size={18} />
                <span>Atendimento das 9h às 18h nos dias úteis</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="placeholder-sidebar">
          <EmployeeSpotlight
            name={randomEmployee.name}
            role={randomEmployee.role}
            department={randomEmployee.department}
            image={randomEmployee.image}
            achievement={randomEmployee.achievement}
            quote={randomEmployee.quote}
            stats={randomEmployee.stats}
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default PlaceholderPage;
