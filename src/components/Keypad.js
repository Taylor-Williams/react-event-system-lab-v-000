class Keypad extends React.Component {

  enteringLog = () => {
    console.log("entering password...")
  }
  render() {
    return <input onKeyUp= {enteringLog} type='password' />
  }
}
export default Keypad
