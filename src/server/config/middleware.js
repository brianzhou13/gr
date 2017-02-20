const morgan = require('morgan');
const bodyParser = require('body-parser');

// webpack
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('../../../webpack.config.js');
const compiler = webpack(webpackConfig);

module.exports = (app, express) => {
  //Print all of the requests to the server
  app.use(morgan('dev'));

  //Reads information from forms ands puts it in a body object
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));


  if(process.env.NODE_ENV === 'DEV_HOT') {
    // webpack HMR setup here
    app.use(webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      // historyApiFallback: true,
      stats: {
        colors: true,
      },
      hot: true,
    }));

    app.use(webpackHotMiddleware(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000,
    }));
  }

  // serves up static items
  app.use(express.static(__dirname + '/../../client'));


  // a logger middleware to check to see waht each request is
  app.use(function(req, res, next) {
    console.log('[LOGGER @ MIDDLEWARE.JS] handling request for: ' + req.url);
    next();
  });

};
