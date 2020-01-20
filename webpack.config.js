const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './index.js',
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash:4].js',
  },

  plugins: [new CleanWebpackPlugin(), new htmlWebpackPlugin()],
}
