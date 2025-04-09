
import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Users, Info, Plus, Calendar as CalDate } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import './Calendar.css';
import calendarData from './calendar.data.json';

const Calendar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Filtrar eventos por categoria
  const filteredEvents = selectedCategory === 'all' 
    ? calendarData.upcoming_events 
    : calendarData.upcoming_events.filter(event => event.category === selectedCategory);
  
  // Extrair categorias únicas dos eventos
  const categories = ['all', ...new Set(calendarData.upcoming_events.map(event => event.category))];
  
  return (
    <PageWrapper>
      <SectionHeader
        title={calendarData.title}
        description={calendarData.description}
        icon={<CalendarIcon size={28} />}
      />
      
      <div className="calendar-page">
        <section className="upcoming-events-section">
          <div className="section-header">
            <h2 className="section-title">Próximos Eventos</h2>
            
            <div className="filter-tabs">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-tab ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'Todos' : category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="events-grid">
            {filteredEvents.map((event) => (
              <Card
                key={event.id}
                title={event.title}
                description={event.description}
                className="event-card"
              >
                <div className="event-details">
                  <div className="event-info">
                    <div className="event-info-item">
                      <CalDate size={16} />
                      <span>{event.date}</span>
                    </div>
                    
                    <div className="event-info-item">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="event-info-item">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                    
                    <div className="event-info-item">
                      <Users size={16} />
                      <span>{event.organizer}</span>
                    </div>
                  </div>
                  
                  <div className="event-category">
                    <span className={`category-tag ${event.category.toLowerCase()}`}>
                      {event.category}
                    </span>
                  </div>
                  
                  {event.registration_required && (
                    <a href={event.registration_link} className="event-register-btn">
                      {event.remaining_vacancies 
                        ? `Inscrever-se (${event.remaining_vacancies} vagas)` 
                        : 'Inscrever-se'}
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="recurring-events-section">
          <h2 className="section-title">Eventos Recorrentes</h2>
          
          <div className="recurring-events-grid">
            {calendarData.recurring_events.map((event, index) => (
              <div key={index} className="recurring-event">
                <div className="recurring-event-header">
                  <h3 className="recurring-event-title">{event.title}</h3>
                  <span className="recurring-event-frequency">{event.frequency}</span>
                </div>
                
                <div className="recurring-event-details">
                  <div className="recurring-event-info">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="recurring-event-info">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="recurring-event-description">{event.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <div className="two-columns">
          <section className="holidays-section">
            <h2 className="section-title">Feriados</h2>
            
            <div className="holidays-list">
              {calendarData.holidays.map((holiday, index) => (
                <div key={index} className="holiday-item">
                  <div className="holiday-date">{holiday.date}</div>
                  <div className="holiday-details">
                    <div className="holiday-name">{holiday.name}</div>
                    <div className="holiday-type">{holiday.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className="company-dates-section">
            <h2 className="section-title">Datas Importantes da Empresa</h2>
            
            <div className="company-dates-list">
              {calendarData.company_dates.map((date, index) => (
                <div key={index} className="company-date-item">
                  <div className="company-date">{date.date}</div>
                  <div className="company-date-details">
                    <div className="company-date-name">{date.name}</div>
                    <div className="company-date-description">{date.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        
        <section className="create-event-section">
          <div className="create-event-container">
            <div className="create-event-header">
              <h2 className="create-event-title">
                <Plus size={20} />
                {calendarData.how_to_create.title}
              </h2>
            </div>
            
            <div className="create-event-steps">
              <ol className="steps-list">
                {calendarData.how_to_create.steps.map((step, index) => (
                  <li key={index} className="step-item">{step}</li>
                ))}
              </ol>
            </div>
            
            <InfoBlock
              title="Precisa de ajuda para criar um evento?"
              content={calendarData.how_to_create.contact}
              variant="info"
              icon={<Info size={24} />}
            />
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Calendar;
