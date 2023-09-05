import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';


const appStyles = StyleSheet.create({
    Notifications: {
        padding: '1em',
        border: '2px dashed red',
    },

    "[data-notification-type='urgent']": {
        color: 'red',
    },

    "[data-notification-type='default']": {
        color: 'blue',
    },
    notificationHeader: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    menuItem: {
      marginRight: '16px',
      textAlign: 'right',
    },
    mobile: {
      '@media (max-width: 375px)': {
        display: 'block',
        height: '100vh',
        width: '100vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: 'none',
        fontSize: '20px',
        padding: '0',
      },
    },
  flexArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});
class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.displayDrawer ? (
          <div className={css(appStyles['flexArea'])}>
            <div className={css(appStyles['menuItem'])}>
              <p>Your notifications</p>
            </div>
            <div className={css(appStyles['Notifications'], appStyles.mobile)}>
              <ul>
                {this.props.listNotifications &&
                this.props.listNotifications.length > 0 ? (
                  this.props.listNotifications.map(
                    ({ id, html, type, value }) => (
                      <NotificationItem
                        key={id}
                        markAsRead={this.markAsRead}
                        type={type}
                        value={value}
                        html={html}
                      />
                    )
                  )
                ) : (
                  <div className={css(appStyles['notificationHeader'])}>
                    <NotificationItem value='No new notification for now' />
                    <button
                      aria-label='Close'
                      onClick={console.log('Close button has been clicked')}
                    >
                      <img
                        style={{ width:"8px", height:"8px" }}
                        src={closeIcon}
                        alt='Close'

                      />
                    </button>
                  </div>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div className={css(appStyles['menuItem'])}>
            <p>Your notifications</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
