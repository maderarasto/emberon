# Emberon

Emberon is frontend javascript library for building user interfaces and is inspired by React JS library.
- **inspired** by React's reactivity using virtual nodes and reconciliation between current nodes and new nodes. This way application isn't rendered as whole but only nodes that need it.
- application is structured into separate **components** with its own structured declared with **JSX structure** for easier connection between HTML and data.
- each component can have its own properties and state so changing them it will update their content.

## Installation
For using **Emberon** for your user interfaces your project needs to have installed libraries **Babel** and **Webpack**.
- **Babel:** with Babel JSX can be transformed into format that **Emberon** would understand and at render stage it can be converted into HTML elements.
- **Webpack:** using Webpack offers easy way to use **Emberon** as frontend application in browser and also offers different loaders for your assets in components.

### Babel
You can install babel packages and necessary plugins with following command:
```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env babel-plugin-transform-jsx
```

After successful installation you will need to create a babel config file `babel.config.json` in your root directory of project. This is how it should look like:
```json
{
  "presets": ["@babel/preset-env"],
  "plugins": [
    "./node_modules/emberon/scripts/babel-plugin-remove-jsx-comments.js",
    ["transform-jsx", {
      "useVariables": true
    }]
  ]
}
```

### Webpack
You can install webpack packages and necessary loaders with following command:
```bash
npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader file-loader style-loader css-loader
```

After successful installation you will need to create a webpack config file `webpack.config.js` in your root directory of project. This is how it should look like:
```javascript
const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'public/assets'),
    }
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  devtool: 'inline-source-map'
}
```

### Compiling files
After **Babel** and **Webpack** are successfully configured you can build your build with following command:
```bash
# Simple compile
webpack

# Compiling files for development
webpack --mode development

# Compiling files for production
webpack --mode production
```

You can also add these commands as scripts into your `package.json`:
```json
{
  "scripts": {
    "build": "webpack --mode development",
    "prod": "webpack --mode production"
  }
}
```

Now with these scripts you can run these scripts simply with following commands:
```bash
# For development
npm run build

# For production
npm run prod
```