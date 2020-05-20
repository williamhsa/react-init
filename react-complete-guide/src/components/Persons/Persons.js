import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends  Component{
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  componentWillReceiveProps(props) {
    console.log('[Persons.js] componentWillReceiveProps', props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('[Persons.js] getSnapshotBeforeUpdate');
  //   return { message: 'Snapshot!' };
  // }

  componentWillUpdate() {
    console.log('[Persons.js] componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    //cenario em que quero limpar alguma coisa
    console.log('Persons.js, componentWillUnmount');
    //executado logo depois que o componente é removido
  }

  render() {
    console.log('[persons.js] rendering...');
    return this.props.persons.map( (person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
};

export default Persons;

/* 
const persons = (props) => {
  return ();
}


*/