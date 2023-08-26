import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('renders without crashing', () => {
  shallow(<Footer />);
});
it('renders a div with the class Footer', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('footer.footer')).toHaveLength(1);
});
