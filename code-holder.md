<header className="title-bar">
  <div className="menu">
    <Modal trigger={<i className="material-icons 5x">menu</i>}>
      <p>Coin Alert offers up-to-the-minute value of Bitcoin across 3 different currencies. It allows the user to set parameters to alert him or her when specified values are reached, or particular gains or losses occur.</p>
      </Modal>
  </div>
  <h1>coin alert</h1>
</header>


```
<div className="parameters-section">
  <div id="currency-selector-dropdown" onChange={(e) => this.handleCurrencyChange(e)}>
    <Dropdown trigger={<Button id="dropdown-btn" style={{width: 502}} >Select Currency</Button>}>
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
```


onClick={(e) => this.handleCurrencyChange(e, 'GBP')}

options={{onCloseEnd: (e) => {window.alert('hi')}}

if (globalCurrentPrice > ((initialValue[currencySelected] * (percentGain / 100)) + initialValue[currencySelected]) && percentGain !== 0) {
  window.alert(`Bitcoin has gained ${percentGain}%`)
  clearInterval(window.myInterval)
} else if (globalCurrentPrice < (initialValue[currencySelected] - (initialValue[currencySelected] * (percentLoss / 100))) && percentLoss !== 0) {
  window.alert(`Bitcoin has lost ${percentLoss}%`)
  clearInterval(window.myInterval)
} else if (parseInt(globalCurrentPrice) === parseInt(customPrice)){
  window.alert(`Bitcoin has reached value: ${customPrice}!`)
  clearInterval(window.myInterval)
}



this.props.alert.show(`Alert Set. You will be notified when BTC gains ${this.state.percentGain}%`);
