import React from 'react';

export function Tooltip({ children, label, position = 'top' }) {
  const [show, setShow] = React.useState(false);
  const pos = { top: { bottom: '125%', left: '50%', transform: 'translateX(-50%)' }, bottom: { top: '125%', left: '50%', transform: 'translateX(-50%)' } }[position] || {};
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show ? (
        <span style={{
          position: 'absolute', ...pos, background: 'var(--ink-900)', color: '#fff', padding: '6px 10px', borderRadius: 'var(--radius-sm)',
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', whiteSpace: 'nowrap', boxShadow: 'var(--shadow-md)', zIndex: 10,
        }}>{label}</span>
      ) : null}
    </span>
  );
}
