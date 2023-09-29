import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer, {mapStateToProps} from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, defaultUser } from '../App/AppContext';
import uiReducer, { defaultCase } from "../reducers/uiReducer";
import { createStore } from "redux";
import { fromJS, Map } from "immutable";

const store = createStore(uiReducer, defaultCase);

it("mapStateToProps function returns the right object when passing the { user : defaultUser }", () => {
  let newState = {
    user : defaultUser
  };
  const newCase = mapStateToProps(newState);
  const expectedCase = { user: newState["user"] }
  expect(expectedCase).toEqual(newCase);
});


// beforeEach(() => {
//   StyleSheetTestUtils.suppressStyleInjection();
// });
// afterEach(() => {
//   StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
// });
// describe('Login component', () => {
//   it('renders without crashing', () => {
//     shallow(<Footer />);
//   });
//   it('renders Footer', () => {
//     const wrapper = mount(<Footer />);
//     expect(wrapper.find('footer')).toHaveLength(1);
//   });
//   it('renders footer copyright', () => {
//     const wrapper = mount(<Footer />);
//     expect(wrapper.find('.footer').text()).toContain('Copyright');
//   });
//   it('user is logged in', () => {
//     const test = {
//       user: { email: 'test@email.com', password: 'testpassword', isLoggedIn: true },
//       logOut: () => {},
//     };
//     const wrapper = mount(
//       <AppContext.Provider value={test}>
//         <Footer />
//       </AppContext.Provider>
//     );
//     expect(wrapper.find('a').exists()).toBe(true);
//   });
//   it('user is logged out', () => {
//     const test = {
//       user: { email: 'test@email.com', password: 'testpassword', isLoggedIn: false },
//       logOut: () => {},
//     };
//     const wrapper = mount(
//       <AppContext.Provider value={test}>
//         <Footer />
//       </AppContext.Provider>
//     );
//     expect(wrapper.find('a').exists()).toBe(false);
//   });
// });
