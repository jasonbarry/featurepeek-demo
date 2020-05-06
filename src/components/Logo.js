import React from 'react'
import { navigate } from '@reach/router'
import { css } from '@emotion/core'

import Logo from '../img/full-logo.svg'

export default ({ demo, width }) => {
  
  const styles = css`
    -webkit-appearance: none;
    background: none;
    border: 0;
    cursor: pointer;
    width: ${width || 260};
  `

  return (
    <button className="logo" css={styles} onClick={() => navigate(demo ? '/1' : '/0')}>
      <Logo width={width || 263} />
    </button>
  )
}
