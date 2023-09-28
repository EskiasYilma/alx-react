import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, LOGIN } from '../actions/uiActionTypes';
import { Map } from 'immutable';

export const defaultCase = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: null,
});

export default function uiReducer(state = defaultCase, action) {
  const updateState = Map({
    [DISPLAY_NOTIFICATION_DRAWER]: Map({ isNotificationDrawerVisible: true }),
    [HIDE_NOTIFICATION_DRAWER]: Map({ isNotificationDrawerVisible: false }),
    [LOGIN_SUCCESS]: Map({ isUserLoggedIn: true }),
    [LOGIN_FAILURE]: Map({ isUserLoggedIn: false }),
    [LOGOUT]: Map({ isUserLoggedIn: false }),
    [LOGIN]: Map({ user: action.user })
  });

  return state.merge(updateState.get(action.type, Map()));
}
