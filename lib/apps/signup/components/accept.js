import React, { Component, PropTypes } from 'react';
import { reduxForm }  from 'redux-form';
import { config } from '@ftbl/support';
import { Form, Check, Button, Message } from '@ftbl/form';
import { Heading, Rule } from '@ftbl/component';
import { components } from '@ftbl/member-web';
import validate from '../validate/accept';
import Smla from './smla';

export class Accept extends Component {
  render() {
    const { fields, handleSubmit, updated, missing, members: { error, changing }} = this.props;

    const license = config('license')
        , smla = <Smla license={license} />;

    const link = <a style={{outline:'none',textDecoration:'underline',padding:'0 4px'}} 
                    href={`/docs/sma-${license}.pdf`} target='_blank'>
                  Social Media Agreement
                 </a>;

    const message = missing
    ? <span>Please read and accept the {link} before continuing.</span>
    : <span>The {link} has been updated. Please read and accept the new agreement.</span>;

    return (
      <Form onSubmit={handleSubmit} name='accept'>
        <Heading>Social Media Agreement</Heading>
        
        <p style={{paddingTop:0}}>{message}</p>

        <components.Additional additional={fields.additional} />

        <Check label={smla} field={fields.accepted} />

        <Button label={changing ? 'Accepting...' : 'Accept'}
                disabled={changing}
                onClick={handleSubmit} name='accept' />
        <Message>{error}</Message>
      </Form>
    );
  }
};

export default reduxForm({ 
  form: 'accept'
, fields: [ 'accepted', 'additional.budget', 'additional.term', 'additional.equity' ]
, validate 
})(Accept);
