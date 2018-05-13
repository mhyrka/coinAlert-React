import React from 'react'
import { Button, Icon } from 'react-materialize'

class SetAlert extends React.Component {

  render() {
    return (
      <div className="set-alert">
        <Button id="set-alert-btn" style={{width: 502}} waves='light'>SET ALERT!<Icon right>send</Icon></Button>
      </div>
    )
  }

}


export default SetAlert
