
import React from 'react';
import * as LucideIcons from 'lucide-react';

type IconName = keyof typeof LucideIcons;

export const getIconByName = (name: string, size: number = 24): React.ReactNode => {
  const iconName = name as IconName;
  
  if (iconName in LucideIcons) {
    const Icon = LucideIcons[iconName];
    return <Icon size={size} />;
  }
  
  // Fallback para um ícone padrão se o nome não for encontrado
  return <LucideIcons.HelpCircle size={size} />;
};
