import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class SnackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newSnack: '',
        }
    }

    handleFormChange = (event) => {
        this.setState({
            newSnack: event.target.value
        });
    }

    sendSnackToRedux = () => {
        const action = { type: 'ADD_SNACK', payload: this.state.newSnack }
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                <input onChange={this.handleFormChange} value={this.state.newSnack} />
                <button onClick={this.sendSnackToRedux}>submit snack</button>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(SnackForm);