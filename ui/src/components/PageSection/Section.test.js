
import React from 'react';
import { shallow } from 'enzyme';
import Section from './index';

describe('PageSection snapshot renders', () => {
    it('should render correctly in mode', () => {
        const component = shallow(<Section />);

        expect(component).toMatchSnapshot();
    });
});