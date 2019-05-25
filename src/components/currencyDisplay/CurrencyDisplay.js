import React, {Component} from "react";
import './currency-display.scss';
import PropTypes from "prop-types";

class CurrencyDisplay extends Component {
    static propTypes = {
        currencyData: PropTypes.object.isRequired
    };

    printHistory = () => {
        let historyData = this.props.currencyData.history;

        return (
            Object.keys(historyData).map(date =>
                <div className="history-record" key={date}>
                    <i className="far fa-calendar-check"></i> {date} : {historyData[date]}
                </div>
            )
        );
    };

    isEmptyData(data) {
        if (!data) { return true; }
        return Object.entries(data).length === 0;
    }

    getTemplate = () => {
        let data = this.props.currencyData;

        if (this.isEmptyData(data)) {
            return null;
        }

        return (
            <div className="currency-display">
                <p className="current-price">Current Price: {this.props.currencyData.currentPrice} </p>
                <h2 className="price-history-header"><i className="fas fa-chart-line"></i> Price History: </h2>

                <div className="price-history">{this.printHistory()}</div>
            </div>
        );
    };

    render() {
        return this.getTemplate();
    }
}

export default CurrencyDisplay;
