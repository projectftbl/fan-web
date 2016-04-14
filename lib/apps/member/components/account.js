import React, { Component, PropTypes } from 'react';
import { Button } from '@ftbl/form';
import { Close, Rss } from '@ftbl/icons';
import Icon from './icon';

const Account = ({ account, onDisconnect }) => {
  if (account == null) return <span/>;

  return (
    <span>
      <a href={account.link} style={{paddingLeft: 0, textDecoration: 'none', color: '#333', fontSize: '1.1em'}} target='_blank'>
        {account.name || account.link}
      </a>
      <a onClick={() => onDisconnect(account)} style={{cursor:'pointer', paddingLeft:10}}>
        <Close style={{marginTop:-4}}/>
      </a>
    </span>
  );
};

export default ({ onConnect, onDisconnect, account }) => {
  return (
    <div style={{marginBottom: 10}}>
      {account.network === 'rss' 
        ? <span style={{padding: '4px 12px 4px 4px'}}>
            <Rss size={20} style={{marginTop:-4}}/>
          </span>
        : <Icon size={24} network={account.network} onConnect={onConnect} style={{marginTop:-4}}/>
      }
      <Account account={account} onDisconnect={onDisconnect} />
    </div>
  );
};
