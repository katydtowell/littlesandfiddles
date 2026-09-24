import React from 'react';

/** Labeled native select with brand-styled chrome. */
export interface SelectOption { label: string; value: string; }
export interface SelectProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  placeholder?: string;
}
