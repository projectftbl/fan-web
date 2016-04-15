import React from 'react';
import Radium from 'radium';
import { IndexLink, Link } from 'react-router';

const MenuLink = Radium(({ to, title, useIndexLink = true, onClick }) => {
  const styles = {
    base: {
      color: '#999'
    , textDecoration: 'none'
    , fontSize: '1.2em'
    , cursor: 'pointer'
    }
  , active: {
      color: '#000'
    }
  };

  if (to == null) return <a style={[ styles.base, styles.active ]} onClick={onClick}>{title}</a>;

  const Anchor = useIndexLink ? IndexLink : Link;

  return (
    <Anchor style={styles.base} activeStyle={styles.active} to={to}>
      {title}
    </Anchor>
  );
});

const MenuItem = Radium(props => {
  const styles = {
    base: {
      display: 'inline'
    , paddingTop: 5
    , paddingBottom: 5
    , paddingLeft: 10
    , paddingRight: 10
    , margin: 0
    , borderRight: '1px solid rgba(0,0,0,0.15)'
    }
  , first: {
      paddingLeft: 0
    }
  , last: {
      borderRight: 0
    , paddingRight: 0
    }
  };

  return (
    <li style={[ styles.base, props.first && styles.first, props.last && styles.last ]}>
      <MenuLink {...props} />
    </li>
  );
});

export default Radium(({ items, style }) => {
  const styles = {
    base: {
      listStyle: 'none'
    , padding: 0
    , margin: '10px 0 20px 0'
    }
  };

  return (
    <ul style={[ styles.base, style ]}>
      {items.map((item, i) => 
        <MenuItem to={item.to} title={item.title} onClick={item.onClick} useIndexLink={item.indexLink}
                  first={i === 0} last={i === items.length-1} key={i} />
      )}
    </ul>
  );
});
