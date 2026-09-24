import React from 'react';

/** Custom-styled checkbox with rounded square indicator. */
export interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}
