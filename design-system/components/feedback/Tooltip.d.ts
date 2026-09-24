import React from 'react';

/** Hover tooltip, dark ink background, positioned above or below the trigger. */
export interface TooltipProps {
  children: React.ReactNode;
  label: string;
  position?: 'top' | 'bottom';
}
