import React, {Component} from "react";
import './currency-display.scss';

class CurrencyDisplay extends Component {
    constructor(props) {
        super(props);
    }

    printHistory = () => {
        let historyData = this.props.currencyData.history;

        return (
            Object.keys(historyData).map(date =>
                <div key={date}>
                    {date} : {historyData[date]}
                </div>
            )
        );
    };

    getTemplate = () => {
        let data = this.props.currencyData;

        if (!this.isEmptyData(data)) {
            return (
                <div className="currency-display">
                    <p>Current Price: {this.props.currencyData.currentPrice} </p>
                    { this.printHistory() }
                </div>
            );

        } else {
            return '';
        }
    };

    isEmptyData(data) {
        return Object.entries(data).length === 0;
    }

    render() { return this.getTemplate(); }
}

export default CurrencyDisplay;
