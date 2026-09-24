import React from 'react';

/** Centered placeholder for a zero-results view (empty inventory, no search matches, empty cart). */
export interface EmptyStateProps {
  /** Circus-accent icon, e.g. "popcorn", "balloon". Defaults to "popcorn". */
  icon?: string;
  /** Fill color for the icon. Defaults to var(--color-secondary-hover). */
  iconColor?: string;
  /** Background tint behind the whole state. Pair with the icon's hue, e.g. var(--sky-100) with var(--sky-700). Defaults to var(--color-secondary-tint). Pass "transparent" for none. */
  tint?: string;
  title: string;
  description?: string;
}
