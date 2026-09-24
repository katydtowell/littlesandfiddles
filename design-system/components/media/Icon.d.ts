import React from 'react';

/** Renders a named line icon. Self-hosted Phosphor "light"-weight icon (real path data, no external CDN) — registry in components/shared/icons.js. */
export interface IconProps {
  name: string;
  /** Pixel size (square). @default 20 */
  size?: number;
  /** Stroke color as a literal hex string (baked server-side by Iconify — CSS vars won't resolve). @default '#2B241D' (ink-900) */
  color?: string;
  style?: React.CSSProperties;
}
