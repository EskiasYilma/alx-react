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
  it('calls logOut function and displays alert when pressing control + h', () => {
    const mockLogOut = jest.fn();
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const wrapper = shallow(<App isLoggedIn={true} logOut={mockLogOut} />);
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    document.dispatchEvent(event);

    expect(mockLogOut).toHaveBeenCalled();
    expect(mockAlert).toHaveBeenCalledWith('Logging you out');

    mockAlert.mockRestore();
  });

  it('does not call logOut function or display alert when pressing other keys', () => {
    const mockLogOut = jest.fn();
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const wrapper = shallow(<App isLoggedIn={true} logOut={mockLogOut} />);
    const event = new KeyboardEvent('keydown', { key: 'a', ctrlKey: true });
    document.dispatchEvent(event);

    expect(mockLogOut).not.toHaveBeenCalled();
    expect(mockAlert).not.toHaveBeenCalled();

    mockAlert.mockRestore();
  });
});
