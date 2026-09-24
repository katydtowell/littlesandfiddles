import React from 'react';
import { Icon } from '../media/Icon';

const SIZES = {
  sm: { padding: '8px 16px', fontSize: 'var(--text-sm)' },
  md: { padding: '12px 22px', fontSize: 'var(--text-base)' },
  lg: { padding: '15px 28px', fontSize: 'var(--text-md)' },
};

const VARIANTS = {
  primary: { background: 'var(--color-primary)', color: 'var(--text-on-color)', border: '1px solid transparent' },
  secondary: { background: 'transparent', color: 'var(--color-primary)', border: '2px solid var(--color-primary)' },
  ghost: { background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--ink-300)' },
  danger: { background: 'var(--color-danger)', color: 'var(--text-on-color)', border: '1px solid transparent' },
};

const HOVER = {
  primary: 'var(--color-primary-hover)',
  secondary: 'var(--surface-sunken)',
  ghost: 'var(--surface-sunken)',
  danger: '#9c2a20',
};

const ICON_COLOR = { primary: 'var(--text-on-color)', secondary: 'var(--color-primary)', ghost: 'var(--text-primary)', danger: '#F5EFE2' };

export function Button({ children, variant = 'primary', size = 'md', icon, disabled = false, onClick, type = 'button' }) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const bg = hover && !disabled && HOVER[variant] ? HOVER[variant] : v.background;
  const secondaryHover = variant === 'secondary' && hover && !disabled;
  const textColor = secondaryHover ? 'var(--color-primary-hover)' : v.color;
  const border = secondaryHover ? '2px solid var(--color-primary-hover)' : v.border;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        borderRadius: 0,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        transition: `transform var(--duration-fast) var(--ease-standard), background var(--duration-base) var(--ease-standard)`,
        transform: active ? 'scale(0.97)' : 'scale(1)',
        ...v,
        ...s,
        background: bg,
        color: textColor,
        border,
      }}
    >
      {icon ? <Icon name={icon} color={ICON_COLOR[variant]} bold size={size === 'lg' ? 22 : size === 'sm' ? 16 : 18} /> : null}
      {children}
    </button>
  );
}
