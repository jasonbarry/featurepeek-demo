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

export default ({ demo, width }) => {
  return (
    <button className="logo" css={styles} onClick={() => navigate(demo ? '/1' : '/0')}>
      <img alt="FeaturePeek logo" src={demo ? logoDemo : logo} width={width || 263} />
    </button>
  )
}
