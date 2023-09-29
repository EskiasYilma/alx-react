import { NotificationTypeFilters, MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from './notificationActionTypes';

export function markAsRead(index) {
    return {
        type: MARK_AS_READ,
        index,
    };
};
export const bndMarkAsRead = (index) => (dispatch) => {
    dispatch(markAsRead(index));
};


export function setNotificationFilter(filter) {
    return {
        type: SET_TYPE_FILTER,
        filter,
    };
};
export const bndSetNotificationFilter = (filter) => (dispatch) => {
    dispatch(setNotificationFilter(filter));
};

export function fetchNotificationsSuccess() {
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data: [{
                id: 1,
                type: 'default',
                value: 'New course available',
            },
            {
                id: 2,
                type: 'urgent',
                value: 'New resume available',
            },
            {
                id: 3,
                type: 'urgent',
                value: 'New data available',
            },
        ],
    };
}

export const boundFetchNotificationsSuccess = () =>
    dispatch(fetchNotificationsSuccess());


export const setLoadingState = (loadingState) => ({
    type: SET_LOADING_STATE,
    loadingState,
});

export const setNotifications = (notificationsArray) => ({
    type: FETCH_NOTIFICATIONS_SUCCESS,
    notificationsArray,
});

export const fetchNotifications = () => {
    return (dispatch) => {
        dispatch(setLoadingState(true));
        return fetch('../dist/notifications.json')
            .then((getjson) => getjson.json())
            .then((data) => dispatch(setNotifications(data)))
            .catch((error) => {})
            .finally(dispatch(setLoadingState(false)));
    };
};

export const bndSetNotifications = (notificationsArray) => (dispatch) => {
    dispatch(setNotificationFilter(notificationsArray));
};
