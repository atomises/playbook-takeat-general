
import React from 'react';
import { Briefcase } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Office: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title="Escritório e Regras"
        description="Informações sobre nosso espaço físico, regras de convivência e uso das instalações."
        icon={<Briefcase size={28} />}
      />
      
      <ComingSoon 
        title="Conteúdo em desenvolvimento"
        description="Estamos finalizando o manual completo sobre o escritório e regras de convivência. Em breve você terá acesso a todas as informações necessárias para aproveitar ao máximo nosso espaço."
        icon={<Briefcase size={36} />}
      />
    </PageWrapper>
  );
};

export default Office;
