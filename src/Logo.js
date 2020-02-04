import React from 'react'

import logo from './img/logo.svg'

export default ({ width }) => {
  return (
    <a href="https://featurepeek.com" target="_blank">
      <img alt="FeaturePeek logo" src={logo} width={width || 263} />
    </a>
  )
}
  
