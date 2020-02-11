import React from 'react'
import { useDeck } from 'gatsby-theme-mdx-deck'
import { Global, css } from '@emotion/core'

import Button from './Button'
import Logo from './Logo'

const mediaQueries = css`
  body {
    overflow: auto !important;
  }
  #gatsby-focus-wrapper > div > div > div {
    height: auto !important;
  }

  @media screen and (max-width: 640px) {
    header .logo {
      overflow: hidden;
      width: 64px;
    }
    .hide-on-mobile {
      display: none !important;
    }
    main {
      margin-left: 24px;
      margin-right: 24px;
    }
  }
`

const header = css`
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-between;
  padding: 16px;
  padding-right: 8px;
  position: fixed;
  top: 0;
  width: calc(100% - 24px);
  z-index: 1;
`

export default ({ children }) => {
  const { index } = useDeck()
  return (
    <>
      <Global styles={mediaQueries} />
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
  
