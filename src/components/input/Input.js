import React, {Component} from "react";
import './input.scss';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input type="text" placeholder="Coin" value={this.props.value} onChange={this.props.onChange}/>
        );
    }
}

export default Input;
