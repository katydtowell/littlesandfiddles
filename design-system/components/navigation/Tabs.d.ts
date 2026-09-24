import React from 'react';

/** Underline-style tab bar for switching between views (e.g. Active / Sold / Returned). */
export interface TabItem { label: string; value: string; }
export interface TabsProps {
  tabs: TabItem[];
  active: string;
  onChange?: (value: string) => void;
}
