import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

export function login(email, password) {
    return {
        type: LOGIN,
        user: { email, password },
    };
}
export const bndLogin = (email, password) => (dispatch) => {
    dispatch(login(email, password));
};

export const logout = () => ({
    type: LOGOUT
});
export const bndLogout = () => (dispatch) => {
    dispatch(logout());
};


export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER,
});
export const bndDisplayNotificationDrawer = () => (dispatch) => {
    dispatch(displayNotificationDrawer());
};


export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER,
});
export const bndHideNotificationDrawer = () => (dispatch) => {
    dispatch(hideNotificationDrawer());
};
