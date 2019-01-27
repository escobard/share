
import React from 'react';
import { shallow } from 'enzyme';
import Section from './index';

describe('Section snapshot renders', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Section debug />);

        expect(component).toMatchSnapshot();
    });
});