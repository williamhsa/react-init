import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

// ReactDOM.render(<h1>teste</h1>, document.getElementById('root'));
// registerServiceWorker();

// App é o componente raiz
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
