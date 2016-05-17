import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { replace } from 'react-router-redux';
import { Authenticate } from '@ftbl/support';

import { Main, NotFound, Denied, Error } from './handlers';
import { Signup } from './apps/signup/handlers';

import sessions from './apps/sessions/routes';
import signup from './apps/signup/routes';
import user from './apps/user/routes';
import member from './apps/member/routes';
import members from './apps/members/routes';
import faq from './apps/faq/routes';
import content from './apps/content/routes';
import contact from './apps/contact/routes';

const IsAuthenticated = Authenticate({
  sessionSelector: state => state.session.user
, redirectAction: replace
});

export default function(store) {
  return (
    <Route path='/' component={Main}>
      <IndexRoute component={Signup}/>
      
      {sessions}
      {signup}
      
      {user(IsAuthenticated)}
      {member(IsAuthenticated)}
      {members(IsAuthenticated)}
      {faq(IsAuthenticated)}
      {content(IsAuthenticated)}
      {contact(IsAuthenticated)}

      <Route path='error' component={Error}/>
      <Route path='denied' component={Denied}/>
      <Route path='*' component={NotFound}/>
    </Route>
  );
};
