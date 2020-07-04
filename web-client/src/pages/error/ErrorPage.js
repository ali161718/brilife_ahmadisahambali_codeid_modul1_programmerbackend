import React, {Component} from "react";
import PropTypes from 'prop-types';

class ErrorPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>ErrorPage {this.props.code}</h1>
            </div>
        );
    }
}

ErrorPage.propTypes = {
    code: PropTypes.number.isRequired
};

export default ErrorPage;