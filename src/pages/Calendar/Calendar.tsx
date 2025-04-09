
import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

const Calendar: React.FC = () => {
  return (
    <PageWrapper>
      <SectionHeader
        title="Calendário e Eventos"
        description="Acompanhe todos os eventos, datas importantes e cronograma da empresa."
        icon={<CalendarIcon size={28} />}
      />
      
      <ComingSoon 
        title="Calendário em desenvolvimento"
        description="Estamos aprimorando nosso sistema de calendário para oferecer uma experiência melhor. Em breve você poderá visualizar e filtrar eventos, adicionar lembretes e sincronizar com seu calendário pessoal."
        icon={<CalendarIcon size={36} />}
      />
    </PageWrapper>
  );
};

export default Calendar;
