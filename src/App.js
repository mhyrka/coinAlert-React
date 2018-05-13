import React, { Component } from 'react';

import './App.css';

import Header from './components/Header'
import Value from './components/Value'
import Parameters from './components/Parameters'
import SetAlert from './components/SetAlert'

import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from "react-alert-template-basic"


const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '80px',
  transition: 'scale',
  width: '500px'
}

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
