import React from 'react';
import { Icon } from '../media/Icon';

export function Input({ label, placeholder, value, onChange, type = 'text', icon, error, helpText, disabled }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ fontFamily: 'var(--font-body)', display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
      {label ? <label style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>{label}</label> : null}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        border: `1.5px solid ${error ? 'var(--color-danger)' : (focus ? 'var(--color-primary)' : 'var(--surface-border)')}`,
        borderRadius: 0, padding: '10px 14px', background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
        boxShadow: focus ? 'var(--shadow-focus)' : 'none', transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast)',
      }}>
        {icon ? <Icon name={icon} color="#6B5F52" size={18} /> : null}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ border: 'none', outline: 'none', background: 'transparent', width: '100%', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-primary)' }}
        />
      </div>
      {error ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-danger)' }}>{error}</span> : (helpText ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>{helpText}</span> : null)}
    </div>
  );
}
