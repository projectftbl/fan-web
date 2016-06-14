import React, { Component, PropTypes } from 'react';
import { reduxForm }  from 'redux-form';
import { config } from '@ftbl/support';
import { Form, Input, Select, Check, Button, Message } from '@ftbl/form';
import { Email, Question, User, Location, Menu } from '@ftbl/icons';
import { Heading, Rule } from '@ftbl/component';
import { types } from '@ftbl/member-web';
import validate from '../validate/user';
import Smla from './smla';

export class SignUp extends Component {
  render() {
    const { fields, handleSubmit, signup: { error, signingUp }} = this.props;

    const license = config('license')
        , smla = <Smla license={license} />;
  
    return (
      <Form onSubmit={handleSubmit} name='signup'>
        <Heading>Sign Up</Heading>

        <Input label='Your Name' field={fields.name} Icon={User} focus={true} />
        <Input label='Your Email' field={fields.email} Icon={Email} type='email' />
        <Input label='Password' field={fields.password} Icon={Question} type='password' />

        <Rule colour='#ddd' />

        <Input label='Member Name' field={fields.member} Icon={Location} />
        <Select label='Member Type' field={fields.type} Icon={Menu} data={types} />

        <Check label={smla} field={fields.smla} />
        <Check label='I am not a robot' field={fields.robot} />

        <Button label={signingUp ? 'Signing Up...' : 'Sign Up'}
                disabled={signingUp}
                onClick={handleSubmit} name='signup' />
        <Message>{error}</Message>
      </Form>
    );
  }
};

export default reduxForm({ 
  form: 'signup'
, fields: [ 'name', 'email', 'password', 'member', 'type', 'smla', 'robot' ]
, validate 
})(SignUp);
