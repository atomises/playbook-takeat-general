
import React from 'react';
import { FileText } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Policies: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title="Políticas e Regulamentos"
        description="Acesse todas as políticas, regulamentos e documentos oficiais da empresa."
        icon={<FileText size={28} />}
      />
      
      <ComingSoon 
        title="Biblioteca de políticas em organização"
        description="Estamos organizando nossa biblioteca completa de políticas e regulamentos para facilitar sua consulta. Em breve você terá acesso a todos os documentos com sistema de busca avançada."
        icon={<FileText size={36} />}
      />
    </PageWrapper>
  );
};

export default Policies;
