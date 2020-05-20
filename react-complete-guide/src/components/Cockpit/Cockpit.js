import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = '';

  useEffect(() => {
    console.log('Cockpit component');
    // Http request
    // setTimeout(() => {
    const timer = setTimeout(() => {
      alert('Data saved!');
    } , 2000);
    return () => {
      clearTimeout(timer);
      console.log('Render de limpeza useEffect');
      // executa antes do main useeffect function, mas antes do primeiro render cycle
    };
  },[]);

  useEffect(() => {
    console.log('Sendo executado uma unica vez!');
  }, []);
  
  // if (props.showPersons) btnClass = classes.Red;
  //
  // if (props.persons.length <= 2) {
  //   assignedClasses.push(classes.red); // classes = ['red']
  // }
  // if (props.persons.length <= 1) {
  //   assignedClasses.push(classes.bold);
  // }

  return (
    // <div className={classes.Cockpit}>
    <div>
      <h1>{props.title}</h1>
      <button
        className={btnClass}
        // onClick={ () => this.switchNameHandler('Jose') }
        onClick={ props.toggle }
      > Toggle </button>
    </div>

  );
};

export default Cockpit;