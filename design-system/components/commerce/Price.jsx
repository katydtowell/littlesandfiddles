import React from 'react';

export function Price({ price, originalPrice, size = 'md' }) {
  const fontSize = size === 'lg' ? 'var(--text-2xl)' : 'var(--text-lg)';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: '8px', fontFamily: 'var(--font-body)' }}>
      <span style={{ fontSize, fontWeight: 700, color: 'var(--text-primary)' }}>{price == null ? '—' : `$${price.toFixed(2)}`}</span>
      {originalPrice != null ? <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', textDecoration: 'line-through' }}>${originalPrice.toFixed(2)}</span> : null}
    </span>
  );
}
