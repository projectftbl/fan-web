import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { config } from '@ftbl/support';
import { Pdf } from '@ftbl/icons';

const license = config('license');

@Radium
export default class RadiumLink extends Component {
  render() {
    const styles = {
      base: {
        textDecoration: 'none'
      , color: '#333'
      , outline: 'none'
      }
    , active: {
        color: '#000'
      , textDecoration: 'underline'
      }
    };

    const { to, href, children } = this.props;

    if (href) return <a href={href} style={styles.base} target='_blank'>{children}</a>;

    return (
      <Link to={to} style={styles.base} activeStyle={styles.active}>{children}</Link>
    );
  }
};

const Item = Radium(({ to, href, children, last }) => {
  const styles = {
    base: {
      display: 'inline'
    , paddingRight: 10
    , borderRight: '1px solid #ccc'
    , margin: '0 10px 0 0'
    }
  , last: {
      borderRight: 0
    }
  };

  return (
    <li style={[ styles.base, last && styles.last ]}>  
      <RadiumLink to={to} href={href}>{children}</RadiumLink>
    </li>
  );
});

const Menu = _ => {
  const styles = {
    base: {
      listStyle: 'none'
    , padding: 0
    , margin: '0 auto'
    , textAlign: 'center'
    }
  };

  return (
    <ul style={styles.base}>
      <Item to='/faq'>FAQ</Item>
      <Item href={`/docs/sma-${license}.pdf`}>SMA <Pdf size={16} style={{margin: '-3px 0 0 5px'}} /></Item>
      <Item to='/p/privacy'>Privacy</Item>
      <Item to='/contact' last={true}>Contact Us</Item>
    </ul>
  );
};

export default _ => {
  const styles = {
    base: {
      clear: 'both'
    , height: 100
    , marginTop: -50
    , paddingBottom: 60
    , width: '100%'
    , borderTop: '1px solid #ddd'
    , backgroundColor: '#fafafa'
    , padding: '10px 20px'
    , position: 'relative'
    , zIndex: 1030
    }
  };

  return (
    <footer style={styles.base}>
      <Menu />
    </footer>
  );
};
