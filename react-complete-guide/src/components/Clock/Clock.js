import React, { Component } from 'react'
import FormattedDate from '../FormattedDate/FormattedDate'

class Clock extends Component {

  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }


  // métodos de ciclo de vida
  componentDidMount() {
    this.setState({
      city: 'Campinas'
    })

    console.log('states', this.state)

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h5> City: {this.state.city}</h5>
        <FormattedDate date={this.state.date}></FormattedDate>
      </div>
    )
  }
}

export default Clock 


/* 
Agora o relógio bate a cada segundo.

Vamos recapitular rapidamente o que está acontencendo e a ordem na qual os métodos são chamados:

Quando <Clock /> é passado para ReactDOM.render(), o React chama o construtor do componente 
Clock. 
Como Clock precisa exibir a hora atual, ele inicializa this.state com um objeto 
incluindo a hora atual. Mais tarde, atualizaremos este state.

React chama então o método render() do componente Clock. 
É assim que o React aprende o que deve ser exibido na tela. 
React em seguida, atualiza o DOM para coincidir com a saída de renderização do Clock.

Quando a saída do Clock é inserida no DOM, o React chama o método do ciclo de vida componentDidMount().
 Dentro dele, o componente Clock pede ao navegador para configurar um temporizador para chamar o 
 método tick() do componente uma vez por segundo.

A cada segundo o navegador chama o método tick(). 
Dentro dele, o componente Clock agenda uma atualização de UI chamando setState() 
com um objeto contendo a hora atual. Graças à chamada setState(), o método render() 
será diferente e, portanto, a saída de renderização incluirá a hora atualizada. 
React atualiza o DOM de acordo.

Se o componente Clock for removido do DOM, o React chama o método do ciclo de vida 
componentWillUnmount() para que o temporizador seja interrompido.

*/


/* 
const clock = (props) => {

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  )
}

export default clock 


*/