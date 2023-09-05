import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
describe('Header component', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header')).toHaveLength(1);
  });
  it('renders h1', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
  it('renders img', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
  });
});
