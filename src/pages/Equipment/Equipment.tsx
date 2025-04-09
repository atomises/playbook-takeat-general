
import React from 'react';
import { Monitor } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Equipment: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title="Suporte de Equipamentos"
        description="Solicite novos equipamentos, resolva problemas técnicos e acompanhe suas solicitações."
        icon={<Monitor size={28} />}
      />
      
      <ComingSoon 
        title="Sistema de suporte em implementação"
        description="Estamos implementando nosso novo sistema de suporte para equipamentos. Em breve você poderá fazer solicitações, abrir chamados e acompanhar o status de seus pedidos."
        icon={<Monitor size={36} />}
      />
    </PageWrapper>
  );
};

export default Equipment;
