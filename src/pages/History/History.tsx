
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, Zap, Users, Briefcase, Target } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Highlight from '../../components/Highlight/Highlight';
import SearchBar from '../../components/SearchBar/SearchBar';
import './History.css';
import data from './history.data.json';
import searchData from '../../components/SearchBar/searchBar.data.json';

const History: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder="Buscar em nossa história..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title={data.title}
        description={data.description}
        icon={<Clock size={28} />}
      />
      
      <div className="history-page">
        <div className="history-intro">
          <div className="intro-content">
            <h2 className="intro-title">Nossa Jornada</h2>
            <p className="intro-description">{data.intro}</p>
          </div>
          <div className="founder-quote">
            <blockquote>
              <p>"{data.founderQuote.text}"</p>
              <cite>— {data.founderQuote.author}, {data.founderQuote.role}</cite>
            </blockquote>
          </div>
        </div>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          <motion.div
            className="timeline"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {data.timeline.map((event, index) => (
              <motion.div 
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                variants={itemVariants}
              >
                <div className="timeline-content">
                  <div className="timeline-date">{event.year}</div>
                  <h3 className="timeline-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                  {event.achievement && (
                    <div className="timeline-achievement">
                      <Award size={16} />
                      <span>{event.achievement}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <section className="milestones-section">
          <h2 className="section-title">Marcos Importantes</h2>
          <div className="milestones-grid">
            {data.milestones.map((milestone, index) => (
              <div key={index} className="milestone-card">
                <div className="milestone-icon">
                  {milestone.icon === 'Zap' && <Zap size={24} />}
                  {milestone.icon === 'Users' && <Users size={24} />}
                  {milestone.icon === 'Briefcase' && <Briefcase size={24} />}
                  {milestone.icon === 'Target' && <Target size={24} />}
                </div>
                <div className="milestone-content">
                  <h3 className="milestone-title">{milestone.title}</h3>
                  <p className="milestone-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="leadership-section">
          <h2 className="section-title">Líderes que Fizeram História</h2>
          <div className="leaders-grid">
            {data.leaders.map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-image">
                  <div className="leader-avatar">{leader.name.charAt(0)}</div>
                </div>
                <div className="leader-info">
                  <h3 className="leader-name">{leader.name}</h3>
                  <p className="leader-role">{leader.role}</p>
                  <p className="leader-period">{leader.period}</p>
                  <p className="leader-contribution">{leader.contribution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <div className="history-highlight-section">
          <Highlight
            text={data.highlight.text}
            author={data.highlight.author}
            variant="gradient"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default History;
