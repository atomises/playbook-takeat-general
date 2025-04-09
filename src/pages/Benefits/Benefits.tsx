
import React from 'react';
import { Gift, Heart, DollarSign, BookOpen, Briefcase } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Accordion, { AccordionItem } from '../../components/Accordion/Accordion';
import Highlight from '../../components/Highlight/Highlight';
import SearchBar from '../../components/SearchBar/SearchBar';
import EmployeeSpotlight from '../../components/EmployeeSpotlight/EmployeeSpotlight';
import './Benefits.css';
import data from './benefits.data.json';
import searchData from '../../components/SearchBar/searchBar.data.json';
import employeeData from '../../components/EmployeeSpotlight/employeeSpotlight.data.json';

const Benefits: React.FC = () => {
  const randomEmployee = employeeData.employees[Math.floor(Math.random() * employeeData.employees.length)];
  
  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder="Buscar em benefícios..." 
          items={searchData.searchItems}
        />
      </div>
      
      <div className="benefits-layout">
        <div className="benefits-main">
          <SectionHeader
            title={data.title}
            description={data.description}
            icon={<Gift size={28} />}
          />
          
          <InfoBlock
            title="Quem tem direito aos benefícios?"
            content={data.eligibility}
            variant="highlighted"
            icon={<Heart size={24} />}
          />
          
          <div className="benefits-categories">
            {data.categories.map((category) => (
              <div key={category.id} className="benefit-category">
                <h3 className="benefit-category-title">
                  {category.title}
                </h3>
                
                <div className="benefit-cards">
                  {category.benefits.map((benefit) => (
                    <Card
                      key={benefit.id}
                      title={benefit.title}
                      description={benefit.description}
                      className="benefit-card"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="benefits-faq-section">
            <h3 className="benefits-section-title">Perguntas Frequentes</h3>
            
            <Accordion>
              {data.faq.map((item) => (
                <AccordionItem key={item.id} title={item.question}>
                  <p>{item.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="benefits-highlight-section">
            <Highlight
              text={data.highlight.text}
              author={data.highlight.author}
              variant="primary"
            />
          </div>
        </div>
        
        <div className="benefits-sidebar">
          <EmployeeSpotlight
            name={randomEmployee.name}
            role={randomEmployee.role}
            department={randomEmployee.department}
            image={randomEmployee.image}
            achievement={randomEmployee.achievement}
            quote={randomEmployee.quote}
            stats={randomEmployee.stats}
          />
          
          <div className="benefits-contacts">
            <h3 className="benefits-contacts-title">Precisa de ajuda?</h3>
            
            {data.contacts.map((contact, index) => (
              <div key={index} className="benefits-contact">
                <div className="benefits-contact-icon">
                  {contact.type === "email" ? <DollarSign size={18} /> : <BookOpen size={18} />}
                </div>
                <div className="benefits-contact-info">
                  <p className="benefits-contact-title">{contact.title}</p>
                  <p className="benefits-contact-value">{contact.value}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="benefits-important-dates">
            <h3 className="benefits-dates-title">Datas Importantes</h3>
            <ul className="benefits-dates-list">
              {data.importantDates.map((date, index) => (
                <li key={index} className="benefits-date-item">
                  <span className="benefits-date">{date.date}</span>
                  <span className="benefits-date-description">{date.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Benefits;
