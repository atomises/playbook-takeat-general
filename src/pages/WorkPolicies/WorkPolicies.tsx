
import React from 'react';
import { ClipboardList } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const WorkPolicies: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title="Políticas de Trabalho"
        description="Políticas específicas relacionadas ao dia a dia de trabalho, horários, home office e mais."
        icon={<ClipboardList size={28} />}
      />
      
      <ComingSoon 
        title="Políticas de trabalho em atualização"
        description="Estamos atualizando nossas políticas de trabalho para incluir as novas modalidades híbridas e flexíveis. Em breve você terá acesso a todas as informações."
        icon={<ClipboardList size={36} />}
      />
    </PageWrapper>
  );
};

export default WorkPolicies;
