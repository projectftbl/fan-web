import React from 'react';
import { Menu, User } from '@ftbl/icons';
import { authorize, Manage } from '@ftbl/support';
import Search from './search';

export default ({ session, member: { name = '', id } = {}, onSignOut }) => {

  const main = [ 
    { name: 'admin', Icon: Menu, claim: 'read member' 
    , submenu: [ 
        { to: '/members', title: 'View Members' } 
      , { to: '/api/members/csv?limit=1000', active: false, title: 'Download Member Data' } 
      , { divider: true }
      , { to: '/register', title: 'Register a Member' } 
      ]
    }
  , { component: <Search />, claim: 'read member' }
  ];

  const user = [
    { to: '/signup', title: 'Sign Up', authenticated: false }
  , { to: '/signon', title: 'Sign On', authenticated: false }

  , { to: '/member', title: 'Manage Member', indexLink: false, authenticated: true }
  , { to: '/user', title: `${session.user && session.user.name}`, indexLink: false, authenticated: true }
  , { title: 'Sign Out', onClick: _ => onSignOut(session.user.id), authenticated: true }

  // , { name: 'member', title: `Manage ${name}`, align: 'right', indexLink: false, authenticated: true
  //   , submenu: [
  //       { to: '/member/select', title: 'Switch Member', indexLink: true, authenticated: true }
  //     , { divider: true }
  //     , { to: '/member', title: `Edit ${name}`, indexLink: true, authenticated: true }
  //     , { to: '/member/connect', title: 'Connect Accounts', indexLink: true, authenticated: true }
  //     , { to: '/member/access', title: 'Manage Access', indexLink: true, claim: `update ${id}` }
  //     , { divider: true }
  //     , { to: '/member/add', title: 'Register New Member' }
  //     ]
  //   }
  // , { name: 'user', align: 'right', Icon: User, indexLink: false, authenticated: true
  //   , submenu: [
  //       { to: '/user', title: 'Edit Settings', authenticated: true }
  //     , { to: '/user/password', title: 'Change Password', authenticated: true }
  //     , { divider: true }
  //     , { title: 'Sign Out', onClick: _ => onSignOut(session.user.id), active: false, authenticated: true }
  //     ]
  //   }
  ];

  return { main, user };
};