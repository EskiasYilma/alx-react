import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';


const appStyles = StyleSheet.create({
    header: {
      fontSize: '1.2rem',
      color: '#e0354b',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '3px solid #e0354b',
    },

    img: {
      height: '200px',
      pointerEvents: 'none',
  },
});


function Header() {
  return (
      <header className={css(appStyles['header'])}>
        <img src={logo} alt="Holberton Logo" className={css(appStyles.img)} />
        <h1>School dashboard</h1>
      </header>
  );
}

export default Header;
