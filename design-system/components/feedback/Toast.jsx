import React from 'react';
import { Icon } from '../media/Icon';

const COLORS = { success: 'var(--color-success)', warning: 'var(--color-warning)', danger: 'var(--color-danger)', info: 'var(--color-info)' };
const TINTS = { success: 'var(--color-success-tint)', warning: 'var(--color-warning-tint)', danger: 'var(--color-danger-tint)', info: 'var(--color-info-tint)' };
const TONE_ICON = { success: 'star', warning: 'ticket', danger: 'crossmark', info: 'balloon' };

export function Toast({ tone = 'success', children, onClose }) {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => { const t = setTimeout(() => setShow(true), 10); return () => clearTimeout(t); }, []);
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', borderRadius: 0,
      background: 'var(--surface-card)', boxShadow: 'var(--shadow-lg)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
      color: 'var(--text-primary)', transform: show ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.96)', opacity: show ? 1 : 0,
      transition: 'all var(--duration-bouncy) var(--ease-playful)', maxWidth: 360,
    }}>
      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '50%', background: TINTS[tone] || TINTS.success, flexShrink: 0 }}>
        <Icon name={TONE_ICON[tone] || TONE_ICON.success} color={COLORS[tone] || COLORS.success} size={18} bold />
      </span>
      <span style={{ flex: 1 }}>{children}</span>
      {onClose ? <span onClick={onClose} style={{ cursor: 'pointer', color: 'var(--text-secondary)', fontSize: 15, fontWeight: 700 }}>×</span> : null}
    </div>
  );
}
