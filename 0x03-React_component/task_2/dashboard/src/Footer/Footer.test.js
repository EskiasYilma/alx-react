import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Login component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });
  it('renders Footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer.footer')).toHaveLength(1);
  });
  it('renders footer copyright', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('.footer p').text()).toContain('Copyright');
  });
});
