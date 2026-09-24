import React from 'react';

export function Radio({ label, checked, onChange, name, disabled }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-primary)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}>
      <span style={{
        width: 20, height: 20, borderRadius: '50%', border: `1.5px solid ${checked ? 'var(--color-primary)' : 'var(--surface-border-strong)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'border-color var(--duration-fast)',
      }}>
        {checked ? <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-primary)' }} /> : null}
      </span>
      <input type="radio" name={name} checked={checked} disabled={disabled} onChange={onChange} style={{ display: 'none' }} />
      {label}
    </label>
  );
}
