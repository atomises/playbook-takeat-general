
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Dictionary.css';
import data from './dictionary.data.json';
import searchData from '../../components/SearchBar/searchBar.data.json';

const Dictionary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  const filteredTerms = data.terms.filter(term => {
    const matchesSearch = searchTerm === '' || 
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLetter = !selectedLetter || term.term.toUpperCase().startsWith(selectedLetter);
    
    return matchesSearch && matchesLetter;
  });
  
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };
  
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
          placeholder="Buscar no dicionário..." 
          items={searchData.searchItems}
          onSearch={handleSearchChange}
        />
      </div>
      
      <SectionHeader
        title={data.title}
        description={data.description}
        icon={<BookOpen size={28} />}
      />
      
      <div className="dictionary-page">
        <div className="dictionary-alphabet">
          {alphabet.map(letter => (
            <button
              key={letter}
              className={`alphabet-letter ${selectedLetter === letter ? 'active' : ''}`}
              onClick={() => setSelectedLetter(selectedLetter === letter ? null : letter)}
            >
              {letter}
            </button>
          ))}
          {selectedLetter && (
            <button
              className="alphabet-reset"
              onClick={() => setSelectedLetter(null)}
            >
              Mostrar Todos
            </button>
          )}
        </div>
        
        <div className="dictionary-search-box">
          <div className="search-icon">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Filtrar termos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="dictionary-search-input"
          />
          {searchTerm && (
            <button
              className="search-clear"
              onClick={() => setSearchTerm('')}
            >
              Limpar
            </button>
          )}
        </div>
        
        {filteredTerms.length === 0 ? (
          <div className="no-terms-found">
            <p>Nenhum termo encontrado para a busca atual.</p>
          </div>
        ) : (
          <motion.div 
            className="dictionary-terms"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredTerms.map((term, index) => (
              <motion.div 
                key={index} 
                className="dictionary-term"
                variants={itemVariants}
              >
                <h3 className="term-title">{term.term}</h3>
                <p className="term-definition">{term.definition}</p>
                {term.example && (
                  <div className="term-example">
                    <strong>Exemplo:</strong> {term.example}
                  </div>
                )}
                {term.related && term.related.length > 0 && (
                  <div className="term-related">
                    <strong>Termos relacionados:</strong>
                    <div className="related-terms">
                      {term.related.map((relatedTerm, idx) => (
                        <span key={idx} className="related-term">{relatedTerm}</span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </PageWrapper>
  );
};

export default Dictionary;
