
import React from 'react';
import { Home, Calendar, Clock, Users, BarChart } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import './Rooms.css';
import searchData from '../../components/SearchBar/searchBar.data.json';
import SearchBar from '../../components/SearchBar/SearchBar';

const Rooms: React.FC = () => {
  // Dados das salas (em produção, isso viria de uma API)
  const rooms = [
    {
      id: 1,
      name: "Sala Inovação",
      capacity: 12,
      floor: "2º andar",
      features: ["Projetor", "Videoconferência", "Quadro interativo", "Ar condicionado"],
      status: "available",
      photo: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?w=500&h=350&fit=crop"
    },
    {
      id: 2,
      name: "Sala Colaboração",
      capacity: 8,
      floor: "3º andar",
      features: ["TV 65″", "Sistema de som", "Mesa modular", "Ar condicionado"],
      status: "occupied",
      photo: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&h=350&fit=crop"
    },
    {
      id: 3,
      name: "Sala Foco",
      capacity: 4,
      floor: "1º andar",
      features: ["Isolamento acústico", "Monitor 32″", "Quadro branco", "Ar condicionado"],
      status: "maintenance",
      photo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=350&fit=crop"
    },
    {
      id: 4,
      name: "Sala Criatividade",
      capacity: 16,
      floor: "4º andar",
      features: ["Projetor duplo", "Sistema de videoconferência", "Lousa digital", "Móveis flexíveis"],
      status: "available",
      photo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=350&fit=crop"
    },
    {
      id: 5,
      name: "Sala Brainstorm",
      capacity: 10,
      floor: "2º andar",
      features: ["Paredes de vidro", "Sistema de áudio", "Quadros móveis", "Ar condicionado"],
      status: "available",
      photo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=350&fit=crop"
    },
    {
      id: 6,
      name: "Sala Reuniões Executivas",
      capacity: 8,
      floor: "5º andar",
      features: ["Mesa oval", "Videoconferência premium", "Cofee break", "Vista panorâmica"],
      status: "available",
      photo: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&h=350&fit=crop"
    }
  ];

  // Próximas reservas (em produção, isso viria de uma API)
  const upcomingBookings = [
    {
      id: 1,
      room: "Sala Inovação",
      date: "12/05/2023",
      time: "09:00 - 10:30",
      organizer: "Ana Silva",
      title: "Planejamento Q3"
    },
    {
      id: 2,
      room: "Sala Colaboração",
      date: "12/05/2023",
      time: "14:00 - 15:30",
      organizer: "Carlos Mendes",
      title: "Revisão de projeto"
    },
    {
      id: 3,
      room: "Sala Executiva",
      date: "13/05/2023",
      time: "10:00 - 11:00",
      organizer: "Patrícia Gomes",
      title: "Reunião com cliente"
    }
  ];

  const roomUtilizationStats = [
    { label: "Taxa de ocupação", value: "78%", trend: "up" },
    { label: "Reuniões por semana", value: "42", trend: "up" },
    { label: "Duração média", value: "52min", trend: "down" },
    { label: "Salas disponíveis", value: "4/6", trend: "neutral" }
  ];

  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder="Buscar salas disponíveis..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title="Salas de Reunião"
        description="Reserve e gerencie salas de reunião e espaços compartilhados."
        icon={<Home size={28} />}
      />
      
      <div className="rooms-page">
        <section className="rooms-header">
          <div className="rooms-filter">
            <div className="filter-group">
              <label>Data</label>
              <input type="date" className="filter-input" />
            </div>
            <div className="filter-group">
              <label>Horário</label>
              <select className="filter-input">
                <option>08:00 - 09:00</option>
                <option>09:00 - 10:00</option>
                <option>10:00 - 11:00</option>
                <option>11:00 - 12:00</option>
                <option>13:00 - 14:00</option>
                <option>14:00 - 15:00</option>
                <option>15:00 - 16:00</option>
                <option>16:00 - 17:00</option>
                <option>17:00 - 18:00</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Capacidade</label>
              <select className="filter-input">
                <option>Qualquer</option>
                <option>2-4 pessoas</option>
                <option>5-8 pessoas</option>
                <option>9-12 pessoas</option>
                <option>13+ pessoas</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Recursos</label>
              <select className="filter-input">
                <option>Todos</option>
                <option>Projetor</option>
                <option>Videoconferência</option>
                <option>Quadro interativo</option>
              </select>
            </div>
            <button className="filter-button">Buscar salas</button>
          </div>
          
          <div className="rooms-stats">
            {roomUtilizationStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">
                  {stat.value}
                  <span className={`stat-trend ${stat.trend}`}>
                    {stat.trend === "up" && <BarChart size={14} />}
                    {stat.trend === "down" && <BarChart size={14} />}
                  </span>
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="rooms-list-section">
          <h2 className="section-title">Todas as Salas</h2>
          
          <div className="rooms-grid">
            {rooms.map((room) => (
              <div key={room.id} className={`room-card ${room.status}`}>
                <div className="room-image">
                  <img src={room.photo} alt={room.name} />
                  <div className="room-status">
                    {room.status === "available" && "Disponível"}
                    {room.status === "occupied" && "Ocupada"}
                    {room.status === "maintenance" && "Em manutenção"}
                  </div>
                </div>
                <div className="room-content">
                  <h3 className="room-name">{room.name}</h3>
                  <div className="room-details">
                    <div className="room-detail">
                      <Users size={16} />
                      <span>{room.capacity} pessoas</span>
                    </div>
                    <div className="room-detail">
                      <Home size={16} />
                      <span>{room.floor}</span>
                    </div>
                  </div>
                  <div className="room-features">
                    <h4>Recursos:</h4>
                    <ul>
                      {room.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    className={`room-reserve-btn ${room.status !== "available" ? "disabled" : ""}`}
                    disabled={room.status !== "available"}
                  >
                    Reservar sala
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="upcoming-bookings-section">
          <h2 className="section-title">Suas Próximas Reservas</h2>
          
          <div className="bookings-list">
            {upcomingBookings.map((booking) => (
              <div key={booking.id} className="booking-card">
                <div className="booking-date">
                  <Calendar size={18} />
                  <div>
                    <div className="booking-day">{booking.date}</div>
                    <div className="booking-time">{booking.time}</div>
                  </div>
                </div>
                <div className="booking-details">
                  <h3 className="booking-title">{booking.title}</h3>
                  <p className="booking-room">{booking.room}</p>
                  <p className="booking-organizer">Organizador: {booking.organizer}</p>
                </div>
                <div className="booking-actions">
                  <button className="booking-action-btn edit">
                    Editar
                  </button>
                  <button className="booking-action-btn cancel">
                    Cancelar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <InfoBlock
          title="Como reservar uma sala"
          content="Para reservar uma sala, selecione a data e horário desejados, filtre de acordo com suas necessidades e clique em 'Reservar' na sala escolhida. Você pode convidar participantes diretamente do sistema de reservas, que se integrará automaticamente ao calendário corporativo."
          variant="highlighted"
          icon={<Clock size={24} />}
        />
      </div>
    </PageWrapper>
  );
};

export default Rooms;
