import React, {Component} from "react";
import PropTypes from "prop-types";
import './input.scss';

class Input extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    render() {
        return (
            <input type="text" placeholder="Start to type currency" value={this.props.value} onChange={this.props.onChange} />
        );
    }
}

export default Input;
