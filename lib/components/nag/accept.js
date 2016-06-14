import React from 'react';
import { Link } from 'react-router';
import { Err } from '@ftbl/icons';
import { Nag } from '@ftbl/component';

export default ({ updated, missing }) => {
  const text = missing 
  ? 'Please accept the Social Media agreement below before continuing.'
  : 'The Social Media Agreement has been updated. Please accept the new agreement below.'

  return (
    <Nag condition={updated || missing} Icon={Err} colour='#a95252'>
      <Link to='/accept' style={{color:'inherit'}}>{text}</Link>
    </Nag>
  );
}