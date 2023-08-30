import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', html, value }) {
  let li;

  if (type && value) {
    li = <li data-notification-type={type}>{value}</li>;
  } else if (html) {
    li = <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>;
  } else {
    li = null;
  }

  return li;
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
