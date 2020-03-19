// Code EyesOnMe Component Here
class EyesOnMe extends React.Component{
  render() {
    return <button onFocus={this.focus} onBlur={this.blur} />
  }
}
