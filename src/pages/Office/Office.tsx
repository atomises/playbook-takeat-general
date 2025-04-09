
import React, { useState } from 'react';
import { Building, MapPin, Phone, Clock, Navigation, Bus, Car, BookOpen, Coffee, DumbbellIcon, Gamepad2, Library, Baby, Bike } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import './Office.css';
import officeData from './office.data.json';

const Office: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>(officeData.locations[0].name);
  
  // Filtrar a localização selecionada
  const selectedOffice = officeData.locations.find(office => office.name === selectedLocation);
  
  // Mapear ícones para amenidades
  const getAmenityIcon = (name: string) => {
    switch (name) {
      case 'Cafeteria':
        return <Coffee size={20} />;
      case 'Academia':
        return <DumbbellIcon size={20} />;
      case 'Espaço de Descompressão':
        return <Gamepad2 size={20} />;
      case 'Biblioteca':
        return <Library size={20} />;
      case 'Sala de Amamentação':
        return <Baby size={20} />;
      case 'Bicicletário':
        return <Bike size={20} />;
      default:
        return <BookOpen size={20} />;
    }
  };
  
  return (
    <PageWrapper>
      <SectionHeader
        title={officeData.title}
        description={officeData.description}
        icon={<Building size={28} />}
      />
      
      <div className="office-page">
        <section className="locations-section">
          <h2 className="section-title">Nossos Escritórios</h2>
          
          <div className="location-tabs">
            {officeData.locations.map((location) => (
              <button
                key={location.name}
                className={`location-tab ${selectedLocation === location.name ? 'active' : ''}`}
                onClick={() => setSelectedLocation(location.name)}
              >
                {location.name}
              </button>
            ))}
          </div>
          
          {selectedOffice && (
            <div className="location-details">
              <div className="location-image">
                <img src={selectedOffice.image} alt={selectedOffice.name} />
              </div>
              
              <div className="location-info">
                <div className="info-grid">
                  <div className="info-item">
                    <MapPin size={18} />
                    <span>{selectedOffice.address}</span>
                  </div>
                  
                  <div className="info-item">
                    <Phone size={18} />
                    <span>{selectedOffice.phone}</span>
                  </div>
                  
                  <div className="info-item">
                    <Clock size={18} />
                    <span>{selectedOffice.hours}</span>
                  </div>
                  
                  <div className="info-item">
                    <Building size={18} />
                    <span>{selectedOffice.access}</span>
                  </div>
                </div>
                
                <div className="floor-info">
                  <h3>Andares e Departamentos</h3>
                  
                  <div className="floors-grid">
                    {selectedOffice.floors.map((floor) => (
                      <div key={floor.number} className="floor-card">
                        <div className="floor-number">{floor.number}º</div>
                        <div className="floor-content">
                          <div className="floor-departments">
                            <strong>Departamentos:</strong>
                            <p>{floor.departments.join(", ")}</p>
                          </div>
                          <div className="floor-amenities">
                            <strong>Recursos:</strong>
                            <ul>
                              {floor.amenities.map((amenity, index) => (
                                <li key={index}>{amenity}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="transport-info">
                  <h3>Como Chegar</h3>
                  
                  <div className="transport-grid">
                    <div className="transport-option">
                      <div className="transport-icon">
                        <Navigation size={20} />
                      </div>
                      <div className="transport-details">
                        <h4>Metrô</h4>
                        <ul>
                          {selectedOffice.transport.metro.map((line, index) => (
                            <li key={index}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="transport-option">
                      <div className="transport-icon">
                        <Bus size={20} />
                      </div>
                      <div className="transport-details">
                        <h4>Ônibus</h4>
                        <ul>
                          {selectedOffice.transport.bus.map((line, index) => (
                            <li key={index}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="transport-option">
                      <div className="transport-icon">
                        <Car size={20} />
                      </div>
                      <div className="transport-details">
                        <h4>Estacionamento</h4>
                        <p>{selectedOffice.transport.parking}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        
        <section className="rules-section">
          <h2 className="section-title">Regras do Escritório</h2>
          
          <div className="rules-grid">
            {officeData.office_rules.map((category, index) => (
              <div key={index} className="rules-category">
                <h3 className="category-title">{category.category}</h3>
                <ul className="rules-list">
                  {category.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="rule-item">{rule}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        <section className="amenities-section">
          <h2 className="section-title">Comodidades</h2>
          
          <div className="amenities-grid">
            {officeData.amenities.map((amenity, index) => (
              <Card
                key={index}
                title={amenity.name}
                description={amenity.description}
                icon={getAmenityIcon(amenity.name)}
                className="amenity-card"
              >
                <div className="amenity-details">
                  <div className="amenity-location">
                    <MapPin size={16} />
                    <span>{amenity.location}</span>
                  </div>
                  <div className="amenity-hours">
                    <Clock size={16} />
                    <span>{amenity.hours}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
        
        <div className="two-columns">
          <section className="etiquette-section">
            <h2 className="section-title">{officeData.etiquette.title}</h2>
            
            <div className="etiquette-topics">
              {officeData.etiquette.topics.map((topic, index) => (
                <div key={index} className="etiquette-topic">
                  <h3 className="topic-title">{topic.title}</h3>
                  <ul className="topic-tips">
                    {topic.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>{tip}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          
          <section className="sustainability-section">
            <h2 className="section-title">{officeData.sustainability.title}</h2>
            
            <div className="sustainability-practices">
              <ul className="practices-list">
                {officeData.sustainability.practices.map((practice, index) => (
                  <li key={index} className="practice-item">{practice}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Office;
