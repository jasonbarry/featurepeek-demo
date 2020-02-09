import React from 'react'
import { css } from '@emotion/core'

const container = css`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 640px;
  width: 100%;
`

const block = css`
  border-radius: 16px;
  margin: 40px;
  height: 60px;
  width: 60px;
`

const backgroundColors = [
  'red',
  'orange',
  'gold',
  'yellowgreen',
  'rebeccapurple',
  'cornflowerblue',
  'pink',
  'violet',
]

export default () => {
  return (
    <div css={container}>
      {backgroundColors.map(backgroundColor => (
        <div css={block} style={{ backgroundColor }} />
      ))}
    </div>
  )
}
  
