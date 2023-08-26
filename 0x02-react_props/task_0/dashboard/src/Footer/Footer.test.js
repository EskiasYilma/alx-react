import React from 'react';
import { shallow } from 'enzyme';
import App from './Footer';

describe('Footer component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });
  it('renders a div with the class Footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('.footer')).toHaveLength(1);
  });
});
