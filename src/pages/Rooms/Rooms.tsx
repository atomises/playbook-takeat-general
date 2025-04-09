
import React, { useState } from 'react';
import { Home, Calendar, MonitorSmartphone, Info, Users } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import './Rooms.css';
import roomsData from './rooms.data.json';

const Rooms: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<string>(roomsData.offices[0].name);
  
  // Filtrar o escritório selecionado
  const selectedOfficeData = roomsData.offices.find(office => office.name === selectedOffice);
  
  return (
    <PageWrapper>
      <SectionHeader
        title={roomsData.title}
        description={roomsData.description}
        icon={<Home size={28} />}
      />
      
      <div className="rooms-page">
        <section className="reservation-section">
          <h2 className="section-title">Como Reservar</h2>
          <p className="reservation-info">{roomsData.reservation.how_to}</p>
          
          <div className="reservation-rules">
            <h3>Regras de Reserva</h3>
            <ul className="rules-list">
              {roomsData.reservation.rules.map((rule, index) => (
                <li key={index} className="rule-item">{rule}</li>
              ))}
            </ul>
          </div>
          
          <InfoBlock
            title="Precisa de ajuda?"
            content={roomsData.reservation.contact}
            variant="info"
            icon={<Info size={24} />}
          />
        </section>
        
        <section className="offices-section">
          <h2 className="section-title">Escritórios</h2>
          
          <div className="office-tabs">
            {roomsData.offices.map((office) => (
              <button
                key={office.name}
                className={`office-tab ${selectedOffice === office.name ? 'active' : ''}`}
                onClick={() => setSelectedOffice(office.name)}
              >
                {office.name}
              </button>
            ))}
          </div>
          
          {selectedOfficeData && (
            <div className="office-details">
              <p className="office-address">
                <strong>Endereço:</strong> {selectedOfficeData.address}
              </p>
              
              {selectedOfficeData.floors.map((floor) => (
                <div key={floor.floor} className="floor-section">
                  <h3 className="floor-title">{floor.floor}</h3>
                  
                  <div className="rooms-grid">
                    {floor.rooms.map((room) => (
                      <Card
                        key={room.id}
                        title={room.name}
                        description={`${room.type} | Capacidade: ${room.capacity} pessoas`}
                        className="room-card"
                      >
                        <div className="room-details">
                          <div className="room-image">
                            <img src={room.image} alt={room.name} />
                          </div>
                          
                          <div className="room-equipment">
                            <h4>Equipamentos</h4>
                            <ul>
                              {room.equipment.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <button className="room-reserve-btn">
                            <Calendar size={16} />
                            Reservar
                          </button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        
        <section className="room-etiquette-section">
          <div className="etiquette-container">
            <div className="etiquette-header">
              <h2 className="etiquette-title">{roomsData.etiquette.title}</h2>
            </div>
            
            <ul className="etiquette-rules">
              {roomsData.etiquette.rules.map((rule, index) => (
                <li key={index} className="etiquette-rule">{rule}</li>
              ))}
            </ul>
          </div>
        </section>
        
        <section className="tips-section">
          <h2 className="section-title">Dicas para Uso das Salas</h2>
          
          <div className="tips-grid">
            {roomsData.tips.map((tip, index) => (
              <div key={index} className="tip-card">
                <div className="tip-number">{index + 1}</div>
                <p className="tip-text">{tip}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Rooms;
