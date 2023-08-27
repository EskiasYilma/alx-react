import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

function App({ isLoggedIn=false }) {
  let loggedin = undefined;
  isLoggedIn ? (loggedin = <CourseList />) : (loggedin = <Login />);
  return (
    <>
      <div class="header_topp">
        <Notifications />
        <Header />
      </div>
      {loggedin}
      <Footer />
    </>
  );
}
App.defaultProps = {
  isLoggedIn: false,
};
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
export default App;
