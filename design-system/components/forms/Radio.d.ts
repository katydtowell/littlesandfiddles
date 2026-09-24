import React from 'react';

/** Radio button for mutually-exclusive choices (e.g. drop-off method). */
export interface RadioProps {
  label?: string;
  checked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  disabled?: boolean;
}
