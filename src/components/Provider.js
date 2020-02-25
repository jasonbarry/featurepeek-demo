import React from 'react'
import { useDeck } from 'gatsby-theme-mdx-deck'
import { Global, css } from '@emotion/core'

import Arrow from './Arrow'
import Button from './Button'
import Logo from './Logo'
import Steps from './Steps'

const mediaQueries = css`
  body {
    overflow: auto !important;
  }
  #gatsby-focus-wrapper > div > div > div {
    height: auto !important;
  }
  .mobile-only {
    display: none;
  }
  p a {
    &::after {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 3px;
      content: ' ';
      display: block;
      height: 3px;
      position: absolute;
      bottom: -1px;
      transform: scale(0);
      transition: all 0.15s ease;
      width: 100%;
    }
    &:hover::after {
      transform: scale(1);
    }
  }

  @keyframes wave-animation {
      0% { transform: rotate(  0.0deg) }
     10% { transform: rotate(-10.0deg) }
     20% { transform: rotate( 12.0deg) }
     30% { transform: rotate(-10.0deg) }
     40% { transform: rotate(  9.0deg) }
     50% { transform: rotate(  0.0deg) }
    100% { transform: rotate(  0.0deg) }
  }

  @media screen and (max-width: 640px) {
    header .logo {
      overflow: hidden;
      width: 64px;
    }
    .hide-on-mobile {
      display: none !important;
    }
    .mobile-only {
      display: block !important;
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

const emptyStyles = {
  alignItems: 'center',
  display: 'flex',
  height: '95vh',
  justifyContent: 'center',
  minWidth: '96px',
  width: '25vw',
}

export default ({ children }) => {
  const { index, length } = useDeck()
  return (
    <>
      <Global styles={mediaQueries} />
      {index > 0 &&
        <header css={header}>
          <Logo />
          <Button href="https://dashboard.featurepeek.com/login" target="_blank">Create account</Button>
        </header>
      }
      <div style={{ display: 'flex' }}>
        {index > 0 ? <Arrow direction="previous" href={`/${index - 1}`} /> : <div className="hide-on-mobile" style={emptyStyles} />} 
        {children}
        {index > 0 && index < length - 1 ? <Arrow direction="next" href={`/${index + 1}`} /> : <div className="hide-on-mobile" style={emptyStyles} />}
      </div>
      {index > 0 && <Steps currentStep={index + 1} totalSteps={length} />}
    </>
  )
}
  
