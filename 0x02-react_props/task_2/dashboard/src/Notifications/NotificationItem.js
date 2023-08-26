import React from 'react';
import './Notifications.css';


function NotificationItem({ type, html, value }) {
  let li;

  if (value) {
    li = <li data-notification-type={type}>{value}</li>;
  } else {
    li = <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>;
  };

  return li;
}

export default NotificationItem;
