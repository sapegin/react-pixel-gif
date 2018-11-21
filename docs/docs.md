# react-pixel-gif

1×1 pixel GIF component for React — give table layouts another chance!

- Proven technique, known by pioneers of web developments since 1990s
- Blazing fast, don’t make any network requests
- Very small, only 238 bytes minified and gzipped
- Accessible

## Installation

```bash
npm install react-pixel-gif
```

## Props

```jsx noeditor
import Props from 'react-styleguidist/lib/client/rsg-components/Props';
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

```jsx static
import Pixel from 'react-pixel-gif';
<Pixel width={10} height={10} />
```

Table layouts (`Pixel`s are marked with salmon background):

<style>
table {
  margin: 0;
  border-collapse: collapse;
  border: 1px solid gainsboro;
  font-family: Helvetica, sans-serif;
}
td, th {
  padding: 4px;
  border: 1px solid gainsboro;
}
p {
  margin: 0;
}
img {
  background: salmon;
}
</style>

```jsx
import Pixel from 'react-pixel-gif';
<>
  <table>
    <thead>
      <tr>
        <th>
          Kind<br />
          <Pixel width={100} height={1} />
        </th>
        <th>
          Length<br />
          <Pixel width={300} height={1} />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          Python
        </td>
        <td>
          38 parrots and 1 parrot wing¹
        </td>
      </tr>
      <tr>
        <td>
          Python
        </td>
        <td>
          38 parrots and 1 parrot wing¹
        </td>
      </tr>
    </tbody>
  </table>
  <Pixel width={1} height={32} />
  <p><small>¹ A regular domestic parrot</small></p>
</>
```
