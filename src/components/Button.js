import React from 'react'
import { css } from '@emotion/core'

const flex = css`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 64px;
  min-width: 192px;
`

const container = css`
  align-items: center;
  background-image: linear-gradient(rgb(5, 197, 204), rgb(19, 183, 209));
  border-radius: 36px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  font-size: 18px;
  font-weight: 500;
  justify-content: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  transition: all 0.1s cubic-bezier(0, 0, 1, 2);
  white-space: nowrap;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    padding: 4px 8px;
  }
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(2px);
  }
`

const button = css`
  color: white;
  display: block;
  font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 20px;
  padding-right: 20px;
  text-decoration: none;
`

export default ({ href, target, children }) => {
  return (
    <div css={flex}>
      <div css={container}>
        <a css={button} href={href} target={target}>{children}</a>
      </div>
    </div>
  )
}
  