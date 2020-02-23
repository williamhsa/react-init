import React from 'react'

const FormattedDate = (props) => {

  return (
    <div>
      <h2>It is {props.date.toLocaleTimeString()}. (formattedDate component)</h2>
    </div>
  )
}

export default FormattedDate