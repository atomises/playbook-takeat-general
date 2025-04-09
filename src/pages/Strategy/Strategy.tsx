
import React from 'react';
import { Target } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Strategy: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title="Estratégia 2025"
        description="Conheça os objetivos estratégicos da empresa para os próximos anos."
        icon={<Target size={28} />}
      />
      
      <ComingSoon 
        title="Plano estratégico em finalização"
        description="Estamos finalizando a documentação completa de nossa estratégia para 2025, com objetivos, metas e indicadores de desempenho que guiarão nosso crescimento."
        icon={<Target size={36} />}
      />
    </PageWrapper>
  );
};

export default Strategy;
