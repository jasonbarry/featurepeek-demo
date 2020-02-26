import React from 'react'
import { navigate } from '@reach/router'
import { css } from '@emotion/core'

import logo from '../img/logo.svg'
import logoDemo from '../img/logo-demo.svg'

const styles = css`
  -webkit-appearance: none;
  background: none;
  border: 0;
  cursor: pointer;
`

const fpLogo = <img alt="FeaturePeek Logo" src={logo} width="263" />

const demoLogo = (
  <img
    alt="FeaturePeek Demo Logo"
    src={logoDemo}
    height="400"
    width="2164"
    css={css`width: 100%; height: auto;`}
  />
)

export default ({ demo }) => {
  return (
    <button className="logo" css={styles} onClick={() => navigate(demo ? '/1' : '/0')}>
      {demo ? demoLogo : fpLogo}
    </button>
  )
}
