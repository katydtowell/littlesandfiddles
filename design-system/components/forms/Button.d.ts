import React from 'react';

/** Pill/rounded action button in four visual variants. */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Size. @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Optional icon name from components/shared/icons.js, e.g. 'moneybag'. */
  icon?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
}
