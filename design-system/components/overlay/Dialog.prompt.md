Modal for confirmations ("Mark item as sold?") and small forms.

```jsx
<Dialog open={true} title="Mark as sold?" icon="pennant" iconColor="var(--kelly-700)" iconTint="var(--kelly-100)" footer={<><Button variant="ghost">Cancel</Button><Button>Confirm</Button></>}>This can't be undone.</Dialog>
```

`icon` pairs a circus-accent glyph (heavy weight, in a pastel-tinted circle via `iconTint`) with the title — use it to add a touch of delight to confirmation dialogs.
