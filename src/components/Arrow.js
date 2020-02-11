import React from 'react'
import { css } from '@emotion/core'

import nextArrow from '../img/next.svg'
import previousArrow from '../img/previous.svg'

const container = css`
  align-items: center;
  display: flex;
  height: calc(100vh - 180px);
  justify-content: center;
  min-width: 96px;
  width: calc(50vw - 320px);
`

const button = css`
  background: none;
  border: 0;
  cursor: pointer;
  position: fixed;
`

const svg = css`
  opacity: 0.15;
  transition: opacity 0.2s ease, transform 0.2s ease;
  &:hover {
    opacity: 0.25;
    transform: scale(1.1);
  }
  &:active {
    opacity: 0.25;
    transform: scale(1);
  }
`

export default ({ direction, href }) => {
  const arrow = direction === 'previous' ? previousArrow : nextArrow
  return (
    <div css={container} className="hide-on-mobile">
      <a css={button} href={href}>
        <img alt={direction} css={svg} height={48} src={arrow} width={48} />
      </a> 
    </div>
  )
}
  