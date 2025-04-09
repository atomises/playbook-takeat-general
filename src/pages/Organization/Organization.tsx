
import React from 'react';
import { Users } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Organization: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title="Quadro de Organização"
        description="Estrutura organizacional da empresa, departamentos e hierarquia."
        icon={<Users size={28} />}
      />
      
      <ComingSoon 
        title="Organograma interativo chegando"
        description="Estamos desenvolvendo um organograma interativo que permitirá visualizar toda a estrutura da empresa, navegar entre departamentos e conhecer as equipes."
        icon={<Users size={36} />}
      />
    </PageWrapper>
  );
};

export default Organization;
