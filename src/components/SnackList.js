import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class SnackList extends Component {

    render() {
        return (
            <ul>{this.props.reduxState.snackReducer.map((snack, i) =>
                <li key={snack}>{snack}</li>
            )}</ul>
        );
    }
}

export default connect(mapReduxStateToProps)(SnackList);