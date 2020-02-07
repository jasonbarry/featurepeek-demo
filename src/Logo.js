import React from 'react'

import logo from './img/logo.svg'
import logoDemo from './img/logo-demo.svg'

export default ({ demo, width }) => {
  return (
    <a href="https://featurepeek.com" target="_blank">
      <img alt="FeaturePeek logo" src={demo ? logoDemo : logo} width={width || 263} />
    </a>
  )
}
  
