import React from 'react'
import SetAlert from './SetAlert'

import { Button, Dropdown, NavItem } from 'react-materialize'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from "react-alert-template-basic"

const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '40px',
  transition: 'scale',
  width: '500px'
}


class Value extends React.Component {
  constructor() {
    super()
    this.state = {
      initialValue: 0,
      coinValue: '',
      currencySelected: 'USD',
      currencySymbol: '$'
    }
  }

  componentDidMount() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(response => {
      let coinValueDisplay = (this.state.currencySymbol + response.bpi[this.state.currencySelected].rate_float)
      this.setState({
        coinValue: coinValueDisplay,
        initialValue: response.bpi[this.state.currencySelected].rate_float
      })
    })

    this.interval = setInterval(() => {
      fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(response => {
        let coinValueDisplay = (this.state.currencySymbol + response.bpi[this.state.currencySelected].rate_float)
        this.setState({
          coinValue: coinValueDisplay,
          currentPrice: response.bpi[this.state.currencySelected].rate_float
        })
      })
    }, 1000)

  }

  handleCurrencyChange = (event, currency) => {
    event.preventDefault()
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(response => {
      let coinValueDisplay = (this.state.currencySymbol + response.bpi[currency].rate_float)
      this.setState({
        coinValue: coinValueDisplay,
        currentPrice: response.bpi[currency].rate_float,
        currencySelected: currency,
        initialValue: response.bpi[currency].rate_float
      })
    })
    .then(console.log(this.state.initialValue))
    switch (currency) {
      case 'USD':
        this.setState({
          currencySymbol: '$'
        })
        break;
      case 'GBP':
        this.setState({
          currencySymbol: '£'
        })
        break;
      case 'EUR':
        this.setState({
          currencySymbol: '€'
        })
        break;
      default:
    }
    console.log(this.state.initialValue)
  }

  render() {
    return (
      <div>
        <section className="current-price">

          <div className="value-display">
            <i className="fab fa-bitcoin" id="bitcoin"></i>
            <p id="fat-arrow">=></p>
            <h3>{this.state.coinValue}</h3>
          </div>

          <Dropdown trigger={<Button id="dropdown-btn" style={{width: 502}} type="button">Select Currency</Button>}>
            <NavItem onClick={(e) => this.handleCurrencyChange(e,'USD')}>U.S. Dollar</NavItem>
            <NavItem onClick={(e) => this.handleCurrencyChange(e, 'GBP')}>Great British Pound</NavItem>
            <NavItem divider />
            <NavItem onClick={(e) => this.handleCurrencyChange(e, 'EUR')}>Euro</NavItem>
          </Dropdown>

        </section>

        <AlertProvider template={AlertTemplate} {...options}>
          <SetAlert initialValue={this.state.initialValue}
                    currentPrice={this.state.currentPrice} />
        </AlertProvider>
      </div>
    )
  }
}


export default Value
