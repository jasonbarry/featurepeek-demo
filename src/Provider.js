import React from 'react'
import { useDeck } from 'mdx-deck'
import { css } from '@emotion/core'

import Button from './Button'
import Logo from './Logo'

const header = css`
  -webkit-backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-between;
  padding: 16px;
  position: fixed;
  top: 0;
  width: calc(100% - 48px);
  z-index: 1;
`

export default ({ children }) => {
  const { index } = useDeck()
  return (
    <>
      <header css={header}>
        {index > 0 &&
          <>
            <Logo />
            <Button href="https://dashboard.featurepeek.com/login" target="_blank">Create account</Button>
          </>
        }
      </header>
      <div>{children}</div>
    </>
  )
}
  
