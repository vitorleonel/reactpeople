import './App.css';

import React, { Component } from 'react';

import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React People</h1>
        </header>
        <p className="App-intro">
          React People lists and connects React developers around the world.
        </p>
      </div>
    );
  }
}

export default App;
