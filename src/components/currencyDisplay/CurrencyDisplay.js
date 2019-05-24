import React, {Component} from "react";

class CurrencyDisplay extends Component {
    constructor(props) {
        super(props);
    }

    printHistory = () => {
        let historyData = this.props.currencyData.history;

        if (!historyData || historyData.length === 0) {
            return [];
        }

        return (
            Object.keys(historyData).map(date =>
                <div>
                    {date} : {historyData[date]}
                </div>
            )
        );
    };

    render() {
        return (
            <div className="currency-display">
                <p>CurrentPrice: {this.props.currencyData.currentPrice} </p>
                { this.printHistory() }
            </div>
        );
    }
}

export default CurrencyDisplay;
