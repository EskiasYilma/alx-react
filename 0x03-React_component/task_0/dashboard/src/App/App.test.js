import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

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
});
