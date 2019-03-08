const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './build',
    proxy: {
      '/api': 'http://localhost:4400'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), 
  ],
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      },
      {
        test: /\.css$/,
        use: [
          // setup to use CSS modules
          { loader: 'style-loader' },
          { 
            loader: 'css-loader',  
            options: {
              importLoaders: 1,
              modules: true,
              // creates a hash to store all unique CSS values
              localIdentName: '[name]__[local]__[hash:base64:5]'
          
            } 
          },       
        ]
      }
    ],
  },
};
