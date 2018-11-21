# react-pixel-gif

1×1 pixel GIF component for React — give table layouts another chance!

- Proven technique, known by pioneers of web developments since 1990s
- Blazing fast, don’t make any network requests
- Very small, only 214 bytes minified and gzipped
- Accessible

## Installation

```bash
npm install react-pixel-gif
```

## Props

```jsx noeditor
const Props = require('react-styleguidist/lib/client/rsg-components/Props')
  .default;
<Props
  props={[
    {
      name: 'width',
      type: { name: 'number' },
      description: 'Image width in pixels'
    },
    {
      name: 'height',
      type: { name: 'number' },
      description: 'Image height in pixels'
    }
  ]}
/>;
```

## Examples

Basic usage:

```jsx
<Pixel width={10} height={10} />
```

Table layouts:

```jsx
<Pixel width={10} height={10} />
```
