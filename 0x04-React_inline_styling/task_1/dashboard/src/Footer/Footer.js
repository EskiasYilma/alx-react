import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';


const appStyles = StyleSheet.create({
  footer: {
      textAlign: 'center',
      borderTop: '3px solid #e0354b',
      padding: '20px',
      color: 'rgb(0, 0, 0)',
      fontStyle: 'italic',
      position: 'relative',
      bottom: '0',
      width: '100%',
  },



});


function Footer() {
  return (
    <footer className={css(appStyles['footer'])}>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </footer>
  );
}

export default Footer;
