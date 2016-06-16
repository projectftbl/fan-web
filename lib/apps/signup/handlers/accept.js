import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { update, memberSelector, membersSelector } from '@ftbl/member-web';
import { updated, missing } from '../../../support/license';
import Form from '../components/accept';

export class Accept extends Component {
  constructor(props) {
    super(props);
    this.accept = this.accept.bind(this);
  }

  accept(data) {
    const { members, update } = this.props;

    data.accepted = true;

    members.data.forEach(member => {
      update(member, data);
    });
  }

  render() {
    const { member, members } = this.props;

    return (
      <Form {...this.props} initialValues={member}
            updated={updated(members.data)} missing={missing(members.data)} onSubmit={this.accept} />
    );
  }
};

export default connect(state => ({ members: membersSelector(state), member: memberSelector(state) }), { update })(Accept);
