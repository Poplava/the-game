import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';

import webpackConfig from '../../webpack.config';

const compiler = webpack(webpackConfig);

export default function(app) {
  app.use(
    webpackMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath
    })
  );
}
