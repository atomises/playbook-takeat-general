
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Briefcase, Mail, Phone, MapPin, ChevronLeft, ChevronRight 
} from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Members.css';
import data from './members.data.json';
import searchData from '../../components/SearchBar/searchBar.data.json';

const Members: React.FC = () => {
  const [department, setDepartment] = useState<string>('all');
  const [location, setLocation] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const membersPerPage = 8;
  
  // Filtrar membros com base nos filtros selecionados
  const filteredMembers = data.members.filter(member => {
    const departmentMatch = department === 'all' || member.department === department;
    const locationMatch = location === 'all' || member.location === location;
    return departmentMatch && locationMatch;
  });
  
  // Calcular paginação
  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember);
  
  // Manipuladores de mudança de página
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  
  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder="Buscar membros..." 
          items={searchData.searchItems}
        />
      </div>
      
      <div className="members-page">
        <SectionHeader
          title="Membros da Equipe"
          description="Conheça todos os membros da nossa equipe, suas funções e como entrar em contato."
          icon={<Users size={28} />}
        />
        
        <div className="members-filters">
          <div className="filter-group">
            <span className="filter-label">Departamento:</span>
            <select 
              className="filter-select"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="all">Todos</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Design">Design</option>
              <option value="Comercial">Comercial</option>
              <option value="Marketing">Marketing</option>
              <option value="Recursos Humanos">Recursos Humanos</option>
              <option value="Financeiro">Financeiro</option>
            </select>
          </div>
          
          <div className="filter-group">
            <span className="filter-label">Localização:</span>
            <select 
              className="filter-select"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="all">Todas</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Belo Horizonte">Belo Horizonte</option>
              <option value="Remoto">Remoto</option>
            </select>
          </div>
          
          <div className="filter-results">
            Exibindo {filteredMembers.length} membros
          </div>
        </div>
        
        <motion.div 
          className="members-grid"
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
          {currentMembers.map((member) => (
            <motion.div 
              key={member.id}
              className="member-card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="member-cover" style={{ backgroundColor: member.coverColor || '#3b82f6' }}></div>
              <div className="member-avatar">
                <img src={member.avatar || "/placeholder.svg"} alt={member.name} />
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-department">
                  <Briefcase size={14} />
                  <span>{member.department}</span>
                </p>
                
                <div className="member-contacts">
                  <div className="member-contact">
                    <Mail size={14} />
                    <span>{member.email}</span>
                  </div>
                  <div className="member-contact">
                    <Phone size={14} />
                    <span>{member.phone}</span>
                  </div>
                  <div className="member-contact">
                    <MapPin size={14} />
                    <span>{member.location}</span>
                  </div>
                </div>
                
                {member.skills && (
                  <div className="member-tags">
                    {member.skills.map((skill, index) => (
                      <span key={index} className="member-tag">{skill}</span>
                    ))}
                  </div>
                )}
                
                <div className="member-stats">
                  <div className="member-stat">
                    <div className="stat-value">{member.projects || 0}</div>
                    <div className="stat-label">Projetos</div>
                  </div>
                  <div className="member-stat">
                    <div className="stat-value">{member.yearsAtCompany || 0}</div>
                    <div className="stat-label">Anos</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {totalPages > 1 && (
          <div className="pagination">
            <button 
              className={`pagination-button prev ${currentPage === 1 ? 'disabled' : ''}`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={16} />
              <span>Anterior</span>
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            
            <button 
              className={`pagination-button next ${currentPage === totalPages ? 'disabled' : ''}`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <span>Próxima</span>
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default Members;
