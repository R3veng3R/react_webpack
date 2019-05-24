import React, {Component} from "react";
import ListItem from "@/components/autocompleteList/ListItem";

class AutocompleteList extends Component {
    constructor(props) {
        super(props);
    }

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
