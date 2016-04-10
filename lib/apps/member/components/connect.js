import React, { Component, PropTypes } from 'react';
import Account from './account';
import { Heading, Rule } from '../../../components';
import Icon from './icon';

export default class Connect extends Component {
  render() {
    const { disconnect, connectTo, accounts } = this.props;
    
    return (
      <div data-test='connect-form'>
        <Heading>Connect Social Accounts</Heading>

        <Icon network='facebook' colour='#000' onConnect={connectTo} />
        <Icon network='twitter' colour='#000' onConnect={connectTo} />
        <Icon network='google' colour='#000' onConnect={connectTo} />

        <Rule />

        {accounts.data.map(account => 
          <Account key={account.id} account={account} onConnect={connectTo} onDisconnect={disconnect}/>
        )}
      </div>
    );
  }
}
