
import React from 'react';
import { Book, Clock, Coffee, Users } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Accordion, { AccordionItem } from '../../components/Accordion/Accordion';
import Highlight from '../../components/Highlight/Highlight';
import SearchBar from '../../components/SearchBar/SearchBar';
import './InternalRules.css';
import data from './internalRules.data.json';
import searchData from '../../components/SearchBar/searchBar.data.json';

const InternalRules: React.FC = () => {
  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder="Buscar em regras internas..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title={data.title}
        description={data.description}
        icon={<Book size={28} />}
      />
      
      <div className="rules-categories">
        {data.categories.map((category) => (
          <Card
            key={category.id}
            title={category.title}
            description={category.description}
            icon={<Users size={24} />}
            className="rule-category-card"
          />
        ))}
      </div>
      
      <div className="rules-sections">
        <div className="rules-section">
          <h3 className="rules-section-title">Horários e Presença</h3>
          
          <InfoBlock
            title="Horário Flexível"
            content={data.workHours.flexibleHours}
            variant="highlighted"
            icon={<Clock size={24} />}
          />
          
          <div className="rules-cards">
            {data.workHours.rules.map((rule) => (
              <Card
                key={rule.id}
                title={rule.title}
                description={rule.description}
                className="rule-card"
              />
            ))}
          </div>
        </div>
        
        <div className="rules-section">
          <h3 className="rules-section-title">Código de Conduta</h3>
          
          <Accordion>
            {data.conductCode.map((item) => (
              <AccordionItem key={item.id} title={item.title}>
                <p>{item.description}</p>
                {item.subItems && (
                  <ul className="conduct-list">
                    {item.subItems.map((subItem, index) => (
                      <li key={index}>{subItem}</li>
                    ))}
                  </ul>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="rules-section">
          <h3 className="rules-section-title">Espaços Comuns</h3>
          
          <InfoBlock
            title="Cuidados com Espaços Compartilhados"
            content={data.commonAreas.care}
            variant="warning"
            icon={<Coffee size={24} />}
          />
          
          <div className="rules-cards">
            {data.commonAreas.areas.map((area) => (
              <Card
                key={area.id}
                title={area.name}
                description={area.rules}
                className="rule-card"
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="rules-highlight-section">
        <Highlight
          text={data.highlight.text}
          author={data.highlight.author}
          variant="gradient"
        />
      </div>
    </PageWrapper>
  );
};

export default InternalRules;
