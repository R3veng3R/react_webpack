import React, {Component} from "react";
import PropTypes from "prop-types";
import './loader.scss';

/**
 * Loader is taken from https://loading.io
 * to save some time.
 */
class Loader extends Component {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired
    };

    getTemplate = () => {
        if (!this.props.isLoading) {
            return null;
        }

        return (
            <div className="lds-facebook">
                <div className="loader-wrapper">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    };

    render() {
        return this.getTemplate();
    }
}

export default Loader;
