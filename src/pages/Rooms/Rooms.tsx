
import React from 'react';
import { Home } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Rooms: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title="Salas"
        description="Reserve e gerencie salas de reunião e espaços compartilhados."
        icon={<Home size={28} />}
      />
      
      <ComingSoon 
        title="Sistema de reserva de salas chegando"
        description="Estamos finalizando o novo sistema de reserva de salas que permitirá visualizar disponibilidade em tempo real, reservar espaços e receber lembretes automáticos."
        icon={<Home size={36} />}
      />
    </PageWrapper>
  );
};

export default Rooms;
