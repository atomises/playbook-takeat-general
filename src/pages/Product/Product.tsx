
import React from 'react';
import { Package, CheckCircle, BarChart, Zap, Shield, Users } from 'lucide-react';
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
  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder="Buscar produtos..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title="Nossos Produtos"
        description="Conheça em detalhes os produtos e serviços que oferecemos ao mercado."
        icon={<Package size={28} />}
      />
      
      <div className="product-page">
        <section className="featured-product-section">
          <h2 className="section-title">Produto Principal</h2>
          
          <div className="featured-product">
            <div className="featured-product-image">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" alt="Plataforma Principal" />
            </div>
            <div className="featured-product-content">
              <h3 className="featured-product-title">Plataforma Compass</h3>
              <p className="featured-product-description">
                Nossa plataforma principal oferece uma solução completa para empresas que buscam otimizar seus processos internos e melhorar a produtividade das equipes.
              </p>
              <ul className="featured-product-features">
                <li><CheckCircle size={16} /> Gerenciamento completo de projetos</li>
                <li><CheckCircle size={16} /> Automação de processos operacionais</li>
                <li><CheckCircle size={16} /> Análise de dados em tempo real</li>
                <li><CheckCircle size={16} /> Integração com mais de 200 ferramentas</li>
                <li><CheckCircle size={16} /> Suporte 24/7 e atendimento personalizado</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="product-line-section">
          <h2 className="section-title">Nossa Linha de Produtos</h2>
          
          <div className="products-grid">
            {data.products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-icon">
                  {product.icon === "BarChart" && <BarChart size={32} />}
                  {product.icon === "Zap" && <Zap size={32} />}
                  {product.icon === "Shield" && <Shield size={32} />}
                  {product.icon === "Users" && <Users size={32} />}
                </div>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-features">
                  <h4>Principais recursos:</h4>
                  <ul>
                    {product.features.map((feature, idx) => (
                      <li key={idx}><CheckCircle size={14} /> {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <InfoBlock
          title="Nosso Diferencial"
          content="Desenvolvemos nossas soluções com foco total na experiência do usuário e na flexibilidade para se adaptar às necessidades específicas de cada cliente. Nossa metodologia de desenvolvimento ágil nos permite evoluir constantemente nossos produtos com base no feedback real dos usuários."
          variant="highlighted"
          icon={<Zap size={24} />}
        />
        
        <section className="cases-section">
          <h2 className="section-title">Casos de Sucesso</h2>
          
          <div className="cases-grid">
            {data.cases.map((caseStudy, index) => (
              <div key={index} className="case-card">
                <div className="case-header">
                  <div className="case-logo">
                    <img src={caseStudy.logo || "https://via.placeholder.com/100x50"} alt={caseStudy.company} />
                  </div>
                  <div className="case-details">
                    <h3 className="case-company">{caseStudy.company}</h3>
                    <p className="case-industry">{caseStudy.industry}</p>
                  </div>
                </div>
                <p className="case-challenge"><strong>Desafio:</strong> {caseStudy.challenge}</p>
                <p className="case-solution"><strong>Solução:</strong> {caseStudy.solution}</p>
                <div className="case-results">
                  <h4>Resultados:</h4>
                  <ul>
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx}><BarChart size={14} /> {result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="pricing-section">
          <h2 className="section-title">Planos e Preços</h2>
          
          <div className="pricing-grid">
            {data.pricing.map((plan, index) => (
              <div key={index} className={`price-card ${plan.highlighted ? 'highlighted' : ''}`}>
                <div className="price-header">
                  <h3 className="price-title">{plan.title}</h3>
                  <p className="price-amount">
                    <span className="price-currency">R$</span>
                    <span className="price-number">{plan.price}</span>
                    <span className="price-period">/{plan.period}</span>
                  </p>
                  <p className="price-description">{plan.description}</p>
                </div>
                <div className="price-features">
                  <ul>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className={feature.included ? 'included' : 'excluded'}>
                        {feature.included ? <CheckCircle size={16} /> : <span className="excluded-icon">—</span>}
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="price-action">
                  <button className={`price-button ${plan.highlighted ? 'primary' : 'secondary'}`}>
                    Começar agora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <div className="product-highlight-section">
          <Highlight
            text="Nossos produtos são desenvolvidos com base em anos de experiência e pesquisa, sempre buscando oferecer as melhores soluções para os desafios reais das empresas."
            author="Pedro Mendes, CTO e Co-fundador"
            variant="primary"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Product;
