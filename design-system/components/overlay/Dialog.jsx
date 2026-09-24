import React from 'react';
import { Icon } from '../media/Icon';

export function Dialog({ open, title, icon, iconColor, iconTint, children, onClose, footer }) {
  if (!open) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(36,27,34,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: 'var(--surface-card)', borderRadius: 0, boxShadow: 'var(--shadow-lg)', width: 420, maxWidth: '90vw',
        padding: 'var(--space-8)', fontFamily: 'var(--font-body)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
      }}>
        {title ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            {icon ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: '50%', background: iconTint || 'var(--color-primary-tint)', flexShrink: 0 }}>
                <Icon name={icon} color={iconColor || 'var(--color-primary)'} size={22} bold />
              </span>
            ) : null}
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--text-primary)' }}>{title}</h3>
          </div>
        ) : null}
        <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-base)' }}>{children}</div>
        {footer ? <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>{footer}</div> : null}
      </div>
    </div>
  );
}
