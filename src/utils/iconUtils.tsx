
import React from 'react';
import * as LucideIcons from 'lucide-react';

type IconSize = number;

export const getIconByName = (name: string, size: IconSize = 24): React.ReactNode => {
  const IconComponent = (LucideIcons as any)[name];
  
  if (IconComponent) {
    return <IconComponent size={size} />;
  }
  
  // Fallback para ícones não encontrados
  return <LucideIcons.HelpCircle size={size} />;
};
