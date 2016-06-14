import React, { Component, PropTypes } from 'react';
import { components } from '@ftbl/user-web';
import Connect from './connect';
import Accept from './accept';

const Email = components.EmailNag
    , Password = components.PasswordNag;

export default class Nag extends Component {

  render() {
    const { shouldVerify, shouldChangePassword, noAccounts, licenseMissing, licenseUpdated, onResend } = this.props;

    return (
      <span>
        <Email condition={shouldVerify} onResend={onResend} />
        <Password condition={shouldChangePassword} />
        <Connect condition={noAccounts} />
        <Accept updated={licenseUpdated} missing={licenseMissing} />
      </span>
    );
  }
};
