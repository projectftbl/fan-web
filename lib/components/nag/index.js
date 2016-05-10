import React from 'react';
import color from 'color';
import { Warning } from '@ftbl/icons';

const COLOUR = '#fbbd08';

export default ({ condition, colour = COLOUR, Icon = Warning, children }) => {
  const background = color(colour).lighten(0.6).hexString()
      , foreground = color(colour).darken(0.25).hexString();

  const styles = {
    base: {
      position: 'relative'
    , width: '100%'
    , backgroundColor: background
    , padding: '12px 20px'
    , borderBottom: '1px solid #fff'
    , color: foreground
    , clear: 'both'
    }
  };

  if (!condition) return <span/>;

  return  (
    <div style={styles.base}>
      <Icon colour={foreground} allowHover={false} style={{marginTop:-2, float:'left'}} />
      <div style={{paddingLeft: 32}}> {children}</div>
    </div>
  );
};