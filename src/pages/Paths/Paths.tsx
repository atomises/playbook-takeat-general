
import React from 'react';
import { GitBranch } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Paths: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title="Trilhas"
        description="Explore os caminhos de desenvolvimento profissional disponíveis para sua carreira."
        icon={<GitBranch size={28} />}
      />
      
      <ComingSoon 
        title="Trilhas de carreira em desenvolvimento"
        description="Estamos desenvolvendo um sistema interativo de trilhas de carreira com competências, níveis e orientações para seu desenvolvimento profissional."
        icon={<GitBranch size={36} />}
      />
    </PageWrapper>
  );
};

export default Paths;
