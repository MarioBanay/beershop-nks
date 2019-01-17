const path = require("path");

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, '.')
    },
    {
      test: /\.css$/,
      loader: 'style-loader'
    },
    {
      test: /\.css$/,
      loader: 'css-loader',
      query: {
        modules: true,
        localIdentName: '[name]__[local]___[hash:base64:5]'
      }
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {}
        }
      ]
    }
    ]
  }
};