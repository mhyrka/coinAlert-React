import React, { Component } from 'react';

import './App.css';

import Header from './components/Header'
import Value from './components/Value'
import Parameters from './components/Parameters'
import Button from './components/Button'

class App extends Component {
  render() {
    return (

      <main>
        <Header />
        <Parameters />
        <Value />
      </main>
    );
  }
}

export default App;
