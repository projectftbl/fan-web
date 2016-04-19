import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { Member, Profile, Connect, Connections } from './handlers';

export default function(Authorize) {
  return (
    <Route path='member' component={Authorize()(Member)}>
      <IndexRoute component={Profile}/>
      <Route path='profile' component={Profile}/>
      <Route path='connect' component={Connect}/>
      <Route path='connections' component={Connections}/>
    </Route>
  );
};