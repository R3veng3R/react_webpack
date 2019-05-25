import React from 'react';
import {mount, shallow} from "enzyme";

import CurrencyDisplay from './CurrencyDisplay';

describe('CurrencyDisplay Test Suite', () => {
    let testData;

    beforeAll(() => {
        testData = {
            code: 'GEL',
            currentPrice: 22561.3354,
            history: {
                '2019-04-01': 11180.6895,
                '2019-04-02': 13204.372,
                '2019-04-03': 13363.2491,
                '2019-04-04': 13229.0081,
                '2019-04-05': 13569.2377
            }
        };

    });

    it('Should mount the CurrencyDisplay component', () => {
        let wrapper = mount(<CurrencyDisplay currencyData={ testData } />);
        let actual = wrapper.find('div.history-record').length;
        expect(actual).toBe(5);
    });

    it('Should return true on empty object', () => {
        let data = {};
        let wrapper = shallow(<CurrencyDisplay />);
        let actual = wrapper.instance().isEmptyData(data);
        expect(actual).toBe(true);
    });

    it('Should hide (not render) the CurrencyDisplay component', () => {
        let data = {};
        let wrapper = mount(<CurrencyDisplay currencyData={ data } />);
        let actual = wrapper.find('div.history-record').length;
        expect(actual).toBe(0);
    });
});