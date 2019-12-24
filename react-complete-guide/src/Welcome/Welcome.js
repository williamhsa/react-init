import React from 'react'

const Welcome = (props) => {
  return (
    <div className="Welcome">
      <h3> Welcome, {props.name}!  </h3>
    </div>
  )
}

export default Welcome