import React, { Component, PropTypes } from 'react';
import Radium, { StyleRoot } from 'radium';
import { connect } from 'react-redux';
import { Flash, close } from 'frieze';
import { missing, updated } from '../support/license';
import { signOut, resend } from '@ftbl/session-web';
import { memberSelector, membersSelector, accountsSelector } from '@ftbl/member-web';
import { Header, Footer, Navigation, Nag } from '../components';

@Radium
export class Main extends Component {

  static propTypes = {
    flash: PropTypes.object.isRequired
  } 

  render() {
    const { children, session, member, members, accounts, signOut, flash, close, resend } = this.props;

    const shouldChangePassword = session.user && session.user.shouldChangePassword;

    const styles = {
      base: {
        width: '100%'
      , overflow: 'auto'
      , paddingTop: 20
      , paddingBottom: 40
      , paddingLeft: 20
      , paddingRight: 20
      , '@media (max-width: 639px)': {
          paddingTop: 0
        }
      }
    };

    return (
      <span>
        <Flash flash={flash} onClose={close}/>
        
        <StyleRoot style={{ width: '100%', minHeight: '100%' }}>
          <Header session={session} member={member} onSignOut={signOut} />
          
          <Nag onResend={_ => resend(session.user.email)} shouldVerify={session.user && session.user.verificationCode}
               shouldChangePassword={shouldChangePassword}
               noAccounts={!updated(members.data) && !missing(members.data) && session.user && !session.user.shouldChangePassword && accounts.isFetched && accounts.data.length === 0} 
               licenseUpdated={!shouldChangePassword && updated(members.data)} 
               licenseMissing={!shouldChangePassword && missing(members.data)} />

          <div style={styles.base}>
            {children}
          </div>
        </StyleRoot>

        <Footer/>
      </span>
    );
  }
};

export default connect(state => ({ 
  session: state.session
, member: memberSelector(state)
, members: membersSelector(state)
, accounts: accountsSelector(state)
, flash: state.flash 
}), { signOut, close, resend })(Main);
