
import React from 'react';
import { shallow } from 'enzyme';
import ShareForm from './index';

describe('ShareForm snapshot renders', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<ShareForm debug />);

        expect(component).toMatchSnapshot();
    });
});