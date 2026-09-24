import React from 'react';

/** Transient confirmation/error message; enters with the brand's bouncy easing. */
export interface ToastProps {
  tone?: 'success' | 'warning' | 'danger' | 'info';
  children: React.ReactNode;
  onClose?: () => void;
}
