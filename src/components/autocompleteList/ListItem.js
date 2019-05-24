import React, {Component} from "react";


class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div key={this.props.item.currency} onClick={event => this.props.onClick(this.props.item) }> {this.props.item.currency} </div>
        );
    }
}

export default ListItem;
