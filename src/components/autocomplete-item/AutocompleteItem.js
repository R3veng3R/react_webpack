import React, {Component} from "react";


class AutocompleteItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div key={this.props.item.currency}> {this.props.item.currency} </div>
        );
    }
}

export default AutocompleteItem;
