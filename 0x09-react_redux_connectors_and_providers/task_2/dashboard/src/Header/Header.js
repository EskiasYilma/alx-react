import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../actions/uiActionCreators";

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

});

class Header extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logOut } = this.props;

    return (
      <React.Fragment>
        <header className={css(appStyles.header)}>
          <img src={logo} alt="Holberton Logo" className={css(appStyles.img)} />
          <h1>School dashboard</h1>
          {user.isLoggedIn && (
            <div id='logoutSection'>
              Welcome {user.email}{' '}
              <a onClick={logout}>
                (logout)
              </a>
            </div>
          )}
        </header>

      </React.Fragment>
    );
  }
}
Header.contextType = AppContext

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};


Header.defaultProps = {
  user: null,
  logout: () => {},
};

export const mapStateToProps = (state) => {
  return {
    user: state["user"],
  };
};

const mapDispatchToProps = {
  logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
