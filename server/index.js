import { join } from 'path';

import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';

import webpackConfig from '../webpack.config';

const app = express();

app.use(
  webpackMiddleware(webpack(webpackConfig), {
    publicPath: '/assets/'
  })
);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.listen(3000, () => console.log('Started...'));
