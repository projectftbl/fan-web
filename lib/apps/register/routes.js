import React from 'react';
import { Route } from 'react-router';
import { Register } from './handlers';

export default function(Authorize) {
  return <Route path='register' component={Authorize()(Register)} />;
};