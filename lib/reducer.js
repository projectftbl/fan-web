import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as form } from 'redux-form';
import { reducer as local } from 'redux-react-local';
import flash from 'frieze';

import entities from './ducks/entities';
import menu from './ducks/menu';
import io from './ducks/io';

import user from './apps/user/reducer';
import member from './apps/member/reducer';
import members from './apps/members/reducer';
import contact from './apps/contact/reducer';
import faq from './apps/faq/reducer';

import { default as sessions, signOnReducer as signon } from './apps/sessions/reducer';

export default combineReducers({
  routing: routerReducer
, form: form.plugin({ signon })
, local
, flash
, entities
, menu
, io

, ...sessions

, user
, member
, members
, faq
, contact
});