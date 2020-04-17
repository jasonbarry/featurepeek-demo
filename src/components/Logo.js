import React from 'react'
import { navigate } from '@reach/router'
import { css } from '@emotion/core'

import fullLogo from '../img/full-logo.svg'

const styles = css`
  -webkit-appearance: none;
  background: none;
  border: 0;
  cursor: pointer;
`

export default ({ demo, width }) => {
  return (
    <button className="logo" css={styles} onClick={() => navigate(demo ? '/1' : '/0')}>
      <img alt="FeaturePeek logo" src={fullLogo} width={width || 263} />
    </button>
  )
}
