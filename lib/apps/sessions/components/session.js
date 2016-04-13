import React from 'react';
import { Nav } from '../../../components';

export default ({ session, signOut }) => {
  const signedOn = [
    { to: '/user', title: session.user && session.user.name }
  , {              title: 'Sign Out', onClick: _ => signOut(session.user.id) }
  ];
  
  const notSignedOn = [
    { to: '/signup', title: 'Sign Up' }
  , { to: '/signon', title: 'Sign On' }
  ];

  return <Nav items={session.user == null ? notSignedOn : signedOn} style={{ fontSize: '0.8em' }} />;
};
