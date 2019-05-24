import React, {Component} from "react";
import './loader.scss';

/**
 * Loader is taken from https://loading.io
 * to save some time.
 */
class Loader extends Component {
    constructor(props) {
        super(props);
    }

    getTemplate = () => {
        if (!this.props.isLoading) {
            return '';
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
