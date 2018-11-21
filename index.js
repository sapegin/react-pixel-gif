var React = require('react')
module.exports = function Pixel(p) {
  return React.createElement('img', {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    width: p.width,
    height: p.height,
    style: { display: 'block' },
    alt: ''
  })
}
