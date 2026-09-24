import React from 'react';

export function QuantityStepper({ value = 1, min = 0, max = 99, onChange }) {
  const dec = () => onChange && onChange(Math.max(min, value - 1));
  const inc = () => onChange && onChange(Math.min(max, value + 1));
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', border: '1.5px solid var(--surface-border)', borderRadius: 'var(--radius-pill)', overflow: 'hidden', fontFamily: 'var(--font-body)' }}>
      <button onClick={dec} style={{ width: 32, height: 32, border: 'none', background: 'var(--surface-sunken)', cursor: 'pointer', fontSize: 16, color: 'var(--text-primary)' }}>−</button>
      <span style={{ width: 36, textAlign: 'center', fontWeight: 600, fontSize: 'var(--text-base)' }}>{value}</span>
      <button onClick={inc} style={{ width: 32, height: 32, border: 'none', background: 'var(--surface-sunken)', cursor: 'pointer', fontSize: 16, color: 'var(--text-primary)' }}>+</button>
    </div>
  );
}
