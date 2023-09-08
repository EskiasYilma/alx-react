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
      ctrlPressed: false,
      displayDrawer: false,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'h') {
        alert('Logging you out');
        this.props.logOut();
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'h') {
        alert('Logging you out');
        this.props.logOut();
      }
    });
  }

  handleKeyDown = (event) => {
    if (event.key === 'Control') {
      this.setState({ ctrlPressed: true });
    }
    if (this.state.ctrlPressed && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  };

  handleKeyUp = (event) => {
    if (event.key === 'Control') {
      this.setState({ ctrlPressed: false });
    }
  };

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: getLatestNotification() },
  ];

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  render() {
    return (
      <>
        <div className={css(appStyles['header_topp'], appStyles['mobile-view'])}>
          <Notifications  listNotifications={this.listNotifications}
                          displayDrawer={this.state.displayDrawer}
                          handleDisplayDrawer={this.handleDisplayDrawer}
                          handleHideDrawer={this.handleHideDrawer}
          />
          <Header />
        </div>
        {this.props.isLoggedIn ? (
          <BodySectionWithMarginBottom title='Course list'>
            <CourseList listCourses={this.listCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title='Log in to continue'>
            <Login />
          </BodySectionWithMarginBottom>
        )}
          <BodySection title='News from the school'>
            <p>
              This is a test paragraph for the BodySection. This is a test paragraph for the BodySection. This is a test paragraph for the BodySection. This is a test paragraph for the BodySection. This is a test paragraph for the BodySection.
            </p>
          </BodySection>
          <Footer />
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {return;},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
