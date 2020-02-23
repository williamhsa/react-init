import React from 'react'
import './Person.css'

const Person = (props) => {
  // return <p> I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
  const rnd = Math.random()

  if (rnd > 0.7) {
    throw new Error('Something went wrong')
  }

  return (
   <div className="Person">
      <p onClick={ props.click } > I'm a { props.name } and I am { props.age } years old!</p>
      <p> { props.children } </p>
      <input type="text" onChange={ props.changed } value={ props.name } />
      <button>Ok</button>
    </div>
  )
}

export default Person




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

- Este componente não possui estado porque ele não tem gerenciamento de estado interno e é uma
  boa prática criar esses componentes sem estado, também chamados de 'burros' porque eles não tem
  lógica interna ou componentes de apresentação porque eles apresentam algo, eles produzem conteúdo, eles obtem
  apenas dados externos e os geram de forma estruturada

*/