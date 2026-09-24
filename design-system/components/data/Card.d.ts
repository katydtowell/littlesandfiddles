import React from 'react';

/** Generic rounded surface with soft shadow; lifts slightly on hover when interactive. */
export interface CardProps {
  children: React.ReactNode;
  padding?: string;
  interactive?: boolean;
}
