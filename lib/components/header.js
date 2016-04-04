import React, { Component, PropTypes } from 'react';
import { Menu } from 'ickle';
import Session from '../apps/sessions/components/session';

export default class Header extends Component {
  render() {
    const { session, onMenuClick, onSignOut } = this.props;

    const styles = {
      base: {
        position: 'relative'
      , borderBottom: '1px solid #ddd'
      , backgroundColor: '#fafafa'
      , padding: 10
      }
    };

    return (
      <div style={styles.base}>
        
        <a style={{cursor:'pointer'}} onClick={onMenuClick}><Menu /> FTBL</a>
        
        <div style={{ position: 'absolute', right: 10, top: 10 }}>
          <Session session={session} signOut={onSignOut}/>
        </div>
      </div>
    );
  }
}
