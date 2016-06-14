import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { signUp } from '@ftbl/signup-web';
import Form from '../components/register';

@Radium
export class Register extends Component {
  constructor(props) {
    super(props);

    this.signUp = this.signUp.bind(this);
  }

  signUp(data) {
    data.notOwned = true;
    this.props.signUp(data);
  }

  render() {
    const styles={
      base: {
        margin: '0 auto'
      , width: '60%'
      , minWidth: 400
      , paddingBottom: 20
      , '@media (max-width: 639px)': {
          margin: 0
        , width: '100%'
        , minWidth: 0
        }
      }
    };

    return (
      <div style={styles.base}>
        <Form {...this.props} onSubmit={this.signUp} />
      </div>
    );
  }
}

export default connect(state => ({ signup: state.signup }), { signUp })(Register);
