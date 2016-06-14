import React, { Component, PropTypes } from 'react';
import { reduxForm }  from 'redux-form';
import { Form, Input, Select, Check, Button, Message } from '@ftbl/form';
import { Email, Question, User, Location, Menu, Pdf } from '@ftbl/icons';
import { Heading, Rule } from '@ftbl/component';
import { budget, term, equity, types } from '@ftbl/member-web';
import validate from '../validate/user';

export class Register extends Component {
  render() {
    const { fields, handleSubmit, signup: { error, signingUp }} = this.props;
  
    return (
      <Form onSubmit={handleSubmit} name='signup' style={{marginBottom:40}}>
        <Heading>Register a Member</Heading>

        <Input label='Contact Name' field={fields.name} Icon={User} focus={true} />
        <Input label='Contact Email' field={fields.email} Icon={Email} type='email' />

        <Rule colour='#ddd' />

        <Input label='Member Name' field={fields.member} Icon={Location} />
        <Select label='Member Type' field={fields.type} Icon={Menu} data={types} />

        <Rule colour='#ddd' />

        <Select label='Content Commitment Budget' field={fields.additional.budget} Icon={Menu} data={budget} />
        <Select label='Annual Content Commitment' field={fields.additional.term} Icon={Menu} data={term} />
        <Select label='Bonus Equity' field={fields.additional.equity} Icon={Menu} data={equity} />

        <Button label={signingUp ? 'Registering...' : 'Register'}
                disabled={signingUp}
                onClick={handleSubmit} name='signup' />
        <Message>{error}</Message>
      </Form>
    );
  }
};

export default reduxForm({ 
  form: 'signup'
, fields: [ 'name', 'email', 'member', 'type', 'additional.budget', 'additional.term', 'additional.equity' ]
, validate 
})(Register);
