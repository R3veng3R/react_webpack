import React, {Component} from "react";
import debounce from "lodash.debounce";
import BpiService from '@/services/bpi.service';

import './input.scss';
import AutocompleteItem from "@/components/autocomplete-item/AutocompleteItem";

const DEBOUNCE_DELAY_TIME_MS = 800;

class Input extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };
    }

    setInputValue(value) {
        this.setState({
            value: value,
            suggestions: []
        });

        if (value.length > 0) {
            this.getSupportedCurrencies();
        } else {
            this.getSupportedCurrencies.cancel();
        }
    }

    getSupportedCurrencies = debounce(() => {
        console.log('test debounce');

        BpiService.getSupportedCurrencies()
            .then(data => {
                this.setState({suggestions: this.filterData(data)});
            })
            .catch(error => {
                return error
            });

    }, DEBOUNCE_DELAY_TIME_MS);

    filterData(coinList) {
        if (coinList.length === 0) {
            return [];
        }

        return coinList.filter(coin => {
            return coin.currency
                .toLowerCase()
                .includes(this.state.value.toLowerCase());
        });
    }

    render() {
        return (
            <div className="autocomplete">
                <input type="text" placeholder="Coin" onChange={event => this.setInputValue(event.target.value)}/>
                <div className="autocomplete-items">
                    {
                        this.state.suggestions.map(item => (
                            <AutocompleteItem item={item} key={item.currency}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Input;
