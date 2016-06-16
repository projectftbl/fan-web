import React, { Component, PropTypes } from 'react';
import { reduxForm }  from 'redux-form';
import { Form, Input, Select, TextArea, Button, Message } from '@ftbl/form';
import { Email, Money, Question, User, Location, Menu } from '@ftbl/icons';
import { Heading, Rule } from '@ftbl/component';
import { term, equity, types } from '@ftbl/member-web';
import validate from '../validate/user';

export class Register extends Component {
  render() {
    const { fields, handleSubmit, signup: { error, signingUp }} = this.props;
  
    return (
      <Form onSubmit={handleSubmit} name='register' style={{marginBottom:40}}>
        <Heading>Register a Member</Heading>

        <Input label='Contact Name' field={fields.name} Icon={User} focus={true} />
        <Input label='Contact Email' field={fields.email} Icon={Email} type='email' />

        <Rule colour='#ddd' />

        <Input label='Member Name' field={fields.member} Icon={Location} />
        <Select label='Member Type' field={fields.type} Icon={Menu} data={types} />

        <Rule colour='#ddd' />

        <Input label='New Content Commitment Budget $' field={fields.additional.content} Icon={Money} />
        <Input label='Existing Content Commitment Budget $' field={fields.additional.existing} Icon={Money} />
        <Select label='Annual Content Commitment' field={fields.additional.term} Icon={Menu} data={term} />
        <Select label='Bonus Equity' field={fields.additional.equity} Icon={Menu} data={equity} />
        <TextArea label='Special Terms' field={fields.additional.special} Icon={Question} minRows={4} />

        <Button label={signingUp ? 'Registering...' : 'Register'}
                disabled={signingUp}
                onClick={handleSubmit} name='register' />
        <Message>{error}</Message>
      </Form>
    );
  }
};

export default reduxForm({ 
  form: 'register'
, fields: [ 'name', 'email', 'member', 'type', 'additional.content', 'additional.existing', 'additional.term', 'additional.equity', 'additional.special' ]
, validate 
})(Register);
