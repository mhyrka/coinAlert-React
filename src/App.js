import React, { Component } from 'react';

import './App.css';

import Header from './components/Header'
import Value from './components/Value'


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
      </main>
    );
  }
}

export default App;
