import React from 'react';
import { Icon } from '../media/Icon';

export function Select({ label, value, onChange, options = [], placeholder }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ fontFamily: 'var(--font-body)', display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
      {label ? <label style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>{label}</label> : null}
      <div style={{
        position: 'relative', border: `1.5px solid ${focus ? 'var(--color-primary)' : 'var(--surface-border)'}`,
        borderRadius: 0, background: 'var(--surface-card)', boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      }}>
        <select
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: '100%', border: 'none', outline: 'none', background: 'transparent', appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none',
            padding: '10px 36px 10px 14px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-primary)',
          }}
        >
          {placeholder ? <option value="">{placeholder}</option> : null}
          {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', display: 'flex' }}><Icon name="caretdown" size={16} color="var(--text-secondary)" /></span>
      </div>
    </div>
  );
}
