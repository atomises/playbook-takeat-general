
import React from 'react';
import { Package } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Product: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title="Nosso Produto"
        description="Conheça em detalhes os produtos e serviços que oferecemos ao mercado."
        icon={<Package size={28} />}
      />
      
      <ComingSoon 
        title="Catálogo de produtos em criação"
        description="Estamos preparando um catálogo completo e interativo com todos os nossos produtos e serviços, casos de uso, benefícios e depoimentos de clientes."
        icon={<Package size={36} />}
      />
    </PageWrapper>
  );
};

export default Product;
