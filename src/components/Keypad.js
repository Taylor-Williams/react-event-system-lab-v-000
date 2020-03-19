class Keypad extends react.Component {

  enteringLog = () => {
    console.log("Entering password...")
  }
  render() {
    return <input onKeyUp={this.enteringLog} type='password' />
  }
}
