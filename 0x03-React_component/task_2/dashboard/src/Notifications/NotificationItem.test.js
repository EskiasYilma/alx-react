import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders type and value', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    expect(wrapper.find('li')).toHaveLength(1)
    expect(wrapper.find('li').text()).toEqual('test');
    expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
  });

  it('renders html', () => {
    const wrapper = shallow(<NotificationItem />);

    wrapper.setProps({ html: '<u>test</u>' });
    expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
  });
});
