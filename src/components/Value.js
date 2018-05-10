import React from 'react'


class Value extends React.Component {
  constructor() {
    super()
    this.state = {
      coinValue: '',
      currencySelected: 'USD'
    }
  }

  componentDidMount() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(response => {
      let coinValueDisplay = response.bpi.USD.rate_float
      this.setState({
        coinValue: '$ ' + coinValueDisplay
      })
    })

  }

  render() {
    return (
      <section className="current-price">
        <i className="fab fa-bitcoin" id="bitcoin"></i>
        <p id="fat-arrow">=></p>
        <h3>{this.state.coinValue}</h3>
      </section>
    )
  }
}


export default Value
