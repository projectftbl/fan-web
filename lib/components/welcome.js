import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { local } from 'redux-react-local';
import { Heading } from '@ftbl/component';
import color from 'color';

const Faq = Radium((_) => {
  const styles = {
    base: {
      display: 'inline-block'
    , borderRadius: 3
    , fontSize: 20
    , backgroundColor: '#2185d0'
    , textAlign: 'center'
    , padding: '10px 20px'
    , transition: 'all 250ms ease-in'
    , ':hover': {
        backgroundColor: color('#2185d0').darken(0.1).hexString()
      }
    }
  , wrapper: {
      margin: '0 auto'
    , textAlign: 'center'
    , '@media (max-width: 639px)': {
        margin: 0
      , textAlign: 'left'
      }
    }
  , link: {
      color: '#fff'
    , textDecoration: 'none'
    , outline: 'none'
    , fontWeight: 300
    , textShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
    }
  };

  return (
    <div style={styles.wrapper}>
      <span style={styles.base}>
        <Link to='/faq' style={styles.link}>Read the FAQ</Link>
      </span>
    </div>
  );
});

const Para = Radium(({ children }) => {
  const styles = {
    base: {
      margin: '0 auto'
    , textAlign: 'center'
    , paddingTop: 0
    , paddingBottom: 20
    , '@media (max-width: 639px)': {
        margin: 0
      , textAlign: 'left'
      , paddingBottom: 10
      }
    }
  };

  return <p style={styles.base}>{children}</p>
});

const Children = Radium(({ children }) => {
  const styles = {
    base: {
      marginLeft: '50%'
    , paddingLeft: 20
    , paddingBottom: 20
    , height: '100%'
    , position: 'relative'
    , '@media (max-width: 639px)': {
        marginLeft: 0
      , paddingLeft: 0
      }
    , '@media (min-width: 1024px)': {
        paddingLeft: 30
      , paddingRight: 10
      }
    }
  };

  return <div style={styles.base}>{children}</div>
});

const Title = Radium(({ children }) => {
  const styles = {
    base: {
      margin: '0 auto'
    , textAlign: 'center'
    , '@media (max-width: 639px)': {
        margin: 0
      , textAlign: 'left'
      , paddingBottom: 10
      }
    }
  };

  return <Heading style={styles.base}>{children}</Heading>
});

const Blurb = Radium(({ children, active }) => {
  const styles = {
    base: {
      transition: 'max-height 0.4s ease-in-out'
    , '@media (max-width: 639px)': {
        maxHeight: 0
      , overflow: 'hidden'
      }
    }
  , active: {
      '@media (max-width: 639px)': {
        maxHeight: 1000
      }
    }
  };

  return (
    <div style={[ styles.base, active && styles.active ]}>
      <Para>
        Delivering the best football chat & content, <strong>together</strong>.
        Serving the football diet of every fan, providing an on-going, up-to-date, 
        360 degree view of the world of football.
      </Para>

      <Para>
        Co-owned by <strong>you</strong>, the people who make the content that matters most to the fans.
      </Para>

      <Para>
        Join <strong>FTBL</strong>, where the world&apos;s global football community unite on a single platform 
        and get rewarded for their contribution.
      </Para>
    </div>
  );
});

const More = Radium(({ active, onClick }) => {
  const styles = {
    base: {
      display: 'none'
    , cursor: 'pointer'
    , paddingLeft: 10
    , textDecoration: 'underline'
    , '@media (max-width: 639px)': {
        display: 'inline'
      }
    }
  };

  return (
    <a style={styles.base} onClick={onClick}>
      {!active && 'Find out more'}
      {active && 'Hide'}
    </a>
  );
});

const Slogan = Radium(({ active, onClick }) => {
  return (
    <Para>
      <More onClick={onClick} active={active} />
    </Para>
  );
});

const Welcome = Radium(({ children, toggle, active }) => {
  const styles = {
    base: {
      width: '50%'
    , left: 0
    , position: 'absolute'
    , paddingLeft: 20
    , paddingRight: 20
    , borderRight: '1px solid #eee'
    , height: '100%'

    , '@media (max-width: 639px)': {
        position: 'relative'
      , width: '100%'
      , borderRight: 0
      , borderBottom: '1px solid #eee'
      , paddingBottom: 20
      , marginBottom: 20
      , paddingLeft: 0
      }
    , '@media (min-width: 1024px)': {
        paddingLeft: 30
      , paddingRight: 30
      }
    }
  };

  return (
    <span>
      <div style={styles.base}>
        <Title>Welcome to FTBL</Title>
        <Blurb active={active} />
        <Slogan onClick={toggle} active={active} />
        <Faq/>
      </div>

      <Children>{children}</Children>
    </span>
  );
});

const State = local({
  ident: 'welcome'
, initial: false
, reducer(state, { me }) { return me ? !state : state }
})(({ children, dispatch, state, $ }) => {

  const toggle = e => {
    e.preventDefault();
    dispatch($({ type: 'toggle' }));
  };

  return <Welcome active={state} toggle={toggle}>{children}</Welcome>;
});

export default function(DecoratedComponent) {
  class Wrapper extends Component {
    render() {
      return <State {...this.props}><DecoratedComponent /></State>;
    }
  }

  return Wrapper;
};
