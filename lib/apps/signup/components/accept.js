import React, { Component, PropTypes } from 'react';
import { reduxForm }  from 'redux-form';
import { config } from '@ftbl/support';
import { Input, Form, Button, Message } from '@ftbl/form';
import { Heading, Rule } from '@ftbl/component';
import { components } from '@ftbl/member-web';
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

    const content = fields.additional.content.value
        , existing = fields.additional.existing.value
        , term = fields.additional.term.value
        , equity = fields.additional.equity.value
        , special = fields.additional.special.value
        , hasAdditional = missing && (content || existing || term || equity || special);

    const message = missing
    ? <span>
        You are entering into an agreement with us on the terms and conditions set out in the {link} ("SMA").
      </span>
    : <span>The {link} has been updated. Please read and accept the new agreement.</span>;

    return (
      <Form onSubmit={handleSubmit} name='accept'>
        <Heading>{missing ? 'Complete Sign Up' : 'New Social Media Agreement'}</Heading>

        {hasAdditional && <Input field={fields.name} label='Member Name' readOnly={true} />}
        
        <p style={{paddingTop:0}}>{message}</p>

        {hasAdditional && <p style={{paddingBottom:0}}>In addition to the general terms and conditions of the SMA, the following special terms form part of our agreement.</p>}
        {hasAdditional && <components.Additional additional={fields.additional} describe={true} />}

        <p style={{paddingTop:0}}>
          Please confirm you agree to the terms of the SMA by clicking on the button below.
        </p>

        <Button label={changing ? 'Agreeing...' : 'I Agree'}
                disabled={changing}
                onClick={handleSubmit} name='accept' />
        <Message>{error}</Message>
      </Form>
    );
  }
};

export default reduxForm({ 
  form: 'accept'
, fields: [ 'name', 'additional.content', 'additional.existing', 'additional.term', 'additional.equity', 'additional.special' ]
})(Accept);
