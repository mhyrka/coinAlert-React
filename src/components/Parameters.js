import React from 'react'

import { Dropdown, NavItem, Button } from 'react-materialize'


class Parameters extends React.Component {

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
