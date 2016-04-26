import assign from 'lodash/object/assign';
import { info, error } from 'frieze';
import { push } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { take, put, select } from 'redux-saga/effects';

import { fetch, create, memberSelector
       , FETCH_SUCCESS, UPDATE_SUCCESS, CREATE_SUCCESS, CREATE_FAILED, SET_PRIMARY_SUCCESS } from '../ducks/members';
import { list } from '../ducks/accounts';

import { SUCCESS as SIGNUP_SUCCESS } from '../../sessions/ducks/register';
import { signOn, SIGN_ON_SUCCESS, RELOAD_SUCCESS, VERIFY_SUCCESS } from '../../sessions/ducks/session';

function* fetchMember() {
  yield put(fetch(yield select(state => state.session.user)));
};

export function* update() {
  while(true) {
    yield take(UPDATE_SUCCESS);
    yield put(info('The member information has been updated.'));
  }
};

export function* signUp() {
  while(true) {
    const { meta: { data }} = yield take(SIGNUP_SUCCESS);

    const user = yield select(state => state.register.user);

    yield put(create(assign({}, data, { userId: user.id, name: data.member })));
  }
};

export function* signedUp() {
  while(true) {
    const { meta } = yield take(CREATE_SUCCESS);

    const session = yield select(state => state.session);

    if (session.user) {
      yield put(push('/member'));
    } else {
      const data = yield select(state => state.register.data);
      yield put(signOn(data));
    }

    yield put(info(`You have successfully signed up ${meta.name}.`));
  }
};


export function* setPrimary() {
  while(true) {
    yield take(SET_PRIMARY_SUCCESS);

    const member = yield select(memberSelector);
    yield put(info(`You are now managing ${member.name}.`));
  }
};

export function* createFailed() {
  while(true) {
    yield take(CREATE_FAILED);

    var session = yield select(state => state.session);

    yield put(error('There was an error during sign up. Please try again.'));
  }
};

export function* signedOn() {
  yield* takeLatest(SIGN_ON_SUCCESS, fetchMember);
};

export function* reloaded() {
  yield* takeLatest(RELOAD_SUCCESS, fetchMember);
};

export function* verified() {
  yield* takeLatest(VERIFY_SUCCESS, fetchMember);
};
