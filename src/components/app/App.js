import React, {Component} from "react";
import Input from "@/components/input/Input";
import debounce from "lodash.debounce";
import BpiService from "@/services/bpi.service";
import AutocompleteList from "@/components/autocompleteList/AutocompleteList";
import CurrencyDisplay from "@/components/currencyDisplay/CurrencyDisplay";

import './app.scss';

const DEBOUNCE_DELAY_TIME_MS = 600;

class App extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: [],
            selectedCurrencyItem: {}
        };
    }

    setValue(value) {
        this.setState({
            value: value,
            suggestions: [],
            selectedCurrencyItem: {}
        });

        if (value.length > 0) {
            this.getSupportedCurrencies();
        } else {
            this.getSupportedCurrencies.cancel();       // CANCEL THE EXISTING DEBOUNCED METHOD
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

    setCurrencyItem = (item) => {
        this.setState({
            value: item.currency,
            suggestions: [],
        });

        BpiService.getCurrentCurrencyData(item.currency)
            .then(item => {
                this.setState({selectedCurrencyItem: item});
            })
            .catch(error => {return error});
    };

    render() {
        return (
            <div className="container">
                <div className="autocomplete">
                    <Input value={this.state.value} onChange={event => this.setValue(event.target.value)} />
                    <AutocompleteList suggestions={this.state.suggestions} onClick={ this.setCurrencyItem } />
                </div>
                <CurrencyDisplay currencyData={this.state.selectedCurrencyItem}/>
            </div>
        );
    }
}

export default App;
