import React from 'react';
import { Menu } from '../../../components';

export default _ => {
  const items = [ 
    { to: '/user', title: 'Edit Profile' } 
  , { to: '/user/password', title: 'Change Password' } 
  ];

  return <Menu items={items} style={{fontSize:20, padding: '0 0 15px 0'}} />;
};