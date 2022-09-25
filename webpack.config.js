const dotenv = require('dotenv');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

dotenv.config();

const mode = process.env.APP_MODE;

const config = {
  mode,
  entry: './src/client/index.js',
  resolve: {
    extensions: ['.js', '.jsx', 'css', 'scss'],
  },
  output: {
    filename: 'index.js',
    path: path.join(path.resolve(path.dirname('')), 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
          /webpack.config.js/,
        ],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Cache-Control, Content-Type, Accept',
      'Access-Control-Allow-Credentials': 'true',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
    }),
    new Dotenv(),
  ],

};

module.exports = config;
