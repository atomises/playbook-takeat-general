
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Accordion.css';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ 
  title, 
  children, 
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="accordion-item">
      <button 
        className={`accordion-header ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="accordion-title">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="accordion-icon"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="accordion-content"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  return (
    <div className="accordion">
      {children}
    </div>
  );
};

export default Accordion;
