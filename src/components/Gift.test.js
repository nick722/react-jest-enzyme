import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Gift from './Gift';

configure({ adapter: new Adapter() });

describe('Gift', () => {
    const gift = shallow(<Gift />);

    it('renders properly', () => {
        expect(gift).toMatchSnapshot();
    });

    it('initializes a person and present in `state`', () => {
       expect(gift.state()).toEqual({ person: '', present: '' });
    });

    describe('when typing into the person input', () => {
        const person = 'Piper';

        beforeEach(() => {
            gift.find('.input-person').simulate('change', { target: { value: person} });
        });

        it('updates the person in `state`', () => {
            expect(gift.state().person).toEqual(person);
        });
    });
});
