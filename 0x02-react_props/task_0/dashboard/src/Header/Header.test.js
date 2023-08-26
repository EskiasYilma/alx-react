import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders a div with the class App-header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.header')).toHaveLength(1);
  });
});
