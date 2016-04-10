import React, { Component } from 'react';
import Radium from 'radium';
import Question from './question';

const Section = ({ children, onClick }) => {
  const styles = {
    base: {
      fontSize: '1.3em'
    , cursor: 'pointer'
    }
  };
  return <div style={styles.base} onClick={onClick}>{children}</div>
};

const Questions = Radium(({ faq, toggle }) => {
  const styles = {
    base: {
      maxHeight: 0
    , overflow: 'hidden'
    , transition: 'all 0.4s ease-out'
    }
  , active: {
      maxHeight: 200
    }
  };

  const questions = faq.questions.map(question => 
    <Question key={question.index} section={faq} question={question} toggle={toggle} />
  );

  return (
    <div style={[ styles.base, faq.active && styles.active ]}>
      {questions}
    </div>
  );
});

export default ({ faq, toggle }) => {
  const styles = {
    base: {

    }
  };

  return (
    <div style={styles.base}>
      <Section onClick={() => toggle(faq.index)}>{faq.title}</Section>
      <Questions faq={faq} toggle={toggle} />
    </div>
  );
};