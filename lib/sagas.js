import createSagaMiddleware from 'redux-saga';
import { sagas as io } from '@ftbl/io';
import { sagas as session } from '@ftbl/session-web';
import { sagas as user } from '@ftbl/user-web';
import { sagas as contact } from '@ftbl/contact-web';
import { sagas as member } from '@ftbl/member-web';
import { sagas as members } from '@ftbl/members-web';

import signup from './apps/signup/sagas';

export default createSagaMiddleware(...io, ...session, ...signup, ...member, ...members, ...user, ...contact);