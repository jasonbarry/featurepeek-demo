import React from 'react'

export default ({ children }) => {

  // TODO: hacky way to allow scrolling in a slide. 
  // if anyone has a better way of doing this, I'm all ears. -- @jasonbarry
  return (
    <>
      <div>{children}</div>
      <style global jsx>
        {`
          #gatsby-focus-wrapper > div > div {
            height: initial !important;
          }
        `}
      </style>
    </>
  )
}
  
