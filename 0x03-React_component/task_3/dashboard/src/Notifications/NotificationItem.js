import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
    }
  render() {
    const { type = 'default', html, value, markAsRead, id } = this.props;

    let li;

    if (type && value) {
      li = (
        <li data-notification-type={type} onClick={() => markAsRead(id)}>
          {value}
        </li>
      );
    } else if (html) {
      li = (
        <li
          data-notification-type={type}
          onClick={() => markAsRead(id)}
          dangerouslySetInnerHTML={{ __html: html }}
        ></li>
      );
    } else {
      li = null;
    }

    return li;
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: {},
  value: '',
  markAsRead: () => {},
  id: NaN,
};

export default NotificationItem;
