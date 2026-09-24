import React from 'react';

/** Centered modal dialog with a translucent ink scrim. */
export interface DialogProps {
  open: boolean;
  title?: string;
  /** Circus-accent icon shown left of the title, e.g. "pennant". */
  icon?: string;
  /** Fill color for the icon, e.g. "var(--kelly-700)". Not clickable, so not tied to --color-primary. */
  iconColor?: string;
  /** Pastel circle background behind the icon. */
  iconTint?: string;
  children: React.ReactNode;
  onClose?: () => void;
  footer?: React.ReactNode;
}
