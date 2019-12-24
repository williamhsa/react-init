import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'
import Welcome from './Welcome/Welcome'
import Clock from './Clock/Clock'
import Toggle from './Toogle/Toggle'
import WarningBanner from './WarningBanner/WarningBanner'
import Calculator from './Calculator/Calculator'

class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = { showWarning: true}
  // }

  state = {
    persons: [
      { id: 'asd1', name: 'Will', age: 27 },
      { id: 'fdd2', name: 'Isa', age: 25 },
      { id: 'jkh6', name: 'Tupã', age: 1 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showWarning: true
  }

  deletePersonHandler = (personIndex) => {
    //  má pratica:
    // const persons = this.state.persons  (desde modo estamos fazendo persons ser um ponteiro, e assim ao trabalhar com persons vc altera o original)
    // boa pratica:
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    // utilizar a remoção utilizando esse jeito é uma má pratica, pois 'persons' é um ponteiro. que tem uma referencia ao 'this.state.persons' ou seja
    // nao esta mudando o original, boa prática é criar uma copia do array de persistencia antes de manipula-lo
    this.setState({persons: persons})

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id
    })
    // melhor pratica, para não criar refernecia no objeto original
    const person = {
      ...this.state.persons[personIndex]
    }
    //  ou desse jeito que é uma abordagem menos moderna
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.name

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState( {persons: persons} )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
    console.log('ae', this.state)
  }

  formatName = (user) => {
    return user.firstName + ' ' + user.lastName
  }

  clickHandler = (e) => {
    e.preventDefault()
    console.log('O link foi clicado!')
  }

  handleToggleWarning = () => {
    this.setState(state => ({
      showWarning: !state.showWarning
    }))
  }

  render() {

    console.log('inside render', this.state)
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    const name = 'William'

    const user = {
      firstName: 'William',
      lastName: 'Henrique'
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map( (person, index) => {
              return <Person 
                name={person.name} 
                age={person.age} 
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }
        </div>
      )
    }

    return (
      <div className="App">

        <Clock>jkasdjkasd </Clock>

        <h1> Hi, I'm React App </h1>
        <h2> learning about me </h2>

        <div>
          <WarningBanner warn={this.state.showWarning}></WarningBanner>
          <button onClick={this.handleToggleWarning}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>

        <Welcome name='Will' />

        <h2> Name: {name}</h2>
        <h2> Nome completo: {this.formatName(user)}</h2>
        <a href='https://www.google.com' onClick={this.clickHandler}> Clique Aqui! </a>

        <Welcome name={user.lastName} />
        <br></br>
        <Toggle/>
        <br></br>
        {/* <button onClick={this.switchNameHandler}> Switch Name </button> */ }
        {/* <button onClick={ this.switchNameHandler.bind(this, 'Tomas') }> Switch Name </button> */}
        
        <Calculator />
        <br></br>

        <button
          style={style} 
          // onClick={ () => this.switchNameHandler('Jose') }
          onClick={ this.togglePersonsHandler }
        > Toggle </button>

        
        {persons}

      </div>
    )
  }
}

export default App


/* 
método render(), react chamará esse método para renderizar algo na tela.
c
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

- Adding Two Way Binding




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


/* 
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
    
      este método nos permite atualizar essa propriedade de estado especial, fazendo com que 
      o React conheça essa atualização e atualize o DOM. setState() pega um objeto como um
      argumento e ele irá mesclar tudo o que definimos aqui com o nosso estado existente.
    
    
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
    <Person></Person>
    <Person /> 

    <button onClick={switchNameHandler}> Switch Name </button>

    <Person 
      name={ personsState.persons[0].name } 
      age={ personsState.persons[0].age }
    />
    <Person 
      name={ personsState.persons[1].name } 
      age={ personsState.persons[1].age }
      click={this.switchNameHandler}
    > 
      My Hobbies: Muay thai 
    </Person>
    <Person 
      name={ personsState.persons[2].name } 
      age={ personsState.persons[2].age }
    />

    <Person name="Will" age="27"/>
    <Person name="Isa" age="25"> My Hobbies: Muay thai </Person>
    <Person name="Tupã" age="1"/>
    
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


*/



/* 
Condicional sem usar uma const que engloba um jsx

 return (
      <div className="App">

        <h1> Hi, I'm React App </h1>
        <h2> learning about me </h2>
        
        <button onClick={this.switchNameHandler}> Switch Name </button> 
         <button onClick={ this.switchNameHandler.bind(this, 'Tomas') }> Switch Name </button>
        <button
          style={style} 
          // onClick={ () => this.switchNameHandler('Jose') }
          onClick={ this.togglePersonsHandler }
        > Toggle </button>
        
        {persons}
      
        /* { 
          this.state.showPersons ? 
            <div>
              <Person 
                name={ this.state.persons[0].name } 
                age={ this.state.persons[0].age }
              />
              
              <Person 
                name={ this.state.persons[1].name } 
                age={ this.state.persons[1].age }
                click={ this.switchNameHandler.bind(this, 'Roberto') }
                changed={ this.nameChangedHandler }
              >
                My Hobbies: Muay thai 
              </Person>
              
              <Person 
                name={ this.state.persons[2].name } 
                age={ this.state.persons[2].age }
              />
            </div> : null
        } */


        /* <Person name="Will" age="27"/> */
        /* <Person name="Isa" age="25"> My Hobbies: Muay thai </Person> */
        /* <Person name="Tupã" age="1"/>  
      
      </div>
    );


*/



/*
// outputting lists

class App extends Component {

  state = {
    persons: [
      { name: 'Will', age: 27 },
      { name: 'Isa', age: 25 },
      { name: 'Tupã', age: 1 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    
    this.setState({
      persons: [
        { name: newName, age: 2 },
        { name: 'YYY', age: 2 },
        { name: 'ZZZ', age: 1 }
      ]
    })

    console.log(this.state)
  }


  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'XXX', age: 2 },
        { name: event.target.value, age: 2 },
        { name: 'ZZZ', age: 1 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
    console.log('ae', this.state)
  }

  render() {

    console.log('inside render', this.state)
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={ this.state.persons[0].name } 
            age={ this.state.persons[0].age }
          />
          
          <Person 
            name={ this.state.persons[1].name } 
            age={ this.state.persons[1].age }
            click={ this.switchNameHandler.bind(this, 'Roberto') }
            changed={ this.nameChangedHandler }
          >
            My Hobbies: Muay thai 
          </Person>
          
          <Person 
            name={ this.state.persons[2].name } 
            age={ this.state.persons[2].age }
          />
        </div>
      )
    }

    return (
      <div className="App">

        <h1> Hi, I'm React App </h1>
        <h2> learning about me </h2>
        
        //  <button onClick={this.switchNameHandler}> Switch Name </button>  
        //  <button onClick={ this.switchNameHandler.bind(this, 'Tomas') }> Switch Name </button>
        <button
          style={style} 
          // onClick={ () => this.switchNameHandler('Jose') }
          onClick={ this.togglePersonsHandler }
        > Toggle </button>
        
        {persons}

      </div>
    );
  }
}

export default App;



 */