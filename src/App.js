import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SnackList from './components/SnackList';
import SnackForm from './components/SnackForm';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>WE LIKE SNACKs.....MORE!!!</h1>
        {/* <input onChange={this.handleFormChange} value={this.state.newSnack} />
        <button onClick={this.sendSnackToRedux}>submit snack</button> */}
        <SnackForm />
        <SnackList />
      </div>
    );
  }
}

export default connect()(App);