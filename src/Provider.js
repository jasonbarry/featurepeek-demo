import React, { useEffect } from 'react'

export default ({ children }) => {

  // TODO: hacky way to allow scrolling in a slide. 
  // if anyone has a better way of doing this, I'm all ears. -- @jasonbarry
  useEffect(() => {
    if (!document.getElementById('provider-height-override')) {
      const style = document.createElement('style')
      style.id = 'provider-height-override'
      style.innerText = '#gatsby-focus-wrapper > div > div { height: initial !important }'
      document.head.appendChild(style)
    }
  }, [])

  return children
}
  
