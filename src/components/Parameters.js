import React from 'react'

import { Dropdown, NavItem, Button } from 'react-materialize'


class Parameters extends React.Component {

  constructor() {
    super()
    this.state = {
      currencySelected: 'USD',
      initialValue: 0
    }
  }

  componentDidMount() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(response => {
      this.setState({
        initialValue: response.bpi[this.state.currencySelected].rate_float
      })
    })
  }

  render() {
    return (
      <div className="parameters-section">

        <div className="alert-parameters">
          <div>
            <Dropdown trigger={<Button id="percent-gain" style={{width: 241}}>% Gain</Button>}>
              <NavItem>.01%</NavItem>
              <NavItem>5%</NavItem>
              <NavItem>10%</NavItem>
              <NavItem divider />
            </Dropdown>

            <Dropdown trigger={<Button id="percent-loss" style={{width: 241}}>% Loss</Button>}>
              <NavItem>.01%</NavItem>
              <NavItem>5%</NavItem>
              <NavItem>10%</NavItem>
              <NavItem divider />
            </Dropdown>
          </div>
        </div>
      </div>
    )
  }
}


export default Parameters
