import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, SET_LOADING_STATE } from '../actions/notificationActionTypes';
import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';


export const defaultNotificationCase = Map({
    notifications: [],
    filter: 'DEFAULT',
    loading: false
});
export function notificationReducer(state = defaultNotificationCase, action) {
    state = Map(state);
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            {
                const notificationData = action.data.map((item) => ({
                    id: item.id,
                    type: item.type,
                    value: item.value,
                    isRead: false,
                }));
                const newState = state.merge({
                    filter: NotificationTypeFilters.DEFAULT,
                    notifications: notificationsNormalizer(notificationData),
                });
                return newState;
            }
        case MARK_AS_READ:
            {
                const notificationId = action.index.toString();
                const newState = state.setIn(
                    ['notifications', 'entities', 'notifications', notificationId, 'isRead'],
                    true
                );
                return newState;
            }
        case SET_TYPE_FILTER:
            {
                const newState = state.set('filter', action.filter);
                return newState;
            }
        case SET_LOADING_STATE:
            {
                const newState = state.set('filter', action.loading);
                return newState;
            }
        default:
            return state;
    }
}
