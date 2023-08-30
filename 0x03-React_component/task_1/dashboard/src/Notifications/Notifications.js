import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <React.Fragment>
        {displayDrawer ? (
          <div className='notification_wrapper'>
            <div className='menuItem'>
              <p>Your notifications</p>
            </div>
            <div className='Notifications'>
              <ul>
                {listNotifications && listNotifications.length > 0 ? (
                  listNotifications.map(({ id, html, type, value }) => (
                    <NotificationItem
                      key={id}
                      type={type}
                      value={value}
                      html={html}
                      markAsRead={this.markAsRead}
                    />
                  ))
                ) : (
                  <div className='notification-header'>
                    <NotificationItem value='No new notification for now' />
                    <button
                      type='button'
                      aria-label='Close'
                      onClick={() => console.log('Close button has been clicked')}
                      style={{
                        display: 'inline-block',
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: 0,
                        border: 0,
                        outline: 'none',
                      }}
                    >
                      <img src={closeIcon} alt='' style={{ width: '8px', height: '8px' }} />
                    </button>
                  </div>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div className='menuItem'>
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
