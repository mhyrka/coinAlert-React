import React from 'react'
import { Button, Icon } from 'react-materialize'
import { withAlert } from 'react-alert'

class SetAlert extends React.Component {

  render() {
    return (
      <div className="set-alert">
        <Button onClick={
          () => {this.props.alert.show("Oh look, an alert!")}
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
