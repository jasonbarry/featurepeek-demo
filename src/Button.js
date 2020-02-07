import React from 'react'
import { css } from '@emotion/core'

const ctaContainer = css`
  align-items: center;
  display: flex;
  justify-content: center;
`

const cta = css`
  background-image: linear-gradient(rgb(5, 197, 204), rgb(19, 183, 209));
  border: 0;
  border-radius: 36px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  color: white;
  font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 20px;
  padding-right: 20px;
  text-decoration: none;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  transition: all 0.1s cubic-bezier(0, 0, 1, 2);
`

export default ({ href, target, children }) => {
  return (
    <div css={ctaContainer}>
      <a css={cta} href={href} target={target}>{children}</a>
    </div>
  )
}
  