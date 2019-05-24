import React, {Component} from "react";

class CurrencyDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="currency-display">
                <p>CurrentPrice: {this.props.currentPrice} </p>
                <p>History: {this.props.currentPrice} </p>
            </div>
        );
    }
}

export default CurrencyDisplay;
