import { defaultRoot } from './rootReducer';
import { Map } from 'immutable';

it('test the root reducer’s initial state', () => {
    expect(defaultRoot.courses).toBeInstanceOf(Map);
    expect(defaultRoot.notifications).toBeInstanceOf(Map);
    expect(defaultRoot.ui).toBeInstanceOf(Map);
});
