import React from 'react';

/** Toggle switch with a bouncy thumb transition, for on/off settings. */
export interface SwitchProps {
  checked: boolean;
  onChange?: (next: boolean) => void;
  label?: string;
  disabled?: boolean;
}
