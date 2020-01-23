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
<<<<<<< HEAD
  module: {
    //aca establecemos las reglas para cargar nuestros modulos
    rules: [
      {
        test: /\.css$/, // este le dice a webpack que archivos se van a ver afectados por nuestra regla
        use: ['style-loader', 'css-loader'], // le damos la instruccion de que loaders vamos a usar
      },
    ],
  },
=======
>>>>>>> fa88c36e777a9b5c6a8822b3ce44d97c69a10518
}
