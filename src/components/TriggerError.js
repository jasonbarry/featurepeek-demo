import React from 'react'

import Button from './Button'

export default () => {
  const click = (event) => {
    event.preventDefault()
    throw new Error('Example error for sake of simplicity')
  }

  return (
    <Button color="red" onClick={click}>Throw JavaScript error</Button>
  )
}
  
