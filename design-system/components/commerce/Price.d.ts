import React from 'react';

/** Displays a price in the display face, with an optional struck-through original price. */
export interface PriceProps {
  price: number;
  originalPrice?: number;
  size?: 'md' | 'lg';
}
