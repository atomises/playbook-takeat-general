
import React from 'react';
import { Clock } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const History: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title="Nossa História"
        description="Conheça a trajetória da nossa empresa desde sua fundação até os dias atuais."
        icon={<Clock size={28} />}
      />
      
      <ComingSoon 
        title="Linha do tempo em construção"
        description="Estamos preparando uma linha do tempo interativa que conta toda a nossa história, com fotos, vídeos e depoimentos. Volte em breve para conferir!"
        icon={<Clock size={36} />}
      />
    </PageWrapper>
  );
};

export default History;
