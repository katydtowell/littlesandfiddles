import React from 'react';
import { Icon } from '../media/Icon';

export function Checkbox({ label, checked, onChange, disabled }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-primary)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}>
      <span style={{
        width: 20, height: 20, borderRadius: 0, border: `1.5px solid ${checked ? 'var(--color-primary)' : 'var(--surface-border-strong)'}`,
        background: checked ? 'var(--color-primary)' : 'var(--surface-card)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background var(--duration-fast), border-color var(--duration-fast)', flexShrink: 0,
      }}>
        {checked ? <Icon name="checkmark" size={13} color="#fff" bold /> : null}
      </span>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} style={{ display: 'none' }} />
      {label}
    </label>
  );
}
