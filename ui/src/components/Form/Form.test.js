
import React from 'react';
import { shallow } from 'enzyme';
import ShareForm from './index';

describe('Form snapshot renders', () => {
    it('should render correctly', () => {
        const component = shallow(<ShareForm />);

        expect(component).toMatchSnapshot();
    });
});