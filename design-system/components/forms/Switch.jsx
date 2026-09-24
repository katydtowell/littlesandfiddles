import React from 'react';

export function Switch({ checked, onChange, label, disabled }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-primary)' }}>
      <span onClick={() => !disabled && onChange && onChange(!checked)} style={{
        width: 40, height: 24, borderRadius: 'var(--radius-pill)', background: checked ? 'var(--color-primary)' : 'var(--ink-300)',
        position: 'relative', transition: 'background var(--duration-base) var(--ease-standard)', flexShrink: 0,
      }}>
        <span style={{
          position: 'absolute', top: 3, left: checked ? 19 : 3, width: 18, height: 18, borderRadius: '50%', background: '#fff',
          boxShadow: 'var(--shadow-sm)', transition: 'left var(--duration-base) var(--ease-playful)',
        }} />
      </span>
      {label}
    </label>
  );
}
