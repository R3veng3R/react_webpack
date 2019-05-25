import React, {Component} from "react";
import ListItem from "@/components/autocompleteList/ListItem";
import PropTypes from "prop-types";

import './autocomplete.scss';

class AutocompleteList extends Component {
    static propTypes = {
        suggestions: PropTypes.array.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="autocomplete-items">
                {
                    this.props.suggestions.map(item => (
                        <ListItem item={item} key={item.currency} onClick={ this.props.onClick }/>
                    ))
                }
            </div>
        );
    }
}

export default AutocompleteList;
