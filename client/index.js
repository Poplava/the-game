import React from 'react';
import { render } from 'react-dom';

const username = window.__INITIAL_STATE.user ? window.__INITIAL_STATE.user.displayName : 'GUEST';
render(
  <h1>Hello, world: {username}</h1>,
  document.getElementById('root')
);
