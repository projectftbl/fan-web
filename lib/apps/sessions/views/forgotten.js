import React, { Component, PropTypes } from 'react';
import { reduxForm }  from 'redux-form';
import { Input, Button } from 'ferox';
import { Email } from 'ickle';
import { validate } from '../validate/user';
import Heading from '../../../components/heading';

export class Forgotten extends Component {

  render() {
    const { fields, handleSubmit } = this.props;
    
    return (
      <form style={{width: '75%'}} onSubmit={handleSubmit} data-test='forgotten-form'>
        <Heading>Reset your password</Heading>

        <Input label='Email' field={fields.email} Icon={Email} focus={true} />

        <Button label='Reset' onClick={handleSubmit} name='reset' />
      </form>
    );
  }
}

export default reduxForm({ form: 'forgotten', fields: [ 'email' ], validate })(Forgotten);