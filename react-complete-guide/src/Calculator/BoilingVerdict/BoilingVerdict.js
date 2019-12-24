import React from 'react'

const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p> A água ferceria. </p>
  }
  return <p> A água não ferveria. </p>
}

export default BoilingVerdict