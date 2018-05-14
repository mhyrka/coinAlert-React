import React from 'react'
import { Button, Icon, Dropdown, NavItem, Row, Input } from 'react-materialize'
import { withAlert } from 'react-alert'

class SetAlert extends React.Component {
  constructor() {
    super()
    this.state = {
      currencySelected: 'USD',
      initialValue: 0,
      percentGain: 0,
      percentLoss: 0,
      customValue: 0
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

  setPercentGain = (event, percentage) => {
    event.preventDefault()
    this.setState({
      percentGain: percentage
    })
  }

  setPercentLoss = (event, percentage) => {
    event.preventDefault()
    this.setState({
      percentLoss: percentage
    })
  }

  setCustomValue = (event) => {
    event.preventDefault()
  }

  setAlert = (event) => {
    event.preventDefault()
    this.interval = setInterval(() => {
      console.log('fn running')
      if (this.props.currentPrice > ((this.state.initialValue * (this.state.percentGain / 100)))) {
        () => { this.props.alert.show(`BTC has gained ${this.state.percentGain}%!`) }
      } else if (this.props.currentPrice < (this.state.initialValue - (this.state.initialValue * (this.state.percentLoss / 100))) && this.state.percentLoss !== 0) {
        () => { this.props.alert.show(`BTC has lost ${this.state.percentLoss}%!`) }
      }
    }, 500)
  }

  render() {
    return (
      <div className="set-alert">
        <div className="parameters-section">

          <div className="alert-parameters">
              <Dropdown trigger={<Button id="percent-gain" style={{width: 241}}>% Gain</Button>}>
                <NavItem onClick={(e) => this.setPercentGain(e, .01)}>.01%</NavItem>
                <NavItem onClick={(e) => this.setPercentGain(e, 5)}>5%</NavItem>
                <NavItem onClick={(e) => this.setPercentGain(e, 10)}>10%</NavItem>
                <NavItem divider />
              </Dropdown>

              <Dropdown trigger={<Button id="percent-loss" style={{width: 241}}>% Loss</Button>}>
                <NavItem onClick={(e) => this.setPercentLoss(e, .01)}>.01%</NavItem>
                <NavItem onClick={(e) => this.setPercentLoss(e, 5)}>5%</NavItem>
                <NavItem onClick={(e) => this.setPercentLoss(e, 10)}>10%</NavItem>
                <NavItem divider />
              </Dropdown>
          </div>
        </div>

        <Row>
          <Input id="input" s={460} label="Custom Value" />
        </Row>

        <Button onClick={

          (event) => { this.props.alert.show(`Alert Set. You will be notified when BTC gains ${this.state.percentGain}%`); { this.setAlert(event) } }

          }
          id="set-alert-btn"
          style={{width: 502}}
          waves='light'>SET ALERT!<Icon right>send</Icon>

        </Button>
      </div>
    )
  }

}


export default withAlert(SetAlert)
