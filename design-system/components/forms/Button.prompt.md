Primary action button — pill-shaped, four variants, use `primary` for the one main action per screen.

```jsx
<Button variant="primary" icon="plus">Add to Rack</Button>
<Button variant="secondary">Save Draft</Button>
<Button variant="ghost">Cancel</Button>
<Button variant="danger">Remove Item</Button>
```

Variants: `primary` (forest, main action), `secondary` (mustard, supporting action), `ghost` (outline, low emphasis), `danger` (rust, destructive). Sizes: `sm` `md` `lg`. Pass `icon` with a name from `components/shared/icons.js` to lead with an icon.
