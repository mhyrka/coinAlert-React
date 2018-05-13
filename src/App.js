import React, { Component } from 'react';

import './App.css';

import Header from './components/Header'
import Value from './components/Value'
import Parameters from './components/Parameters'
import SetAlert from './components/SetAlert'

class App extends Component {

  constructor() {
    super()
    this.state = {
      initialValue: 0,
      coinValue: '',
      currencySelected: 'USD',
      currencySymbol: '$'
    }
  }


  render() {
    return (
      <main>
        <Header />
        <Value />
        <Parameters />
        <SetAlert />
      </main>
    );
  }
}

export default App;
