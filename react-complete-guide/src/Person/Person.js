import React from 'react'

const person = (props) => {
  // return <p> I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
  return (
    <div>
      <p> I'm a { props.name } and I am { props.age } years old!</p>
      <p> { props.children } </p>
    </div>
  )
}

export default person




/* 
- working with Props

when using class-based components, it's this.props

class Person extends Component {
  render() {
    return <p> My name is {this.props} </p>
  }
}

- Children Property
- understanding & using state
  - tomar cuidados na hora de usar 'state' em componentes funcionais.
    pois a app se torna imprevisível e dificil de gerenciar, especialmente à medida
    que cresce

*/