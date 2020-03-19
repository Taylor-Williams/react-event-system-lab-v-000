class Keypad extends React.Component {

  enteringLog = () => {
    console.log("Entering password...")
  }
  render() {
    return <input onKeyUp= {enteringLog()} type='password' />
  }
}
export default Keypad
