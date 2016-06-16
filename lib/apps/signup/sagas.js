import { take, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push, LOCATION_CHANGE } from 'react-router-redux';
import { sagas } from '@ftbl/signup-web';
import { membersSelector, FETCH_MEMBER_SUCCESS, UPDATE_SUCCESS } from '@ftbl/member-web';
import { updated, missing } from '../../support/license';

function* shouldRedirect(path) {
  if (path === '/faq') return false;
  
  const members = yield select(state => membersSelector(state))
      , shouldChangePassword = yield select(state => state.session.user && state.session.user.shouldChangePassword === true);

  return !shouldChangePassword && (updated(members.data) || missing(members.data));
};

export function* membersFetched() {
  while(true) {
    yield take(FETCH_MEMBER_SUCCESS);
    
    if (yield shouldRedirect()) yield put(push('/accept'));
  }
};

export function* locationChanged() {
  while(true) {
    const { payload } = yield take(LOCATION_CHANGE);
    
    if (yield shouldRedirect(payload.pathname)) yield put(push('/accept'));
  }
};

export function* memberUpdated() {
  while(true) {
    const { meta } = yield take(UPDATE_SUCCESS);
    
    if (meta.data.accepted) yield put(push('/member/connect'));
  }
};

export default sagas.concat(memberUpdated, membersFetched, locationChanged);