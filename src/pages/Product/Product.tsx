
import React from 'react';
import { motion } from 'framer-motion';
import { Package, Star, Check, Award } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Highlight from '../../components/Highlight/Highlight';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Product.css';
import data from './product.data.json';
import searchData from '../../components/SearchBar/searchBar.data.json';

const Product: React.FC = () => {
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
          placeholder="Buscar informações do produto..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title={data.title}
        description={data.description}
        icon={<Package size={28} />}
      />
      
      <div className="product-page">
        <div className="product-hero">
          <div className="product-hero-content">
            <h2 className="product-name">{data.productName}</h2>
            <p className="product-tagline">{data.tagline}</p>
            <div className="product-highlights">
              {data.keyHighlights.map((highlight, index) => (
                <div key={index} className="product-highlight-item">
                  <Check size={18} className="highlight-icon" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="product-hero-image">
            <img src={data.imageUrl} alt={data.productName} />
          </div>
        </div>
        
        <section className="product-section">
          <h3 className="section-title">Visão Geral do Produto</h3>
          <p className="section-description">{data.overview}</p>
          
          <motion.div 
            className="product-features"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {data.features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={itemVariants}
              >
                <div className="feature-icon">
                  <Star size={24} />
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        <section className="product-section">
          <h3 className="section-title">Como Funciona</h3>
          <div className="how-it-works">
            {data.howItWorks.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{index + 1}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="product-section">
          <h3 className="section-title">Soluções por Setor</h3>
          <div className="product-industries">
            {data.industries.map((industry, index) => (
              <Card
                key={index}
                title={industry.name}
                description={industry.description}
                icon={<Award size={20} />}
                className="industry-card"
              />
            ))}
          </div>
        </section>
        
        <InfoBlock
          title="Próximos Lançamentos"
          content={data.upcomingReleases.description}
          variant="highlighted"
          icon={<Package size={24} />}
        />
        
        <section className="product-section testimonials-section">
          <h3 className="section-title">O Que Nossos Clientes Dizem</h3>
          <div className="testimonials">
            {data.testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < testimonial.rating ? "#FFD700" : "none"} 
                      color={i < testimonial.rating ? "#FFD700" : "#e1e1e1"} 
                    />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.author.substring(0, 1)}
                  </div>
                  <div className="author-info">
                    <span className="author-name">{testimonial.author}</span>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <div className="product-highlight-section">
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

export default Product;
