import React from 'react'
import {Button, Icon, Modal, p, Navbar, NavItem} from 'react-materialize'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
  }

  render() {
    return (
      <Navbar id="nav-bar" brand={<h1>coin alert</h1>} right style={{height: 100}}>
        <Modal id="modal" trigger={<NavItem id="getting-started">About</NavItem>}>
          <p>Coin Alert offers up-to-the-minute value of Bitcoin across 3 different currencies.
          It allows the user to set parameters to alert him or her when specified values are reached,
          or particular gains or losses occur.</p>
        </Modal>
      </Navbar>
    )
  }
}

export default Header
