import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from './config.babel';

export default (app) => {
  const webpackCompiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(webpackCompiler, {
    logLevel: 'warn',
    publicPath: '/js',
  }));
  // allow using Webpack hot reloading
  app.use(webpackHotMiddleware(webpackCompiler));
};
