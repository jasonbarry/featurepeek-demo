import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'

const LOCAL_STORAGE_KEY = 'hello-my-name-is'

const container = css`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 640px;
  width: 100%;
`

const input = css`
  -webkit-appearance: none;
  appearance: none;
  border: 0;
  border-radius: 3px;
  box-shadow: rgba(67, 90, 111, 0.298039) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.137255) 0px 1px 2px 0px inset;
  font-size: 18px;
  line-height: 24px;
  margin: 16px 32px 16px 0;
  max-width: 240px;
  padding: 10px;
`

const wave = css`
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  display: inline-block;
  transform-origin: 70% 70%;
`

export default () => {

  const [name, setName] = useState('')

  const changeName = (val) => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, val)
    setName(val)
  }

  useEffect(() => {
    const val = window.localStorage.getItem(LOCAL_STORAGE_KEY)
    setName(val)
  }, [])

  return (
    <div css={container}>
      <input autocomplete="off" css={input} type="search" onChange={e => changeName(e.target.value)} placeholder="Type your name here" value={name} />
      {name ?
        <span>
          <span>Hi, </span>
          <strong>{name}</strong>
          <span>! </span>
          <span css={wave}>👋</span>
        </span>
        :
        <div />
      }
    </div>
  )
}
  
