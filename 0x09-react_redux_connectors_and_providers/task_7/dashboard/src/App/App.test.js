/**
 * @jest-environment jsdom
 */
import React from 'react';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { shallow, mount } from 'enzyme';
import App, { mapStateToProps } from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { Provider } from "react-redux";
import { fromJS } from "immutable";
import uiReducer, { defaultCase } from "../reducers/uiReducer";
import { createStore } from "redux";

const store = createStore(uiReducer, defaultCase);

it("mapStateToProps function returns the right object when passing the { isLoggedIn: true }", () => {
    let newState = {
        ui: fromJS({
            isUserLoggedIn: true,
        }),
    };
    const loggedinCase = mapStateToProps(newState);
    const expectedCase = { isLoggedIn: true }
    expect(loggedinCase).toEqual(expectedCase);
});

it('mapStateToProps function returns the right object when passing the { displayDrawer: true }', () => {
    let newState = {
        ui: fromJS({
            isNotificationDrawerVisible: true,
        }),
    };
    const notificationVisible = mapStateToProps(newState);
    const expectedCase = { displayDrawer: true }
    expect(notificationVisible).toEqual(expectedCase);
});
// beforeEach(() => {
//   StyleSheetTestUtils.suppressStyleInjection();
// });
// afterEach(() => {
//   StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
// });

// describe('App component', () => {
//   it('renders without crashing', () => {
//     shallow(<App />);
//   });
//   it('App contain Header component', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('Header')).toHaveLength(1);
//   });
//   it('App contain Notifications component', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('Notifications')).toHaveLength(1);
//   });
//   it('App contain Footer component', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('Footer')).toHaveLength(1);
//   });
//   it('App contain Login component', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('Login')).toHaveLength(1);
//   });

//   it('checks alert function is called', () => {
//     window.alert = jest.fn();
//     const wrapper = shallow(<App />);
//     const spy = jest.spyOn(window, 'alert');
//     const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
//     document.dispatchEvent(event);

//     expect(spy).toHaveBeenCalled();
//     spy.mockRestore();
//     wrapper.unmount();
//   });

//   it('improper logOut function', () => {
//     const mklogout = jest.fn();
//     const mkAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

//     const wrapper = shallow(<App isLoggedIn={true} logOut={mklogout} />);
//     const event = new KeyboardEvent('keydown', { key: 'a', ctrlKey: true });
//     document.dispatchEvent(event);

//     expect(mklogout).not.toHaveBeenCalled();
//     expect(mkAlert).not.toHaveBeenCalled();

//     mkAlert.mockRestore();
//   });
//   it('check displayDrawer initial value', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.state().displayDrawer).toBe(false);
//   });
//   it('check displayDrawer after handleDisplayDrawer is called', () => {
//     const wrapper = shallow(<App />);
//     wrapper.instance().handleDisplayDrawer();
//     expect(wrapper.state().displayDrawer).toBe(true);
//   });
//   it('check displayDrawer after handleHideDrawer is called', () => {
//     const wrapper = shallow(<App />);
//     wrapper.instance().handleHideDrawer();
//     expect(wrapper.state().displayDrawer).toBe(false);
//   });
//   it('markNotificationAsRead', () => {
//     const wrapper = mount(<App />);
//     wrapper.setState({
//       listNotifications: [
//         { id: 1, type: 'default', value: 'New course available' },
//         { id: 2, type: 'urgent', value: 'New resume available' },
//       ],
//     });
//     wrapper.instance().markNotificationAsRead(1);
//     expect(wrapper.state().listNotifications).toEqual([
//       { id: 2, type: 'urgent', value: 'New resume available' },
//     ]);
//     expect(wrapper.state().listNotifications).toHaveLength(1);
//   });
// });
