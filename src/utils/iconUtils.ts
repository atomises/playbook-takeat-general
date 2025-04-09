
import * as LucideIcons from 'lucide-react';
import React from 'react';

// Define a type for the LucideIcons keys
export type IconName = keyof typeof LucideIcons;

// Safely get an icon component by name
export const getIconByName = (iconName: string, size = 24): React.ReactElement | null => {
  // Check if icon exists in LucideIcons
  if (!Object.prototype.hasOwnProperty.call(LucideIcons, iconName)) {
    console.warn(`Icon "${iconName}" not found in Lucide icons`);
    return null;
  }
  
  // Get the icon component safely with type assertion
  const IconComponent = LucideIcons[iconName as IconName] as React.ComponentType<{size?: number}>;
  
  // Verify it's a valid component function
  if (typeof IconComponent !== 'function') {
    console.warn(`Icon "${iconName}" is not a valid component`);
    return null;
  }
  
  // Return the icon as a React element
  return React.createElement(IconComponent, { size });
};
