import React from 'react';
import { Pdf } from '@ftbl/icons';

export default ({ license }) => {
  const styles = {
    base: {
      color:'inherit'
    , outline:'none'
    , fontWeight:400
    , textDecoration:'underline'
    , padding: '0 4px'
    }
  };

  return (
    <span>
      I agree to the 
      <a style={styles.base} 
         href={`/docs/sma-${license}.pdf`} target='_blank'>
         SMA
      </a> 
      <Pdf size={16} style={{marginTop:-3}} />
    </span>
  );
};