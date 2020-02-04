import React from 'react'
import { css } from '@emotion/core'

const container = css`
  -webkit-backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 100px;
  bottom: 0;
  line-height: 0;
  position: fixed;
  padding: 16px;
  padding-bottom: 32px;
  text-align: center;
  width: 100%;
`

export default ({ currentStep, totalSteps }) => {
  const arr = Array(totalSteps)
  const steps = arr.fill(<div />)
  return (
    <div css={container}>
      {steps.map((step, i) => {
        const isActive = currentStep === i + 1
        const dot = css`
          background-color: ${isActive ? '#05c5cc' : '#d9d9d9'};
          border-radius: 8px;
          display: inline-block;
          height: 8px;
          margin-left: 5px;
          margin-right: 5px;
          transform: scale(${isActive ? 1.5 : 1});
          transition: transform 0.3s ease, background-color 0.3s ease;
          width: 8px;
          &:hover {
            background-color: ${isActive ? '#05c5cc' : '#bfbfbf'};
            transform: scale(${isActive ? 1.5 : 1.2});
          }
        `

        return (
          <a
            key={`step-${i}`}
            css={dot}
            href={`/${i}`}
          />
        )
      })}
    </div>
  )
}
