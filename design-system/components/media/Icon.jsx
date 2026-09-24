import React from 'react';
import { iconSvgMarkup } from '../shared/icons';

export function Icon({ name, size = 20, color = '#2B241D', bold = false, style }) {
  const markup = iconSvgMarkup(name, color, bold);
  if (!markup) return null;
  return <span style={{ display: 'inline-flex', width: size, height: size, flexShrink: 0, verticalAlign: 'middle', ...style }} dangerouslySetInnerHTML={{ __html: markup }} />;
}
