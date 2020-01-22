const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',

  entry: {
    main: './src/index.js',
    uwu: './src/hola.js',
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash:4].js',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
}
