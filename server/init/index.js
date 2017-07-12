import express from 'express';

import db from './db';
import webpack from './webpack';
import middleware from './middleware';
import passport from './passport';
import router from './router';

const app = express();

export default function() {
  initialize(app, 'webpack', webpack);
  initialize(app, 'db', db);
  initialize(app, 'middleware', middleware);
  initialize(app, 'passport', passport);
  initialize(app, 'router', router);

  return app;
};

function initialize(app, name, fn) {
  console.log(`Initializing: ${name}...`);
  fn(app);
  console.log(`Done.`);
}
