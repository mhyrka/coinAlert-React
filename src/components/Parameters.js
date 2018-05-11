import React from 'react'

import { Dropdown, NavItem, Button, Tabs, Tab } from 'react-materialize'

class Parameters extends React.Component {
  render() {
    return (
      <div className="parameters-section">
        <div id="currency-selector-dropdown">
          <Dropdown trigger={<Button id="dropdown-btn" style={{width: 502}}>Select Currency</Button>}>
            <NavItem>U.S. Dollar</NavItem>
            <NavItem>Great British Pound</NavItem>
            <NavItem divider />
            <NavItem>Euro</NavItem>
          </Dropdown>
        </div>

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
