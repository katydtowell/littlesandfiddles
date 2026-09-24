import React from 'react';
import { Icon } from '../media/Icon';

export function IconButton({ icon, label, variant = 'ghost', size = 32, onClick }) {
  const [hover, setHover] = React.useState(false);
  const bg = variant === 'filled' ? 'var(--color-primary)' : (hover ? 'var(--surface-sunken)' : 'transparent');
  const color = variant === 'filled' ? 'var(--text-on-color)' : 'var(--text-primary)';
  const iconColor = variant === 'filled' ? 'var(--text-on-color)' : '#2B241D';
  return (
    <button
      aria-label={label}
      title={label}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: size, height: size, borderRadius: 'var(--radius-pill)', border: 'none',
        background: bg, color, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', transition: 'background var(--duration-fast) var(--ease-standard)',
      }}
    >
      <Icon name={icon} color={iconColor} size={Math.round(size * 0.6)} />
    </button>
  );
}
