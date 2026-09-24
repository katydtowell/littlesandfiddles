import React from 'react';

/** Removable filter/category chip (size, brand, color). */
export interface TagProps {
  children: React.ReactNode;
  onRemove?: () => void;
  color?: string;
  textColor?: string;
}
