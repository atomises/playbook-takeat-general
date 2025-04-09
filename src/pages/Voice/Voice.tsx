
import React from 'react';
import { MessageSquare } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Voice: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title="Tom de Voz"
        description="Diretrizes para comunicação e identidade da marca em diferentes canais e contextos."
        icon={<MessageSquare size={28} />}
      />
      
      <ComingSoon 
        title="Guia de tom de voz em elaboração"
        description="Estamos elaborando um guia completo de tom de voz com exemplos práticos, casos de uso e exemplos para diferentes canais de comunicação."
        icon={<MessageSquare size={36} />}
      />
    </PageWrapper>
  );
};

export default Voice;
