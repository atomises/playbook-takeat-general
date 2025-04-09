
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Users } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Highlight from '../../components/Highlight/Highlight';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Members.css';
import data from './members.data.json';
import searchData from '../../components/SearchBar/searchBar.data.json';

const Members: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
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
      
      <SectionHeader
        title={data.title}
        description={data.description}
        icon={<Users size={28} />}
      />
      
      <div className="members-page">
        {data.departments.map((department) => (
          <section key={department.id} className="department-section">
            <h2 className="department-title">{department.name}</h2>
            
            <motion.div 
              className="members-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {department.members.map((member) => (
                <motion.div 
                  key={member.id} 
                  className="member-card"
                  variants={itemVariants}
                >
                  <div className="member-header">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="member-photo" 
                    />
                    <div className="member-header-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-role">{member.role}</p>
                      <div className="member-email">
                        <Mail size={14} />
                        <span>{member.email}</span>
                      </div>
                    </div>
                  </div>
                  <div className="member-body">
                    <p className="member-about">{member.about}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        ))}
        
        <div className="members-highlight-section">
          <Highlight
            text={data.highlight.text}
            author={data.highlight.author}
            variant="primary"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Members;
