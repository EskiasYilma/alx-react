import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';
import { AppContext, defaultUser } from './AppContext';
import { connect } from "react-redux";
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest, logout } from '../actions/uiActionCreators';

const appStyles = StyleSheet.create({
    'header_topp': {
      borderBottom: '4px solid red',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row-reverse',
  },
    'mobile-view': {
      '@media (max-width: 500px)': {
        display: 'grid',
        justifyContent: 'center',
      },
    },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      listNotifications : [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: getLatestNotification() },
      ],
    };
    this.handleCtrl = this.handleCtrl.bind(this);
  }



  handleCtrl (e) {
    if (e.key === 'h' && e.ctrlKey) {
      alert('Logging you out');
      this.props.logout();
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleCtrl);
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleCtrl);
  }

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  render() {
    return (
      <AppContext.Provider value={{ user:this.state.user, logOut:this.props.logout }}>
      <React.Fragment>
        <div className={css(appStyles['header_topp'], appStyles['mobile-view'])}>
          <Notifications  listNotifications={this.state.listNotifications}
                          markNotificationAsRead={this.markNotificationAsRead}
                          displayDrawer={this.props.displayDrawer}
                          handleDisplayDrawer={this.props.displayNotificationDrawer}
                          handleHideDrawer={this.props.hideNotificationDrawer}
          />
          <Header />
        </div>
        {this.state.user.isLoggedIn ? (
          <BodySectionWithMarginBottom title='Course list'>
            <CourseList listCourses={this.listCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title='Log in to continue'>
            <Login logIn={this.props.login} />
          </BodySectionWithMarginBottom>
        )}
          <BodySection title='News from the school'>
            <p>
              This is a test paragraph for the BodySection. This is a test paragraph for the BodySection. This is a test paragraph for the BodySection. This is a test paragraph for the BodySection. This is a test paragraph for the BodySection.
            </p>
          </BodySection>
          <Footer />
      </React.Fragment>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {}
};

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.get("isUserLoggedIn"),
    displayDrawer: state.ui.get('isNotificationDrawerVisible'),
  };
};

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
