
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Purchases: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title="Compras"
        description="Sistema de solicitação, aprovação e acompanhamento de compras corporativas."
        icon={<ShoppingCart size={28} />}
      />
      
      <ComingSoon 
        title="Sistema de compras em implementação"
        description="Estamos implementando um novo sistema de compras que permitirá fazer solicitações, acompanhar aprovações e receber notificações sobre o status dos pedidos."
        icon={<ShoppingCart size={36} />}
      />
    </PageWrapper>
  );
};

export default Purchases;
