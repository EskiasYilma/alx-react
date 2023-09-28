import { notificationReducer, defaultNotificationCase } from './notificationReducer';
import courseReducer, { initialState } from './courseReducer';
import { Map } from 'immutable';
import uiReducer, { defaultCase } from './uiReducer';


export const defaultRoot = {
    courses: initialState,
    notifications: defaultNotificationCase,
    ui: defaultCase,
};

export const rootReducer = {
    courses: courseReducer,
    notifications: notificationReducer,
    ui: uiReducer,
};
