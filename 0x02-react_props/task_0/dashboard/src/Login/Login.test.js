import React from 'react';
import { shallow } from 'enzyme';
import App from './Login';

describe('Login component', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders a div with the class Login-body', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('.login')).toHaveLength(1);
  });
});
