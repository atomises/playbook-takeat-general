
import React from 'react';
import { Award } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Leadership: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title="Portal de Líderes"
        description="Recursos exclusivos para líderes gerenciarem suas equipes, acompanharem o desempenho e desenvolverem seus liderados."
        icon={<Award size={28} />}
      />
      
      <ComingSoon 
        title="Portal de Líderes sendo aprimorado"
        description="Estamos aprimorando nosso Portal de Líderes com novas ferramentas e recursos. Em breve líderes terão acesso a dashboards de desempenho, trilhas de desenvolvimento e mais."
        icon={<Award size={36} />}
      />
    </PageWrapper>
  );
};

export default Leadership;
