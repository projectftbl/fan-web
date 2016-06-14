import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signUp } from '@ftbl/signup-web';
import Form from '../components/signup';

export class SignUp extends Component {
  render() {
    const { signUp } = this.props;

    return (
      <Form {...this.props} onSubmit={signUp} />
    );
  }
}

export default connect(state => ({ signup: state.signup }), { signUp })(SignUp);
