import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const assignedClasses = [];
  const authContext = useContext(AuthContext);
  let btnClass = '';

  console.log('useContext', authContext.authenticated);
  console.log('useContext', authContext.login);

  useEffect(() => {
    console.log('Cockpit component');
    toggleBtnRef.current.click();
    // Http request
    // setTimeout(() => {
    // const timer = setTimeout(() => {
    //   alert('Data saved!');
    // } , 2000);
    return () => {
      // clearTimeout(timer);
      console.log('Render de limpeza useEffect');
      // executa antes do main useeffect function, mas antes do primeiro render cycle
    };
  },[]);

  useEffect(() => {
    console.log('Sendo executado uma unica vez!');
  }, []);
  
  if (props.showPersons) btnClass = classes.Red;

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
    {/*<div>*/}
      <h1>{props.title}</h1>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        // onClick={ () => this.switchNameHandler('Jose') }
        onClick={ props.toggle }
      > Toggle </button>
      {/*<AuthContext.Consumer>*/}
      {/*  {(context) => <button onClick={context.login}> Log iN</button>}*/}
      {/*</AuthContext.Consumer>*/}
      <button onClick={authContext.login}> Log iN</button>
    </div>

  );
};

export default Cockpit;