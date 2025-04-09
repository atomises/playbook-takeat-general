
import React from 'react';
import * as LucideIcons from 'lucide-react';

// Define uma tipagem que garante que apenas usamos nomes de ícones que existem na biblioteca Lucide
type IconName = keyof typeof LucideIcons;

export const getIconByName = (name: string, size: number = 24): React.ReactNode => {
  // Verifica se o nome fornecido existe em LucideIcons
  if (name in LucideIcons) {
    // Usa type assertion com 'as' para informar ao TypeScript que este é um IconName válido
    const iconName = name as IconName;
    const IconComponent = LucideIcons[iconName] as React.ElementType;
    
    // Agora o TypeScript sabe que IconComponent é um componente React válido
    return <IconComponent size={size} />;
  }
  
  // Fallback para um ícone padrão se o nome não for encontrado
  return <LucideIcons.HelpCircle size={size} />;
};
