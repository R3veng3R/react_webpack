import React from 'react';

import App from './App';
import Input from '@/components/input/Input'
import {shallow} from "enzyme";

describe('App.js Test Suite', () => {
    let wrapper;
    let testData;

    beforeAll(() => {
        wrapper = shallow(<App />);

        testData = [
             {currency: "AED", country: "United Arab Emirates Dirham"},
             {currency: "AFN", country: "Afghan Afghani"},
             {currency: "ALL", country: "Albanian Lek"},
             {currency: "AMD", country: "Armenian Dram"},
             {currency: "ANG", country: "Netherlands Antillean Guilder"},
             {currency: "AOA", country: "Angolan Kwanza"},
             {currency: "ARS", country: "Argentine Peso"},
             {currency: "BTC", country: "Bitcoin"},
             {currency: "BTN", country: "Bhutanese Ngultrum"}
        ]
    });

    it('Should mount the App component', () => {
        let actual = wrapper.find(Input).length;
        expect(actual).toBe(1);
    });

    it('Should filter data and return 2 objects', () => {
        wrapper.setState({ value: 'bt' });
        let actual = wrapper.instance().filterData(testData);
        expect(actual.length).toBe(2);
    });

    it('Should filter data and return 0 objects', () => {
        wrapper.setState({ value: 'hi' });
        let actual = wrapper.instance().filterData(testData);
        expect(actual.length).toBe(0);
    });

});