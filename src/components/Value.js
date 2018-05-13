import React from 'react'
import { Dropdown, NavItem, Button } from 'react-materialize'

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
        let coinValueDisplay = (this.state.currencySymbol + ' ' + response.bpi[this.state.currencySelected].rate_float)
        this.setState({
          coinValue: coinValueDisplay
        })
      })
    }, 1000)

  }

  handleCurrencyChange = (event, currency) => {
    event.preventDefault()
    console.log(currency)
    this.setState({
      currencySelected: currency
    })

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
  }

  render() {
    return (
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
    )
  }
}


export default Value
