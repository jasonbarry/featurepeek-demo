import React, { useState, useEffect } from 'react'
import UAParser from 'ua-parser-js'
import Typist from 'react-typist'
import { css } from '@emotion/core'

const styles = css`
  background: #f6f8fa;
  border-radius: 4px;
  font-size: 18px;
  line-height: 2;
  max-width: 100%;
  min-height: 208px;
  overflow: scroll;
  padding: 32px;
  white-space: pre-wrap;
  word-break: normal;
`

export default () => {
  const [metadata, setMetadata] = useState({})
  useEffect(() => {
    const ua = new UAParser()
    const browser = ua.getBrowser()
    const os = ua.getOS()

    setMetadata({
      Path: document.location.pathname,
      Browser: `${browser.name} ${browser.version} on ${os.name} ${os.version}`,
      Viewport: `${window.innerWidth} x ${window.innerHeight} @${window.devicePixelRatio}x`,
      Language:  window.navigator.language,
    })
  }, [])

  return (
    <pre css={styles}>
      {Object.keys(metadata).map(key => (
        <Typist key={key} avgTypingDelay={20} cursor={{ show: false }} startDelay={400} stdTypingDelay={0}>
          {key}:{Array(14 - key.length).join(' ')}{metadata[key]}
        </Typist>
      ))}
    </pre>
  )
}
  