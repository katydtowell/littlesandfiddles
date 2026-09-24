Simple line icon from Phosphor's "light" weight (https://phosphoricons.com) — lightweight single-stroke outlines, not cartoony or filled. Self-hosted as inline SVG path data (no external CDN, no network dependency). Pass `color` as a literal hex string matching a token's value — it sets `currentColor` on the SVG.

```jsx
<Icon name="moneybag" size={28} color="#2F5233" />
```

Registry lives in `components/shared/icons.js` (`ICON_PATHS`) — a curated set of 13 inline-SVG icons; add new entries there as raw SVG shape markup (24x24 viewBox, stroke-width 1.5). Small functional glyphs (close, check, caret, arrow, "more") stay as plain text characters, not icons.
