import express from 'express';
import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';

import { AUTH_FACEBOOK } from '../config';

import User from '../models/User';
import AuthLog from '../models/AuthLog';

export default function(app) {
  passport.use(
    new FacebookStrategy(AUTH_FACEBOOK,
    (accessToken, refreshToken, profile, done) => {
      User
        .retrieveProfile(profile)
        .then(user => {
          AuthLog.log(user);
          done(null, user);
        });
    }
  ));

  passport.serializeUser((user, done) => User.serialize(user, done));
  passport.deserializeUser((id, done) => User.deserialize(id, done));

  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['email', 'public_profile']
  }));

  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
  }));
}

