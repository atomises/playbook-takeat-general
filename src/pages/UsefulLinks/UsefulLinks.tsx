
import React from 'react';
import { ExternalLink } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import { getIconByName } from '../../utils/iconUtils';
import './UsefulLinks.css';
import linksData from './usefulLinks.data.json';

const UsefulLinks: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title={linksData.title}
        description={linksData.description}
        icon={<ExternalLink size={28} />}
      />
      
      <div className="useful-links-page">
        {linksData.categories.map((category, index) => (
          <section key={category.id} className="links-category-section">
            <div className="category-header">
              {getIconByName(category.icon, 24)}
              <h2 className="category-title">{category.title}</h2>
            </div>
            
            <div className="links-grid">
              {category.links.map((link, linkIndex) => (
                <a 
                  key={linkIndex}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-card-wrapper"
                >
                  <Card
                    title={link.title}
                    description={link.description}
                    icon={getIconByName(link.icon, 20)}
                    className="link-card"
                  >
                    <div className="link-card-footer">
                      <span className="visit-link">
                        Acessar <ExternalLink size={14} />
                      </span>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageWrapper>
  );
};

export default UsefulLinks;
