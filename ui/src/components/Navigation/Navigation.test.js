
import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './index';

describe('Navigation snapshot renders', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Navigation debug />);

        expect(component).toMatchSnapshot();
    });
});