import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';


const appStyles = StyleSheet.create({
  header: {
    fontSize: '1.2rem',
    color: '#e0354b',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #e0354b',
    '@media (max-width: 375px)': {
      marginTop: '30px',
      width: 'content-fit',
      fontSize: '0.9rem',
      display: 'flex',
      gap: '2px',
      justifyContent: 'center',
    },
  },
  img: {
    height: '200px',
    pointerEvents: 'none',
  },
  greeting: {
    marginTop: '1rem',
  },
  logout: {
    cursor: 'pointer',
  },
});

class Header extends React.Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <React.Fragment>
      <header className={css(appStyles.header)}>
        <img src={logo} alt="Holberton Logo" className={css(appStyles.img)} />
        <h1>School dashboard</h1>
        {user.isLoggedIn && (
          <div className={css(appStyles.greeting)} id='logoutSection'>
            Welcome {user.email}{' '}
            <a className={css(appStyles.logout)} onClick={logOut}>
              (logout)
            </a>
          </div>
        )}
      </header>

      </React.Fragment>
    );
  }
}

export default Header;
