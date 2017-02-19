var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/client');

var config = {
  entry: [
    'webpack-hot-middleware/client',
    APP_DIR + '/index.js',
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/static/', // may need 'assets' here
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  externals: { // these will help enzyme work properly
    'cheerio': 'window', // importing the cheerio library
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'react/addons': true,
  },
  // module: {
  //   loaders: [
  //     {
  //       test: /\.jsx?/,
  //       loader: 'react-hot-loader!babel-loader',
  //       // loaders: ['react-hot', 'babel'],
  //       exclude: /(node_modules)/,
  //     },
  //     {
  //       test: /\.css$/,
  //       loader: 'style-loader!css-loader',
  //     },
  //     { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
  //       loader: 'url-loader?limit=100000',
  //     },
  //   ],
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // include: APP_DIR,
        // loader: 'react-hot!babel',
        use: [
          'react-hot-loader',
          'babel-loader',
        ],
        // loaders: ['babel-loader', 'react-hot'], // actually different  
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            // 'resolve-url-loader' 
          ]
      },
    ]
  }
};

module.exports = config;

