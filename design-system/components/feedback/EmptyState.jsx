import React from 'react';
import { Icon } from '../media/Icon';

export function EmptyState({ icon = 'popcorn', iconColor = 'var(--color-secondary-hover)', tint = 'var(--color-secondary-tint)', title, description }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-3)', padding: 'var(--space-8) var(--space-4)', background: tint, fontFamily: 'var(--font-body)' }}>
      <Icon name={icon} color={iconColor} size={56} />
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--text-primary)' }}>{title}</div>
      {description ? <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', maxWidth: 320 }}>{description}</div> : null}
    </div>
  );
}
