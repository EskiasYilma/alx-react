import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

it('LOGIN test', () => {
    const email = 'test_email@gmail.com';
    const password = 'test_password';

    const expected = {
        type: LOGIN,
        user: {
            email: email,
            password: password
        },
    };
    expect(login(email, password)).toEqual(expected);
});

it('LOGOUT test', () => {
    const expected = {
        type: LOGOUT
    };
    expect(logout()).toEqual(expected);
});

it('DISPLAY_NOTIFICATION_DRAWER test', () => {
    const expected = {
        type: DISPLAY_NOTIFICATION_DRAWER
    };
    expect(displayNotificationDrawer()).toEqual(expected);
});

it('HIDE_NOTIFICATION_DRAWER test', () => {
    const expected = {
        type: HIDE_NOTIFICATION_DRAWER
    };
    expect(hideNotificationDrawer()).toEqual(expected);
});
