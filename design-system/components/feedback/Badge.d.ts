import React from 'react';

/** Small pill label for counts/states. Uppercase, letter-spaced eyebrow style. */
export interface BadgeProps {
  children: React.ReactNode;
  tone?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger';
}
