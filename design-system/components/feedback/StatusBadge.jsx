import React from 'react';
import { Icon } from '../media/Icon';

const STAGES = {
  received: { label: 'Received', tone: 'neutral' },
  priced: { label: 'Priced', tone: 'primary' },
  floor: { label: 'On the floor', tone: 'primary' },
  sold: { label: 'Sold', tone: 'success', icon: 'ticket' },
  paid: { label: 'Paid out', tone: 'success', icon: 'moneybag' },
  returned: { label: 'Returned', tone: 'warning' },
};

const TONES = {
  neutral: { bg: 'var(--ink-100)', fg: 'var(--ink-700)' },
  primary: { bg: 'var(--color-info-tint)', fg: 'var(--color-info)' },
  success: { bg: 'var(--color-success-tint)', fg: 'var(--color-success)' },
  warning: { bg: 'var(--color-warning-tint)', fg: 'var(--color-warning)' },
};

export function StatusBadge({ status }) {
  const s = STAGES[status] || STAGES.received;
  const t = TONES[s.tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', borderRadius: 'var(--radius-pill)',
      background: t.bg, color: t.fg, fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 600,
    }}>
      {s.icon ? <Icon name={s.icon} color={t.fg} size={14} bold /> : <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.fg }} />}
      {s.label}
    </span>
  );
}
