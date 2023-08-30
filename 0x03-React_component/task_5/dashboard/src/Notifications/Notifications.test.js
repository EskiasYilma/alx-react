import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';


const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: getLatestNotification() },
];

describe('Notifications component', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders no list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(0);
    });
    it('renders NotificationItem', () => {
        const wrapper = shallow(
            <Notifications
                displayDrawer={true}
                listNotifications={listNotifications}
            />
        );
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });
    it('renders NotificationItem html', () => {
        const wrapper = shallow(
            <Notifications
                displayDrawer={true}
                listNotifications={listNotifications}
            />
        );
        const nItem = wrapper.find('NotificationItem');
        expect(nItem).toBeDefined();
        expect(nItem.first().html()).toEqual(
            '<li data-notification-type="default">New course available</li>'
        );
    });
    it('renders the text "Your notifications"', () => {
        const wrapper = shallow(
            <Notifications
                displayDrawer={false}
            />
        );
        expect(wrapper.find('div.menuItem').html()).toEqual(
            '<div class="menuItem"><p>Your notifications</p></div>'
        );
    });
    it('displays menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.menuItem').length).toBe(1);
    });

    it('does not display div.Notifications when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.Notifications').length).toBe(0);
    });

    it('displays menu item when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem').length).toBe(1);
    });

    it('displays div.Notifications when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.Notifications').length).toBe(1);
    });
    it('renders when listCourses is not passed', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);

        expect(
            wrapper.containsMatchingElement(
                <li data-notification-type='default'>No new notification for now</li>
            )
        );
    });
});
