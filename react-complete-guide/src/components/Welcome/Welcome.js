import React, { useState, useEffect } from 'react'

const Welcome = (props) => {

  const [count, setCount] = useState(0);

  // Similar a componentDidMount e componentDidUpdate:
  useEffect(() => {
    console.log('component iniciou e falou')
    // Atualiza o título do documento utilizando a API do navegador
    document.title = `You clicked ${count} times`;

    console.log('depois do click')

  });

  return (
    <div className="Welcome">
      <h3> Welcome, {props.name}!  </h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Welcome