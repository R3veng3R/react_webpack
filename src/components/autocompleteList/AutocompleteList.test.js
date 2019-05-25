import React from 'react';
import {mount} from "enzyme";

import AutocompleteList from './AutocompleteList';
import ListItem from './ListItem';

describe('AutocompleteList Test Suite', () => {
    let wrapper;
    let testData;

    beforeAll(() => {
        testData = [
            {currency: "AOA", country: "Angolan Kwanza"},
            {currency: "ARS", country: "Argentine Peso"},
            {currency: "BTC", country: "Bitcoin"},
            {currency: "BTN", country: "Bhutanese Ngultrum"}
        ];

        wrapper = mount(<AutocompleteList suggestions={ testData } onClick={ jest.fn() }/>);
    });

    it('Should mount the Autocomplete component', () => {
        let actual = wrapper.find(ListItem).length;
        expect(actual).toBe(4);
    });
});