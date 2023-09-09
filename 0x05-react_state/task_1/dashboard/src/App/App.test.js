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
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('App contain Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });
  it('App contain Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });
  it('App contain Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });
  it('App contain Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });
  it('proper logOut function', () => {
    const mklogout = jest.fn();
    const mkAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = shallow(<App isLoggedIn={true} logOut={mklogout} />);
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    document.dispatchEvent(event);
    expect(mklogout).toHaveBeenCalled();
    expect(mkAlert).toHaveBeenCalledWith('Logging you out');
    mkAlert.mockRestore();
  });

  it('improper logOut function', () => {
    const mklogout = jest.fn();
    const mkAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const wrapper = shallow(<App isLoggedIn={true} logOut={mklogout} />);
    const event = new KeyboardEvent('keydown', { key: 'a', ctrlKey: true });
    document.dispatchEvent(event);

    expect(mklogout).not.toHaveBeenCalled();
    expect(mkAlert).not.toHaveBeenCalled();

    mkAlert.mockRestore();
  });
  it('check displayDrawer initial value', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);
  });
  it('check displayDrawer after handleDisplayDrawer is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
  });
  it('check displayDrawer after handleHideDrawer is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });
});
