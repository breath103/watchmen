var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]', {
			disable: false,
			allChunks: true
		})
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
  				'style',
  				'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
  				{
  					publicPath: '../'
  				}
  			)
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
  				'style',
  				'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!sass',
  				{
  					publicPath: '../'
  				}
  			)
      },
    ]
  }
};
