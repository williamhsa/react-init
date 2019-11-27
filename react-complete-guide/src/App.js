import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'

const app = props => {
  // porem vamos usar destructuring
  // const stateArr = useState({
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Will', age: 27 },
      { name: 'Isa', age: 25 },
      { name: 'Tupã', age: 1 }
    ]
  })

  const [otherState, setOtherState ] = useState('some other value')

  console.log('new', personsState)
  console.log('new', otherState)

  // state = {
  //   persons: [
  //     { name: 'Will', age: 27 },
  //     { name: 'Isa', age: 25 },
  //     { name: 'Tupã', age: 1 }
  //   ],
  //   otherState: 'some other value'
  // }

  // utilizar Handler, para mostrar que é um manipulador de eventos
  const switchNameHandler = () => {
    // console.log('Was clicked!')
    // DON'T DO THIS -> this.state.persons[0].name = 'max'
    /*
      este método nos permite atualizar essa propriedade de estado especial, fazendo com que 
      o React conheça essa atualização e atualize o DOM. setState() pega um objeto como um
      argumento e ele irá mesclar tudo o que definimos aqui com o nosso estado existente.
    */
    
   setPersonsState({
      persons: [
        { name: 'XXX', age: 2 },
        { name: 'YYY', age: 2 },
        { name: 'ZZZ', age: 1 }
      ]
      // otherState: personsState.otherState  -> uma maneira de fazer, mas não elegante
    })

    setOtherState('novo estado')
  
    console.log('dentro da funcao', personsState)
    console.log('dentro da funcao', otherState)
  }

  return (
    <div className="App">

      <h1> Hi, I'm React App </h1>
      <h2> learning about me </h2>
      {/* <Person></Person> */}
      {/* <Person /> */}

      <button onClick={switchNameHandler}> Switch Name </button>

      <Person 
        name={ personsState.persons[0].name } 
        age={ personsState.persons[0].age }
      />
      <Person 
        name={ personsState.persons[1].name } 
        age={ personsState.persons[1].age }
      > 
        My Hobbies: Muay thai 
      </Person>
      <Person 
        name={ personsState.persons[2].name } 
        age={ personsState.persons[2].age }
      />

      {/* <Person name="Will" age="27"/>
      <Person name="Isa" age="25"> My Hobbies: Muay thai </Person>
      <Person name="Tupã" age="1"/> */}
      
    </div>
    // <h1>Another heading</h1> --> isso da errado poss esta fora do elemento raiz
  )
  // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App')
  // return React.createElement(
  //   'div', 
  //   null, 
  //   React.createElement('h1', {className: 'App'}, 'does this work now?'))
  
}

export default app


/* 
método render(), react chamará esse método para renderizar algo na tela.

- Props são configurados e passados de fora como 'name' e 'age' para o componente
person. State é gerenciado dentro de um componente, State só está disponivel assim
para class (componentes) que extendão 'Component'. Ou seja, em componentes React baseados em classe.

- Handling Events with Methods
  state and method setState()

- Using the useState() Hook for State Manipulation

  React Hooks é apenas o nome dele, é basicamente uma coleção de funções
  expostas pelo React que você pode usar em componentes funcionais e, portanto,
  tem que converter estes componentes de classe em um componente funcional.

  - useState() é o hook que nos permite gerenciar o estado em um componente funcional
    retorna um array com exatamente dois elementos e sempre dois elementos, isso é importante.
    Nosso primeiro elemento que receberemos sempre será o nosso estado atual, o segundo elemento do
    array sera uma função que nos permite atualizar esse estado, de modo que o React esteja ciente disso
    e renderize novamente esse componente, que é, obviamente a idade

    usando react hooks, sua função que obtem como segundo elemento do useState(), não mescla o que
    voce passa com o estado antigo. Ao invês disso ele substitui o estado antigo.

    React hooks é tudo sobre funções de uso, com o useState()


*/

/* 
class App extends Component {

  state = {
    persons: [
      { name: 'Will', age: 27 },
      { name: 'Isa', age: 25 },
      { name: 'Tupã', age: 1 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    
   this.setState({
    persons: [
      { name: 'XXX', age: 2 },
      { name: 'YYY', age: 2 },
      { name: 'ZZZ', age: 1 }
    ]
  })

  console.log(this.state)
}


render() {
  return (
    <div className="App">

     <h1> Hi, I'm React App </h1>
     <h2> learning about me </h2>

     <button onClick={this.switchNameHandler}> Switch Name </button>

     <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age }/>
     <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age }> My Hobbies: Muay thai </Person>
     <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age }/>

     //<Person name="Will" age="27"/>
     //<Person name="Isa" age="25"> My Hobbies: Muay thai </Person>
     //<Person name="Tupã" age="1"/> 
     
    </div>
  );

}

export default App;

*/
