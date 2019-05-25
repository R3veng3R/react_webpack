import React, {Component} from "react";
import PropTypes from "prop-types";

class ListItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {
        return (
            <div key={this.props.item.currency} onClick={event => this.props.onClick(this.props.item) }> {this.props.item.currency} </div>
        );
    }
}

export default ListItem;
