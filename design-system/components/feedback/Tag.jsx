import React from 'react';

export function Tag({ children, onRemove, color = 'var(--color-primary-tint)', textColor = 'var(--color-primary)', border }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '5px 8px', borderRadius: 'var(--radius-pill)', minWidth: '48px',
      background: color, color: textColor, border: border ? `1px solid ${border}` : 'none', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 500,
    }}>
      {children}
      {onRemove ? <span onClick={onRemove} style={{ cursor: 'pointer', fontSize: 13, fontWeight: 700, padding: '0 2px' }}>×</span> : null}
    </span>
  );
}
