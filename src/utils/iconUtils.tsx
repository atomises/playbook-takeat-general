
import React from 'react';
import * as LucideIcons from 'lucide-react';

// Define a type that ensures we only use icon names that exist in the Lucide library
type IconName = keyof typeof LucideIcons;

export const getIconByName = (name: string, size: number = 24): React.ReactNode => {
  // Check if the provided name exists in LucideIcons
  if (name in LucideIcons) {
    // Use type assertion with 'as' to tell TypeScript this is a valid IconName
    const iconName = name as IconName;
    const IconComponent = LucideIcons[iconName] as React.ElementType;
    
    // Now TypeScript knows IconComponent is a valid React component
    return <IconComponent size={size} />;
  }
  
  // Fallback para um ícone padrão se o nome não for encontrado
  return <LucideIcons.HelpCircle size={size} />;
};
