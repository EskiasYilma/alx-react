import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders no list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li')).toHaveLength(0);
  });
  it('renders NotificationItem', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
  });
  it('renders NotificationItem html', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem')).toBeDefined();
    expect(wrapper.find('NotificationItem').first().html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });
  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    const text = 'Here is the list of notifications';
    expect(wrapper.contains(text)).toEqual(true);
  });
});
