
import React from 'react';
import { Handshake } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Partners: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title="Parceiros"
        description="Conheça as empresas e organizações parceiras que colaboram com nosso sucesso."
        icon={<Handshake size={28} />}
      />
      
      <ComingSoon 
        title="Página de parceiros em construção"
        description="Estamos preparando uma página especial com informações sobre todos os nossos parceiros estratégicos, benefícios exclusivos e formas de colaboração."
        icon={<Handshake size={36} />}
      />
    </PageWrapper>
  );
};

export default Partners;
