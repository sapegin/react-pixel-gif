const path = require('path')
module.exports = {
  title: 'react-pixel-gif: 1×1 pixel GIF component for React',
  sections: [
    {
      content: path.join(__dirname, 'docs/docs.md')
    }
    // {
    //   components: 'index.js'
    // }
  ],
  //   getExampleFilename: () => path.join(__dirname, 'docs/Pixel.md'),
  //   getComponentPathLine: () => `import Pixel from 'react-pixel-gif'`,
  moduleAliases: {
    'react-pixel-gif': __dirname
  },
  ribbon: {
    url: 'https://github.com/sapegin/react-pixel-gif'
  },
  usageMode: 'expand',
  showSidebar: false,
  styleguideDir: path.join(__dirname, 'styleguide-build')
}
