import React from 'react';
import { Nav } from '../../../components';

export default _ => {
  const items = [ 
    { to: '/member', title: 'Edit Member' } 
  , { to: '/member/connect', title: 'Connect Accounts' } 
  ];

  return <Nav items={items} />;
};