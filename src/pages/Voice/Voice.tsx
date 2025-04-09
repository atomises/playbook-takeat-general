
import React from 'react';
import { MessageSquare, Check, X, Megaphone } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import './Voice.css';
import voiceData from './voice.data.json';

const Voice: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title={voiceData.title}
        description={voiceData.description}
        icon={<Megaphone size={28} />}
      />
      
      <div className="voice-page">
        <section className="voice-principles-section">
          <h2 className="section-title">Princípios de Comunicação</h2>
          
          <div className="principles-grid">
            {voiceData.principles.map((principle, index) => (
              <Card
                key={index}
                title={principle.title}
                description={principle.description}
                className="principle-card"
              />
            ))}
          </div>
        </section>

        <section className="voice-examples-section">
          <h2 className="section-title">Exemplos de Tom de Voz</h2>
          
          {voiceData.principles.map((principle, index) => (
            <div key={index} className="principle-examples">
              <h3 className="principle-title">{principle.title}</h3>
              
              {principle.examples.map((example, exIndex) => (
                <div key={exIndex} className="example-comparison">
                  <div className="example good">
                    <div className="example-header">
                      <Check size={18} className="icon-check" />
                      <span>Recomendado</span>
                    </div>
                    <p className="example-text">{example.good}</p>
                  </div>
                  
                  <div className="example bad">
                    <div className="example-header">
                      <X size={18} className="icon-x" />
                      <span>Evitar</span>
                    </div>
                    <p className="example-text">{example.bad}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>
        
        <section className="channels-section">
          <h2 className="section-title">Canais de Comunicação</h2>
          
          {voiceData.channels.map((channel, index) => (
            <div key={index} className="channel-card">
              <h3 className="channel-name">{channel.name}</h3>
              
              <div className="channel-content">
                <div className="channel-guidelines">
                  <h4>Diretrizes</h4>
                  <ul className="guidelines-list">
                    {channel.guidelines.map((guideline, guideIndex) => (
                      <li key={guideIndex}>{guideline}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="channel-examples">
                  <h4>Exemplos</h4>
                  {channel.name === 'Email' ? (
                    <div className="email-example">
                      <div className="email-subject">
                        <strong>Assunto:</strong> {channel.examples.subject}
                      </div>
                      <div className="email-body">
                        <p>{channel.examples.greeting}</p>
                        <p className="email-content">{channel.examples.body}</p>
                        <p>{channel.examples.closing}</p>
                      </div>
                    </div>
                  ) : channel.name === 'Redes Sociais' ? (
                    <div className="social-examples">
                      <div className="social-example">
                        <h5>LinkedIn</h5>
                        <p>{channel.examples.linkedin}</p>
                      </div>
                      <div className="social-example">
                        <h5>Instagram</h5>
                        <p>{channel.examples.instagram}</p>
                      </div>
                      <div className="social-example">
                        <h5>Twitter</h5>
                        <p>{channel.examples.twitter}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="doc-example">
                      <h5>{channel.examples.title}</h5>
                      <p className="doc-intro">{channel.examples.intro}</p>
                      <p>{channel.examples.step}</p>
                      <pre className="code-block">{channel.examples.code}</pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
        
        <section className="vocabulary-section">
          <h2 className="section-title">Vocabulário</h2>
          
          <div className="vocabulary-container">
            <div className="preferred-terms">
              <h3>Termos Preferidos</h3>
              <table className="terms-table">
                <thead>
                  <tr>
                    <th>Use</th>
                    <th>Em vez de</th>
                  </tr>
                </thead>
                <tbody>
                  {voiceData.vocabulary.preferred.map((term, index) => (
                    <tr key={index}>
                      <td className="term-use">{term.use}</td>
                      <td className="term-avoid">{term.instead_of}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="avoid-terms">
              <h3>Expressões a Evitar</h3>
              <ul className="avoid-list">
                {voiceData.vocabulary.avoid.map((term, index) => (
                  <li key={index} className="avoid-term">{term}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Voice;
