
import React from 'react';
import { ClipboardList, Clock, Home, Users, FileText, AlertTriangle } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Accordion, { AccordionItem } from '../../components/Accordion/Accordion';
import SearchBar from '../../components/SearchBar/SearchBar';
import './WorkPolicies.css';
import searchData from '../../components/SearchBar/searchBar.data.json';

const WorkPolicies: React.FC = () => {
  const policies = [
    {
      id: 'remote',
      title: 'Trabalho Remoto',
      description: 'Diretrizes para trabalho remoto, home office e modelo híbrido.',
      icon: <Home size={24} />,
      highlights: [
        "Opção de trabalho remoto até 3 dias por semana",
        "Core hours: 10h às 16h para reuniões e colaboração",
        "Disponibilidade via ferramentas oficiais de comunicação"
      ]
    },
    {
      id: 'time',
      title: 'Horário Flexível',
      description: 'Políticas de flexibilidade de horário e banco de horas.',
      icon: <Clock size={24} />,
      highlights: [
        "Jornada de 8h diárias com flexibilidade de entrada/saída",
        "Banco de horas com compensação semestral",
        "Marcação de ponto via aplicativo mobile"
      ]
    },
    {
      id: 'vacation',
      title: 'Férias e Ausências',
      description: 'Procedimentos para solicitação de férias, folgas e ausências justificadas.',
      icon: <FileText size={24} />,
      highlights: [
        "Férias podem ser fracionadas em até 3 períodos",
        "Solicitações com 30 dias de antecedência",
        "Política de day-off no aniversário"
      ]
    },
    {
      id: 'conduct',
      title: 'Código de Conduta',
      description: 'Normas de conduta e comportamento no ambiente de trabalho.',
      icon: <Users size={24} />,
      highlights: [
        "Respeito às diversidades e inclusão",
        "Normas de comportamento em ambientes compartilhados",
        "Política de tolerância zero para assédio"
      ]
    }
  ];

  const faqItems = [
    {
      question: "Como solicitar home office?",
      answer: "As solicitações de home office devem ser feitas pelo portal do colaborador com pelo menos 24h de antecedência e aprovadas pelo gestor direto. Para trabalho remoto recorrente, preencha o formulário específico disponível na intranet."
    },
    {
      question: "Como funciona o banco de horas?",
      answer: "O banco de horas permite compensar horas extras trabalhadas com folgas, mediante acordo prévio com o gestor. O saldo deve ser zerado a cada semestre (junho e dezembro). Horas excedentes não compensadas serão pagas com adicional conforme legislação."
    },
    {
      question: "Posso trabalhar remotamente de outra cidade?",
      answer: "Sim, desde que mantida a mesma faixa de fuso horário e respeitados os horários de core hours (10h às 16h). Para períodos superiores a 15 dias ou fora do país, é necessária aprovação prévia do RH."
    },
    {
      question: "Como funciona a política de folgas?",
      answer: "Além das férias legais, oferecemos day-off no aniversário, folgas por tempo de casa (a cada 2 anos) e possibilidade de emendar feriados conforme calendário divulgado anualmente pelo RH."
    },
    {
      question: "Quais equipamentos são fornecidos para trabalho remoto?",
      answer: "A empresa fornece notebook, headset e apoio ergonômico. Despesas com internet e energia não são reembolsáveis, mas oferecemos ajuda de custo mensal para trabalho remoto conforme política específica."
    }
  ];

  const importantNotices = [
    {
      title: "Revisão da Política de Horário Flexível",
      date: "01/06/2023",
      description: "A partir de julho, nosso horário flexível será ampliado, permitindo entrada entre 7h e 10h e saída entre 16h e 20h, respeitando a jornada de 8h diárias."
    },
    {
      title: "Nova política de trabalho internacional",
      date: "15/05/2023",
      description: "Colaboradores agora podem solicitar trabalho remoto de outros países por até 30 dias por ano. Confira os requisitos no portal do RH."
    }
  ];

  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder="Buscar em políticas de trabalho..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title="Políticas de Trabalho"
        description="Políticas específicas relacionadas ao dia a dia de trabalho, horários, home office e mais."
        icon={<ClipboardList size={28} />}
      />
      
      <div className="work-policies-page">
        <section className="policies-grid-section">
          <h2 className="section-title">Nossas Políticas</h2>
          
          <div className="policies-grid">
            {policies.map((policy) => (
              <div key={policy.id} className="policy-card">
                <div className="policy-icon">
                  {policy.icon}
                </div>
                <h3 className="policy-title">{policy.title}</h3>
                <p className="policy-description">{policy.description}</p>
                
                <div className="policy-highlights">
                  <h4>Destaques</h4>
                  <ul>
                    {policy.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <button className="policy-details-btn">
                  Ver política completa
                </button>
              </div>
            ))}
          </div>
        </section>
        
        <section className="policy-notices-section">
          <h2 className="section-title">Avisos Importantes</h2>
          
          <div className="notices-list">
            {importantNotices.map((notice, index) => (
              <div key={index} className="notice-card">
                <div className="notice-icon">
                  <AlertTriangle size={24} />
                </div>
                <div className="notice-content">
                  <div className="notice-header">
                    <h3 className="notice-title">{notice.title}</h3>
                    <span className="notice-date">{notice.date}</span>
                  </div>
                  <p className="notice-description">{notice.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <InfoBlock
          title="Política de Bem-estar"
          content="Acreditamos que o equilíbrio entre vida pessoal e profissional é essencial para o bem-estar. Incentivamos nossos colaboradores a respeitarem seus horários de descanso, evitarem e-mails fora do expediente e utilizarem integralmente suas férias anuais."
          variant="highlighted"
          icon={<Users size={24} />}
        />
        
        <section className="remote-work-section">
          <h2 className="section-title">Modelo Híbrido de Trabalho</h2>
          
          <div className="remote-work-grid">
            <div className="remote-work-image">
              <img src="https://images.unsplash.com/photo-1605565348518-bef3e7d6fed8?w=600&h=400&fit=crop" alt="Colaborador em home office" />
            </div>
            
            <div className="remote-work-content">
              <h3>Nossa Filosofia de Trabalho Flexível</h3>
              <p>Adotamos um modelo híbrido que combina o melhor dos dois mundos: a flexibilidade do trabalho remoto com os benefícios da colaboração presencial. Acreditamos que essa abordagem promove maior produtividade, bem-estar e equilíbrio.</p>
              
              <div className="remote-work-guidelines">
                <div className="guideline">
                  <h4>Dias no escritório</h4>
                  <p>Incentivamos a presença no escritório em pelo menos 2 dias por semana, preferencialmente em dias de reuniões de equipe.</p>
                </div>
                
                <div className="guideline">
                  <h4>Trabalho remoto</h4>
                  <p>Oferecemos flexibilidade para trabalho remoto em até 3 dias por semana, mediante acordo com o gestor.</p>
                </div>
                
                <div className="guideline">
                  <h4>Infraestrutura</h4>
                  <p>Fornecemos equipamentos e suporte técnico para garantir produtividade em qualquer ambiente de trabalho.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="policy-faq-section">
          <h2 className="section-title">Perguntas Frequentes</h2>
          
          <Accordion>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} title={item.question}>
                <p>{item.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="more-questions">
            <p>Não encontrou o que procura? Entre em contato com o RH:</p>
            <a href="mailto:rh@empresa.com.br" className="contact-link">rh@empresa.com.br</a>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default WorkPolicies;
