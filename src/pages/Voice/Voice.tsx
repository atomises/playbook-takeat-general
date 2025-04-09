
import React from 'react';
import { MessageSquare, MessageCircle, AlertTriangle, Check, X } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Voice.css';
import searchData from '../../components/SearchBar/searchBar.data.json';

const Voice: React.FC = () => {
  const examples = [
    {
      category: "E-mails",
      items: [
        {
          title: "Comunicação com clientes",
          correct: "Agradecemos o contato e estamos à disposição para esclarecer quaisquer dúvidas sobre nossos serviços. Nosso time está empenhado em oferecer a melhor solução para suas necessidades.",
          incorrect: "Valeu pelo contato! A gente resolve seu problema rapidinho, pode deixar com a gente que a gente dá um jeito. Qualquer coisa é só chamar de novo, beleza?",
          explanation: "Mantenha um tom profissional e acolhedor sem ser informal demais. Evite gírias e expressões coloquiais em comunicações oficiais."
        },
        {
          title: "Comunicação interna",
          correct: "Prezados colegas, gostaríamos de informar que a reunião de alinhamento será realizada amanhã às 14h. Solicitamos a presença de todos para discutirmos os próximos passos do projeto.",
          incorrect: "Galera, reunião amanhã às 14h pra falar do projeto. Não faltem!!",
          explanation: "Mesmo em comunicações internas, mantenha um tom profissional. Seja direto e claro, mas evite linguagem excessivamente informal."
        }
      ]
    },
    {
      category: "Redes Sociais",
      items: [
        {
          title: "Postagens institucionais",
          correct: "Estamos entusiasmados em anunciar nossa nova solução que irá transformar a experiência dos nossos clientes. Conheça mais sobre ela em nosso site.",
          incorrect: "CHEGOU A NOVIDADE QUE VOCÊS ESTAVAM ESPERANDO!!! 🔥🔥🔥 Nossa nova solução vai EXPLODIR SUA MENTE! Corre lá pro site agora!!!!",
          explanation: "Evite exageros, excesso de emojis e caixa alta. Mantenha um tom entusiasmado, mas profissional e alinhado com a imagem da marca."
        },
        {
          title: "Resposta a comentários",
          correct: "Agradecemos seu feedback! Entendemos sua preocupação e gostaríamos de conversar mais sobre sua experiência. Poderia nos enviar uma mensagem privada com seus dados para que possamos ajudar?",
          incorrect: "Você está errado. Nosso produto funciona perfeitamente e nunca tivemos esse problema antes. Deve ser erro de uso.",
          explanation: "Mantenha sempre um tom respeitoso e acolhedor, mesmo diante de críticas. Nunca confronte clientes publicamente ou desqualifique suas experiências."
        }
      ]
    },
    {
      category: "Apresentações",
      items: [
        {
          title: "Para clientes",
          correct: "Nossa solução foi desenvolvida para atender às necessidades específicas do seu setor, oferecendo melhorias significativas em produtividade e redução de custos.",
          incorrect: "Nossa solução é a melhor do mercado, ninguém tem algo igual. Vocês estariam loucos se não fechassem negócio conosco hoje.",
          explanation: "Seja confiante, mas evite superlativos exagerados ou pressão desnecessária. Foque em benefícios concretos e valor real."
        },
        {
          title: "Internas",
          correct: "Nossos resultados trimestrais mostram um crescimento de 15%, mas ainda enfrentamos desafios em algumas áreas que precisamos abordar estrategicamente.",
          incorrect: "Finalmente conseguimos bater a meta! Agora podemos respirar um pouco e diminuir o ritmo no próximo trimestre.",
          explanation: "Seja honesto sobre conquistas e desafios, mas mantenha sempre um tom profissional e focado em melhorias contínuas."
        }
      ]
    }
  ];

  const tonePrinciples = [
    {
      title: "Profissionalismo",
      description: "Nossa comunicação deve sempre refletir nosso compromisso com a excelência e o profissionalismo, independente do canal ou público.",
      icon: <Check size={20} />
    },
    {
      title: "Clareza",
      description: "Priorizamos mensagens diretas e objetivas, evitando jargões desnecessários e ambiguidades que possam confundir nossos interlocutores.",
      icon: <Check size={20} />
    },
    {
      title: "Empatia",
      description: "Comunicamos sempre considerando a perspectiva do receptor, adaptando nossa linguagem para garantir compreensão e construir conexões.",
      icon: <Check size={20} />
    },
    {
      title: "Consistência",
      description: "Mantemos um tom de voz uniforme em todos os canais e pontos de contato, reforçando nossa identidade de marca.",
      icon: <Check size={20} />
    }
  ];

  const toneDonts = [
    {
      description: "Usar linguagem discriminatória ou que possa ofender qualquer grupo.",
      icon: <X size={20} />
    },
    {
      description: "Adotar um tom agressivo ou defensivo, mesmo em situações de crise.",
      icon: <X size={20} />
    },
    {
      description: "Utilizar gírias ou linguagem excessivamente informal em comunicações oficiais.",
      icon: <X size={20} />
    },
    {
      description: "Fazer promessas que não podemos cumprir ou exagerar benefícios.",
      icon: <X size={20} />
    }
  ];

  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder="Buscar no guia de tom de voz..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title="Tom de Voz"
        description="Diretrizes para comunicação e identidade da marca em diferentes canais e contextos."
        icon={<MessageSquare size={28} />}
      />
      
      <div className="voice-page">
        <section className="voice-intro">
          <h2 className="section-title">Nossa Identidade Verbal</h2>
          <p className="intro-text">
            Nossa comunicação é um reflexo direto de nossa identidade. A forma como nos expressamos deve transmitir 
            nossos valores e fortalecer nosso relacionamento com clientes, parceiros e colaboradores. 
            Este guia estabelece diretrizes para garantirmos consistência e alinhamento em todas as nossas interações.
          </p>
        </section>
        
        <section className="voice-principles">
          <h2 className="section-title">Princípios de Tom de Voz</h2>
          
          <div className="principles-grid">
            {tonePrinciples.map((principle, index) => (
              <Card
                key={index}
                title={principle.title}
                description={principle.description}
                icon={principle.icon}
                className="principle-card"
              />
            ))}
          </div>
          
          <InfoBlock
            title="O que não fazer"
            variant="warning"
            icon={<AlertTriangle size={24} />}
            content={
              <ul className="tone-donts-list">
                {toneDonts.map((item, index) => (
                  <li key={index}>
                    <span className="dont-icon">{item.icon}</span>
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            }
          />
        </section>
        
        <section className="voice-persona">
          <h2 className="section-title">Nossa Persona de Marca</h2>
          
          <div className="persona-attributes">
            <div className="attribute">
              <h3>Confiável, não arrogante</h3>
              <div className="attribute-scale">
                <div className="scale-bar">
                  <div className="scale-marker" style={{ left: '30%' }}></div>
                </div>
                <div className="scale-labels">
                  <span>Modesto</span>
                  <span>Arrogante</span>
                </div>
              </div>
            </div>
            
            <div className="attribute">
              <h3>Profissional, não distante</h3>
              <div className="attribute-scale">
                <div className="scale-bar">
                  <div className="scale-marker" style={{ left: '40%' }}></div>
                </div>
                <div className="scale-labels">
                  <span>Casual</span>
                  <span>Formal</span>
                </div>
              </div>
            </div>
            
            <div className="attribute">
              <h3>Especialista, não complicado</h3>
              <div className="attribute-scale">
                <div className="scale-bar">
                  <div className="scale-marker" style={{ left: '35%' }}></div>
                </div>
                <div className="scale-labels">
                  <span>Simples</span>
                  <span>Técnico</span>
                </div>
              </div>
            </div>
            
            <div className="attribute">
              <h3>Entusiasmado, não exagerado</h3>
              <div className="attribute-scale">
                <div className="scale-bar">
                  <div className="scale-marker" style={{ left: '40%' }}></div>
                </div>
                <div className="scale-labels">
                  <span>Contido</span>
                  <span>Efusivo</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="voice-examples">
          <h2 className="section-title">Exemplos Práticos</h2>
          
          {examples.map((category, categoryIndex) => (
            <div key={categoryIndex} className="example-category">
              <h3 className="category-title">
                <MessageCircle size={20} />
                {category.category}
              </h3>
              
              <div className="examples-list">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="example-item">
                    <h4 className="example-title">{item.title}</h4>
                    
                    <div className="example-content">
                      <div className="example-column correct">
                        <div className="example-header">
                          <Check size={16} />
                          <span>Correto</span>
                        </div>
                        <div className="example-text">{item.correct}</div>
                      </div>
                      
                      <div className="example-column incorrect">
                        <div className="example-header">
                          <X size={16} />
                          <span>Incorreto</span>
                        </div>
                        <div className="example-text">{item.incorrect}</div>
                      </div>
                    </div>
                    
                    <div className="example-explanation">
                      <strong>Por quê:</strong> {item.explanation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
        
        <section className="voice-channels">
          <h2 className="section-title">Adaptação por Canal</h2>
          
          <div className="channels-grid">
            <Card
              title="E-mail e Comunicações Formais"
              description="Tom profissional e direto, com saudações e despedidas apropriadas. Evite abreviações e use a norma culta da língua."
              className="channel-card"
            />
            
            <Card
              title="Redes Sociais"
              description="Tom mais leve e conversacional, mantendo profissionalismo. Uso moderado de emojis é aceitável. Adapte a linguagem à plataforma específica."
              className="channel-card"
            />
            
            <Card
              title="Atendimento ao Cliente"
              description="Tom acolhedor, empático e resolutivo. Foque em soluções e não em limitações. Demonstre real interesse em resolver problemas."
              className="channel-card"
            />
            
            <Card
              title="Comunicação Interna"
              description="Tom colaborativo e respeitoso. Pode ser mais informal que a comunicação externa, mas sempre mantendo o profissionalismo."
              className="channel-card"
            />
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Voice;
