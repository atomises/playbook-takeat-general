
import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, MapPin, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Calendar.css';
import searchData from '../../components/SearchBar/searchBar.data.json';

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Função para gerar os dias do mês atual
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days = [];
    
    // Dias do mês anterior para preencher a primeira semana
    for (let i = 0; i < firstDayOfMonth; i++) {
      const prevMonthDay = new Date(year, month, 0 - i).getDate();
      days.unshift({
        day: prevMonthDay,
        currentMonth: false,
        date: new Date(year, month - 1, prevMonthDay)
      });
    }
    
    // Dias do mês atual
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        currentMonth: true,
        date: new Date(year, month, i),
        hasEvent: events.some(event => {
          const eventDate = new Date(event.date);
          return eventDate.getDate() === i && 
                 eventDate.getMonth() === month && 
                 eventDate.getFullYear() === year;
        })
      });
    }
    
    // Dias do próximo mês para completar a grade
    const remainingDays = 42 - days.length; // 6 linhas x 7 dias
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        currentMonth: false,
        date: new Date(year, month + 1, i)
      });
    }
    
    return days;
  };
  
  // Função para avançar para o próximo mês
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  // Função para voltar para o mês anterior
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  // Formatar o mês e ano para exibição
  const formatMonthYear = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
  };
  
  // Dias da semana
  const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  
  // Eventos (em produção, viriam de uma API)
  const events = [
    {
      id: 1,
      title: "Reunião de Planejamento Q3",
      date: "2023-07-15",
      time: "10:00 - 12:00",
      location: "Sala Inovação",
      type: "meeting",
      description: "Revisão dos KPIs do trimestre e definição de metas para Q3."
    },
    {
      id: 2,
      title: "Workshop de Design Thinking",
      date: "2023-07-18",
      time: "09:00 - 17:00",
      location: "Auditório Principal",
      type: "training",
      description: "Workshop prático sobre metodologias de Design Thinking aplicadas aos nossos produtos."
    },
    {
      id: 3,
      title: "Happy Hour de Integração",
      date: "2023-07-28",
      time: "18:00 - 21:00",
      location: "Rooftop",
      type: "social",
      description: "Confraternização mensal dos times com atividades de integração."
    },
    {
      id: 4,
      title: "Dia do Trabalho - Feriado Nacional",
      date: "2023-05-01",
      time: "Todo o dia",
      location: "",
      type: "holiday",
      description: "Feriado nacional - escritórios fechados."
    },
    {
      id: 5,
      title: "Lançamento do Produto X",
      date: "2023-07-20",
      time: "14:00 - 16:00",
      location: "Online",
      type: "company",
      description: "Lançamento oficial do novo produto para o mercado com transmissão ao vivo."
    }
  ];
  
  // Tipos de eventos e suas cores
  const eventTypes = [
    { type: "meeting", label: "Reuniões", color: "#4263eb" },
    { type: "training", label: "Treinamentos", color: "#40c057" },
    { type: "social", label: "Eventos Sociais", color: "#f76707" },
    { type: "holiday", label: "Feriados", color: "#fa5252" },
    { type: "company", label: "Eventos Corporativos", color: "#7950f2" }
  ];
  
  // Próximos eventos (filtrados para datas futuras)
  const upcomingEvents = events
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);
  
  // Funções de formatação de data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };
  
  const getEventType = (type: string) => {
    return eventTypes.find(t => t.type === type) || { type: "", label: "Outro", color: "#adb5bd" };
  };
  
  const daysInMonth = getDaysInMonth(currentMonth);
  
  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder="Buscar eventos..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title="Calendário e Eventos"
        description="Acompanhe todos os eventos, datas importantes e cronograma da empresa."
        icon={<CalendarIcon size={28} />}
      />
      
      <div className="calendar-page">
        <section className="upcoming-events-section">
          <h2 className="section-title">Próximos Eventos</h2>
          
          <div className="upcoming-events">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map(event => (
                <div key={event.id} className="event-card" style={{ borderLeftColor: getEventType(event.type).color }}>
                  <div className="event-date">
                    <CalendarIcon size={18} />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <h3 className="event-title">{event.title}</h3>
                  
                  <div className="event-details">
                    {event.time && (
                      <div className="event-detail">
                        <Clock size={16} />
                        <span>{event.time}</span>
                      </div>
                    )}
                    
                    {event.location && (
                      <div className="event-detail">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>
                    )}
                    
                    <div className="event-detail">
                      <Star size={16} />
                      <span>{getEventType(event.type).label}</span>
                    </div>
                  </div>
                  
                  {event.description && (
                    <p className="event-description">{event.description}</p>
                  )}
                </div>
              ))
            ) : (
              <p className="no-events">Não há eventos próximos programados.</p>
            )}
          </div>
        </section>
        
        <section className="calendar-section">
          <div className="calendar-header">
            <h2 className="section-title">Calendário Corporativo</h2>
            
            <div className="calendar-controls">
              <div className="event-types">
                {eventTypes.map(type => (
                  <div key={type.type} className="event-type">
                    <span className="event-type-color" style={{ backgroundColor: type.color }}></span>
                    <span className="event-type-label">{type.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="month-navigation">
                <button onClick={prevMonth} className="month-nav-btn">
                  <ChevronLeft size={20} />
                </button>
                <h3 className="current-month">{formatMonthYear(currentMonth)}</h3>
                <button onClick={nextMonth} className="month-nav-btn">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="calendar-grid">
            <div className="calendar-weekdays">
              {weekdays.map(day => (
                <div key={day} className="weekday">{day}</div>
              ))}
            </div>
            
            <div className="calendar-days">
              {daysInMonth.map((day, index) => (
                <div 
                  key={index} 
                  className={`calendar-day ${!day.currentMonth ? 'not-current' : ''} ${day.hasEvent ? 'has-event' : ''}`}
                >
                  <span className="day-number">{day.day}</span>
                  {day.hasEvent && (
                    <div className="day-event-indicator"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="important-dates-section">
          <h2 className="section-title">Datas Importantes</h2>
          
          <div className="important-dates-grid">
            <Card
              title="Feriados Nacionais"
              description="Confira a lista de feriados nacionais e emendas aprovadas para o ano corrente."
              icon={<CalendarIcon size={20} />}
              className="important-date-card"
            />
            
            <Card
              title="Fechamentos Contábeis"
              description="Datas limites para envio de notas fiscais e fechamento mensal."
              icon={<CalendarIcon size={20} />}
              className="important-date-card"
            />
            
            <Card
              title="Aniversários"
              description="Calendário de aniversários dos colaboradores."
              icon={<CalendarIcon size={20} />}
              className="important-date-card"
            />
            
            <Card
              title="Eventos Corporativos"
              description="Próximos eventos importantes como confraternizações e reuniões gerais."
              icon={<CalendarIcon size={20} />}
              className="important-date-card"
            />
          </div>
        </section>
        
        <InfoBlock
          title="Solicitar inclusão de evento"
          content="Para solicitar a inclusão de um evento no calendário corporativo, preencha o formulário disponível na intranet ou entre em contato com o departamento de Comunicação Interna pelo e-mail eventos@empresa.com.br com pelo menos 5 dias úteis de antecedência."
          variant="highlighted"
          icon={<CalendarIcon size={24} />}
        />
      </div>
    </PageWrapper>
  );
};

export default Calendar;
