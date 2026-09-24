import React from 'react';

const TONES = {
  neutral: { bg: 'var(--ink-100)', fg: 'var(--ink-700)' },
  primary: { bg: 'var(--color-info-tint)', fg: 'var(--color-info)' },
  success: { bg: 'var(--color-success-tint)', fg: 'var(--color-success)' },
  warning: { bg: 'var(--color-warning-tint)', fg: 'var(--color-warning)' },
  danger: { bg: 'var(--color-danger-tint)', fg: 'var(--color-danger)' },
};

export function Badge({ children, tone = 'neutral' }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', padding: '4px 12px', borderRadius: 'var(--radius-pill)',
      background: t.bg, color: t.fg, fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 600,
      letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase',
    }}>{children}</span>
  );
}
