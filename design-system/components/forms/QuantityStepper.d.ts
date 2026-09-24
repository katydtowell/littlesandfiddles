import React from 'react';

/** Pill stepper for adjusting a numeric quantity, used in cart and intake counts. */
export interface QuantityStepperProps {
  value: number;
  min?: number;
  max?: number;
  onChange?: (next: number) => void;
}
