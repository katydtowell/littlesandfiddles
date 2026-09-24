import React from 'react';

/** Consignment item lifecycle badge: Received → Priced → On the floor → Sold → Paid out (or Returned). */
export interface StatusBadgeProps {
  status: 'received' | 'priced' | 'floor' | 'sold' | 'paid' | 'returned';
}
