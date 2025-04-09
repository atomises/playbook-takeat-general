
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, X } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './Dictionary.css';
import data from './dictionary.data.json';

const Dictionary: React.FC = () => {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredTerms, setFilteredTerms] = useState(data.terms);
  
  // Gerar o alfabeto
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  // Filtrar termos com base na letra ativa e na busca
  useEffect(() => {
    let newFilteredTerms = data.terms;
    
    if (activeLetter) {
      newFilteredTerms = newFilteredTerms.filter(
        term => term.title.toUpperCase().startsWith(activeLetter)
      );
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      newFilteredTerms = newFilteredTerms.filter(
        term => 
          term.title.toLowerCase().includes(query) || 
          term.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredTerms(newFilteredTerms);
  }, [activeLetter, searchQuery]);
  
  // Agrupar termos por letra inicial
  const getTermsByLetter = () => {
    if (!filteredTerms.length) return {};
    
    return filteredTerms.reduce((acc: Record<string, typeof data.terms>, term) => {
      const firstLetter = term.title.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(term);
      return acc;
    }, {});
  };
  
  const groupedTerms = getTermsByLetter();
  const sortedLetters = Object.keys(groupedTerms).sort();
  
  // Limpar busca e filtros
  const handleReset = () => {
    setActiveLetter(null);
    setSearchQuery('');
  };
  
  // Manipulador para links "ver também"
  const handleSeeAlsoClick = (term: string) => {
    setSearchQuery(term);
    setActiveLetter(null);
  };
  
  return (
    <PageWrapper>
      <div className="dictionary-page">
        <SectionHeader
          title="Dicionário da Empresa"
          description="Glossário de termos e definições importantes utilizados em nossa empresa."
          icon={<BookOpen size={28} />}
        />
        
        <div className="dictionary-search-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text"
            placeholder="Buscar termos..."
            className="dictionary-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              className="search-clear"
              onClick={() => setSearchQuery('')}
            >
              <X size={16} />
            </button>
          )}
        </div>
        
        <div className="dictionary-alphabet">
          {alphabet.map(letter => (
            <button
              key={letter}
              className={`alphabet-letter ${activeLetter === letter ? 'active' : ''}`}
              onClick={() => setActiveLetter(activeLetter === letter ? null : letter)}
            >
              {letter}
            </button>
          ))}
          
          {(activeLetter || searchQuery) && (
            <button className="alphabet-reset" onClick={handleReset}>
              Limpar filtros
            </button>
          )}
        </div>
        
        {filteredTerms.length === 0 ? (
          <motion.div 
            className="dictionary-no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Nenhum termo encontrado</h3>
            <p>Não encontramos termos correspondentes à sua busca.</p>
            <div className="dictionary-no-results-actions">
              <button className="no-results-action" onClick={handleReset}>
                Ver todos os termos
              </button>
            </div>
          </motion.div>
        ) : (
          sortedLetters.map(letter => (
            <motion.div 
              key={letter}
              className="dictionary-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="dictionary-letter">{letter}</h3>
              <div className="dictionary-terms">
                {groupedTerms[letter].map((term, index) => (
                  <motion.div 
                    key={index}
                    className="dictionary-term"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <h3 className="term-title">{term.title}</h3>
                    <p className="term-description">{term.description}</p>
                    <span className="term-category">{term.category}</span>
                    
                    {term.seeAlso && term.seeAlso.length > 0 && (
                      <div className="term-see-also">
                        <p className="term-see-also-title">Ver também:</p>
                        <div className="term-see-also-links">
                          {term.seeAlso.map((relatedTerm, idx) => (
                            <span 
                              key={idx}
                              className="term-see-also-link"
                              onClick={() => handleSeeAlsoClick(relatedTerm)}
                            >
                              {relatedTerm}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </PageWrapper>
  );
};

export default Dictionary;
