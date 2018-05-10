import React from 'react'
import {Button, Icon, Modal, p, Navbar, NavItem} from 'react-materialize'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
  }

  showModal() {
    this.state.showModal ? this.setState({showModal: false}) : this.setState({showModal: true})
    console.log(this.state.showModal);
  }


  render() {
    return (
      <header className="title-bar">

        <Navbar id="nav-bar" brand={<h1>coin alert</h1>} right style={{height: 100}}>
          <Modal trigger={<NavItem id="getting-started" onClick={() => this.showModal()}>Getting started</NavItem>}>
            <p>Coin Alert offers up-to-the-minute value of Bitcoin across 3 different currencies. It allows the user to set parameters to alert him or her when specified values are reached, or particular gains or losses occur.</p>
          </Modal>
        </Navbar>
      </header>
    )
  }
}

export default Header
