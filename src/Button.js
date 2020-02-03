import React from 'react'

import nextArrow from './img/next.svg'
import previousArrow from './img/previous.svg'

const containerStyles = {
  alignItems: 'center',
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  minWidth: '25vw',
}

const buttonStyles = {
  background: 'none',
  border: 0,
  cursor: 'pointer',
}

const imageStyles = {
  opacity: 0.15,
}

export default ({ direction, onClick }) => {
  const arrow = direction === 'previous' ? previousArrow : nextArrow
  return (
    <div style={containerStyles}>
      <button onClick={onClick} style={buttonStyles}>
        <img alt={direction} height={48} src={arrow} style={imageStyles} width={48} />
      </button> 
    </div>
  )
}
  