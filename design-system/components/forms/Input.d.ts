import React from 'react';

/** Labeled text input with optional leading icon, help text, and error state. */
export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  /** Icon name from components/shared/icons.js, shown leading the field. */
  icon?: string;
  error?: string;
  helpText?: string;
  disabled?: boolean;
}
