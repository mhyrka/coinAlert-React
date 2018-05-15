import React from 'react'
import { Button, Icon, Dropdown, NavItem, Row, Input } from 'react-materialize'
import { withAlert } from 'react-alert'

class SetAlert extends React.Component {
  constructor() {
    super()
    this.state = {
      currencySelected: 'USD',
      initialValue: 0,
      percentGain: '',
      percentLoss: '',
      customPrice: 0,
      valueGain: false,
      valueLoss: false,
      value: 'Custom Value'
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
    let value = event.target.value
    this.setState({ customPrice: parseFloat(value) })
  }

  setAlert = (event) => {
    event.preventDefault()

    this.interval = setInterval(() => {
      console.log(this.state.valueGain)
      console.log(this.state.valueLoss)
      if (this.props.currentPrice > ((this.props.initialValue * (this.state.percentGain / 100)) + this.props.initialValue) && this.state.percentGain !== 0) {
        this.props.alert.show(`BTC has gained ${this.state.percentGain}%!`)
        clearInterval(this.interval)
        this.setState({ percentGain: '', percentLoss: '' })
      } else if (this.props.currentPrice < (this.props.initialValue - (this.props.initialValue * (this.state.percentLoss / 100))) && this.state.percentLoss !== 0) {
        this.props.alert.show(`BTC has lost ${this.state.percentLoss}%!`)
        clearInterval(this.interval)
        this.setState({ percentGain: '', percentLoss: '' })
      } else if (+(this.props.currentPrice) === +(this.state.customPrice)) {
        this.props.alert.show(`BTC has reached ${this.state.customPrice}!`)
        clearInterval(this.interval)
      }
    }, 500)
  }

  render() {
    return (
      <div className="set-alert">
        <div className="parameters-section">
          <div className="alert-parameters">
              <Dropdown trigger={<Button id="percent-gain" >Gain: {this.state.percentGain}%</Button>}>
                <NavItem onClick={(e) => this.setPercentGain(e, .01)}>.01%</NavItem>
                <NavItem onClick={(e) => this.setPercentGain(e, 5)}>5%</NavItem>
                <NavItem onClick={(e) => this.setPercentGain(e, 10)}>10%</NavItem>
                <NavItem divider />
              </Dropdown>

              <Dropdown trigger={<Button id="percent-loss" >Loss: {this.state.percentLoss}%</Button>}>
                <NavItem onClick={(e) => this.setPercentLoss(e, .01)}>.01%</NavItem>
                <NavItem onClick={(e) => this.setPercentLoss(e, 5)}>5%</NavItem>
                <NavItem onClick={(e) => this.setPercentLoss(e, 10)}>10%</NavItem>
                <NavItem divider />
              </Dropdown>
          </div>
        </div>

        <Row>
          <Input id="input" s={460} label={this.state.value} onChange={this.setCustomValue}/>
        </Row>

        <Button onClick={ (event) => { this.props.alert.show(`Alert Set: BTC+${this.state.percentGain}%, BTC-${this.state.percentLoss}, BTC=${this.state.customPrice}`); {this.setAlert(event)} } }
          id="set-alert-btn"
          style={{width: 502}}
          waves='light'>SET ALERT!<Icon right>send</Icon>

        </Button>

      </div>
    )
  }

}


export default withAlert(SetAlert)
