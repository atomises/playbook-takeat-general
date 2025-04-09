
import React, { useState } from 'react';
import { Monitor, Laptop, Headphones, Mouse, HardDrive, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Accordion, { AccordionItem } from '../../components/Accordion/Accordion';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Equipment.css';
import searchData from '../../components/SearchBar/searchBar.data.json';

const Equipment: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('request');
  
  const equipmentCategories = [
    {
      id: 'computers',
      title: 'Computadores',
      icon: <Laptop size={24} />,
      items: [
        { 
          name: 'Notebook Standard', 
          specs: 'Dell Latitude 5420, i5, 16GB RAM, 256GB SSD',
          eligibility: 'Todos os colaboradores',
          image: 'https://images.unsplash.com/photo-1593642702909-dec73df255d7?w=300&h=200&fit=crop'
        },
        { 
          name: 'Notebook Premium', 
          specs: 'MacBook Pro M1, 16GB RAM, 512GB SSD',
          eligibility: 'Tech Leads, Designers, Diretoria',
          image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop'
        },
        { 
          name: 'Desktop Alto Desempenho', 
          specs: 'Dell Precision, i9, 32GB RAM, 1TB SSD, RTX 3070',
          eligibility: 'Desenvolvedores, Designers, Editores de vídeo',
          image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=200&fit=crop'
        }
      ]
    },
    {
      id: 'peripherals',
      title: 'Periféricos',
      icon: <Mouse size={24} />,
      items: [
        { 
          name: 'Monitor Standard', 
          specs: 'Dell P2422H 24" Full HD',
          eligibility: 'Todos os colaboradores',
          image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=200&fit=crop'
        },
        { 
          name: 'Monitor Premium', 
          specs: 'Dell UltraSharp U2720Q 27" 4K',
          eligibility: 'Designers, Desenvolvedores, Gestores',
          image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=200&fit=crop'
        },
        { 
          name: 'Kit Ergonômico', 
          specs: 'Teclado, mouse, suporte para notebook e apoio para os pés',
          eligibility: 'Todos os colaboradores',
          image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?w=300&h=200&fit=crop'
        }
      ]
    },
    {
      id: 'audio',
      title: 'Áudio e Comunicação',
      icon: <Headphones size={24} />,
      items: [
        { 
          name: 'Headset Standard', 
          specs: 'Logitech H390 USB com cancelamento de ruído',
          eligibility: 'Todos os colaboradores',
          image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300&h=200&fit=crop'
        },
        { 
          name: 'Headset Premium', 
          specs: 'Jabra Evolve 75 Wireless com cancelamento ativo de ruído',
          eligibility: 'Líderes, Comercial, Atendimento',
          image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300&h=200&fit=crop'
        },
        { 
          name: 'Webcam HD', 
          specs: 'Logitech C920 HD Pro',
          eligibility: 'Sob solicitação',
          image: 'https://images.unsplash.com/photo-1596114359844-6b64113627fc?w=300&h=200&fit=crop'
        }
      ]
    }
  ];
  
  const supportRequests = [
    {
      id: 1,
      type: "Equipamento com defeito",
      details: "Notebook não liga após atualização",
      status: "Em andamento",
      date: "12/05/2023",
      priority: "Alta"
    },
    {
      id: 2,
      type: "Solicitação de periférico",
      details: "Segundo monitor para home office",
      status: "Aprovado",
      date: "10/05/2023",
      priority: "Média"
    },
    {
      id: 3,
      type: "Substituição",
      details: "Headset com microfone quebrado",
      status: "Concluído",
      date: "05/05/2023",
      priority: "Baixa"
    }
  ];
  
  const faqItems = [
    {
      question: "Qual o processo para solicitar novos equipamentos?",
      answer: "Todas as solicitações devem ser feitas pelo portal de TI, na seção 'Solicitação de Equipamentos'. Após o preenchimento do formulário, seu gestor receberá um e-mail para aprovação. Equipamentos padrão são aprovados automaticamente para colaboradores elegíveis."
    },
    {
      question: "Posso utilizar meu próprio equipamento (BYOD)?",
      answer: "Sim, temos uma política de BYOD (Bring Your Own Device). Porém, para acessar recursos internos, será necessário instalar nosso software de segurança e seguir as políticas de uso. Consulte o manual completo na intranet."
    },
    {
      question: "Qual o prazo para recebimento de equipamentos após aprovação?",
      answer: "Para itens em estoque, o prazo é de até 3 dias úteis para escritórios e 5 dias úteis para entrega em domicílio. Para itens não disponíveis em estoque, o prazo é de 15 a 30 dias úteis, dependendo do fornecedor."
    },
    {
      question: "Como proceder em caso de dano ou roubo de equipamento?",
      answer: "Em caso de dano, abra imediatamente um chamado no portal de TI. Em caso de roubo ou furto, faça um boletim de ocorrência e informe ao departamento de TI em até 24h através do e-mail seguranca.ti@empresa.com.br."
    },
    {
      question: "É possível solicitar equipamentos específicos não listados no catálogo?",
      answer: "Sim, para casos excepcionais e justificados. Preencha o formulário 'Solicitação Especial' detalhando a necessidade e especificações técnicas. Estas solicitações passam por análise adicional da gerência e departamento de TI."
    }
  ];
  
  return (
    <PageWrapper>
      <div className="page-search-container">
        <SearchBar 
          placeholder="Buscar equipamentos ou suporte..." 
          items={searchData.searchItems}
        />
      </div>
      
      <SectionHeader
        title="Suporte de Equipamentos"
        description="Solicite novos equipamentos, resolva problemas técnicos e acompanhe suas solicitações."
        icon={<Monitor size={28} />}
      />
      
      <div className="equipment-page">
        <section className="equipment-tabs-section">
          <div className="tabs-header">
            <button 
              className={`tab-button ${selectedTab === 'request' ? 'active' : ''}`}
              onClick={() => setSelectedTab('request')}
            >
              Solicitar Equipamentos
            </button>
            <button 
              className={`tab-button ${selectedTab === 'support' ? 'active' : ''}`}
              onClick={() => setSelectedTab('support')}
            >
              Suporte Técnico
            </button>
            <button 
              className={`tab-button ${selectedTab === 'status' ? 'active' : ''}`}
              onClick={() => setSelectedTab('status')}
            >
              Status de Solicitações
            </button>
          </div>
          
          <div className="tabs-content">
            {selectedTab === 'request' && (
              <div className="tab-content">
                <h2 className="section-title">Catálogo de Equipamentos</h2>
                <p className="tab-description">
                  Confira os equipamentos disponíveis para solicitação conforme sua função e necessidade.
                  Todas as solicitações passam por aprovação do gestor imediato.
                </p>
                
                {equipmentCategories.map((category) => (
                  <div key={category.id} className="equipment-category">
                    <h3 className="category-title">
                      <span className="category-icon">{category.icon}</span>
                      {category.title}
                    </h3>
                    
                    <div className="equipment-items">
                      {category.items.map((item, index) => (
                        <div key={index} className="equipment-item">
                          <div className="equipment-image">
                            <img src={item.image} alt={item.name} />
                          </div>
                          <div className="equipment-details">
                            <h4 className="equipment-name">{item.name}</h4>
                            <p className="equipment-specs">{item.specs}</p>
                            <p className="equipment-eligibility">
                              <strong>Elegibilidade:</strong> {item.eligibility}
                            </p>
                            <button className="request-button">Solicitar</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {selectedTab === 'support' && (
              <div className="tab-content">
                <h2 className="section-title">Suporte Técnico</h2>
                <p className="tab-description">
                  Estamos aqui para ajudar com qualquer problema técnico. Selecione o tipo de suporte necessário:
                </p>
                
                <div className="support-options">
                  <Card
                    title="Problemas com Hardware"
                    description="Solicite suporte para problemas com notebooks, monitores, periféricos e outros equipamentos físicos."
                    icon={<HardDrive size={24} />}
                    className="support-card"
                  />
                  
                  <Card
                    title="Problemas com Software"
                    description="Obtenha ajuda com sistemas operacionais, aplicativos, VPN, e-mail ou ferramentas corporativas."
                    icon={<Laptop size={24} />}
                    className="support-card"
                  />
                  
                  <Card
                    title="Solicitação de Acesso"
                    description="Solicite acesso a sistemas, ferramentas, pastas compartilhadas ou outros recursos."
                    icon={<CheckCircle size={24} />}
                    className="support-card"
                  />
                </div>
                
                <div className="support-form-container">
                  <h3>Abrir Chamado</h3>
                  
                  <form className="support-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label>Tipo de Suporte</label>
                        <select className="form-control">
                          <option>Selecione...</option>
                          <option>Problema com Hardware</option>
                          <option>Problema com Software</option>
                          <option>Solicitação de Acesso</option>
                          <option>Outros</option>
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label>Prioridade</label>
                        <select className="form-control">
                          <option>Baixa - Não afeta trabalho</option>
                          <option>Média - Impacta parcialmente</option>
                          <option>Alta - Impede o trabalho</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>Título do Chamado</label>
                      <input type="text" className="form-control" placeholder="Descreva o problema brevemente" />
                    </div>
                    
                    <div className="form-group">
                      <label>Descrição Detalhada</label>
                      <textarea className="form-control" rows={4} placeholder="Descreva o problema com detalhes, incluindo quando começou e passos para reproduzir"></textarea>
                    </div>
                    
                    <div className="form-group">
                      <label>Anexar Arquivos (opcional)</label>
                      <input type="file" className="form-control-file" />
                      <small>Anexe capturas de tela ou arquivos relevantes (máx. 10MB)</small>
                    </div>
                    
                    <button type="submit" className="submit-button">Enviar Chamado</button>
                  </form>
                </div>
              </div>
            )}
            
            {selectedTab === 'status' && (
              <div className="tab-content">
                <h2 className="section-title">Status das Solicitações</h2>
                <p className="tab-description">
                  Acompanhe o status de suas solicitações de equipamentos e chamados de suporte técnico.
                </p>
                
                {supportRequests.length > 0 ? (
                  <div className="requests-table-container">
                    <table className="requests-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Tipo</th>
                          <th>Detalhes</th>
                          <th>Data</th>
                          <th>Prioridade</th>
                          <th>Status</th>
                          <th>Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {supportRequests.map((request) => (
                          <tr key={request.id}>
                            <td>#{request.id}</td>
                            <td>{request.type}</td>
                            <td>{request.details}</td>
                            <td>{request.date}</td>
                            <td>
                              <span className={`priority-badge ${request.priority.toLowerCase()}`}>
                                {request.priority}
                              </span>
                            </td>
                            <td>
                              <span className={`status-badge ${request.status.toLowerCase().replace(' ', '-')}`}>
                                {request.status}
                              </span>
                            </td>
                            <td>
                              <button className="action-button">Detalhes</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="no-requests">
                    <AlertTriangle size={24} />
                    <p>Você não possui solicitações ativas no momento.</p>
                  </div>
                )}
                
                <div className="estimated-times">
                  <h3>Tempos estimados de atendimento</h3>
                  
                  <div className="times-grid">
                    <div className="time-item">
                      <div className="time-icon high">
                        <Clock size={20} />
                      </div>
                      <div className="time-content">
                        <h4>Prioridade Alta</h4>
                        <p>Até 4 horas úteis</p>
                      </div>
                    </div>
                    
                    <div className="time-item">
                      <div className="time-icon medium">
                        <Clock size={20} />
                      </div>
                      <div className="time-content">
                        <h4>Prioridade Média</h4>
                        <p>Até 24 horas úteis</p>
                      </div>
                    </div>
                    
                    <div className="time-item">
                      <div className="time-icon low">
                        <Clock size={20} />
                      </div>
                      <div className="time-content">
                        <h4>Prioridade Baixa</h4>
                        <p>Até 48 horas úteis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        
        <InfoBlock
          title="Suporte Emergencial"
          content={
            <>
              <p>Para problemas críticos que afetem suas atividades imediatas, entre em contato com o suporte emergencial:</p>
              <p><strong>Telefone:</strong> (11) 3456-7890 (Segunda a Sexta, 8h às 20h)</p>
              <p><strong>E-mail:</strong> suporte.urgente@empresa.com.br</p>
            </>
          }
          variant="warning"
          icon={<AlertTriangle size={24} />}
        />
        
        <section className="faq-section">
          <h2 className="section-title">Perguntas Frequentes</h2>
          
          <Accordion>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} title={item.question}>
                <p>{item.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Equipment;
