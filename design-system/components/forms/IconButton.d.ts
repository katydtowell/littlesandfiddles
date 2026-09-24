import React from 'react';

/** Small circular icon-only button for toolbars and table row actions. */
export interface IconButtonProps {
  /** Icon name from components/shared/icons.js. */
  icon: string;
  /** Accessible label (also shown as title tooltip). */
  label: string;
  variant?: 'ghost' | 'filled';
  /** Diameter in px. @default 32 */
  size?: number;
  onClick?: () => void;
}
