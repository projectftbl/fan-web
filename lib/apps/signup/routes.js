import React from 'react';
import { Route } from 'react-router';
import { SignUp, Accept } from './handlers';
import { Welcome } from '../../components';

export default [
  <Route path='signup' key='signup' component={Welcome(SignUp)} />
, <Route path='accept' key='accept' component={Welcome(Accept)} />
];
