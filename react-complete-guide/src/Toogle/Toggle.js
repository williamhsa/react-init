import React, { Component } from 'react'

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
    // this.handleClick = this.handleClick.bind(this)
  }

  // handleClick() {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }));
  // }
  handleClick = () => {
    // console.log('this: ', this)
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    )
  }
}

export default Toggle