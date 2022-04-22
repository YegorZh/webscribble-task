const prod = process.env.NODE_ENV === 'production';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts'],
  },
  devServer: {
    watchFiles: [path.resolve(__dirname, 'index.html')],
  },
  // devtool: prod ? undefined : 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
};
