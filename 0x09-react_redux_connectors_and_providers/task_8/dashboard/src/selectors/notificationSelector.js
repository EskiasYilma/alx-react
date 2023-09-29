import { Map } from 'immutable';

export const filterTypeSelected = (state) => state.get('filter');

export const getNotifications = (state) => state.notifications;

export const getUnreadNotifications = (state) => {
  const notifications = state.notifications['messages'];

  if (notifications) {
    const filtered = notifications
      .valueSeq()
      .filter((value) => value.get('isRead') === false);

    return filtered;
  }

  return notifications;
};
