import React from 'react';

export function Tabs({ tabs = [], active, onChange }) {
  return (
    <div style={{ display: 'flex', gap: '4px', borderBottom: '1.5px solid var(--surface-border)', fontFamily: 'var(--font-body)' }}>
      {tabs.map((t) => (
        <button key={t.value} onClick={() => onChange && onChange(t.value)} style={{
          padding: '10px 18px', border: 'none', background: 'none', cursor: 'pointer',
          fontSize: 'var(--text-base)', fontWeight: active === t.value ? 700 : 600, color: active === t.value ? 'var(--coral-500)' : 'var(--text-secondary)',
          borderBottom: active === t.value ? '2.5px solid var(--coral-500)' : '2.5px solid transparent',
          marginBottom: '-1.5px', transition: 'color var(--duration-fast)',
        }}>{t.label}</button>
      ))}
    </div>
  );
}
