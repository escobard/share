
import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './index';

describe('Navigation snapshot renders', () => {
    it('should render correctly mode', () => {
        const component = shallow(<Navigation />);

        expect(component).toMatchSnapshot();
    });
});