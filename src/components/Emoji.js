import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { css } from '@emotion/core'

const container = css`
  align-items: center;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: -48px;
  margin-top: -48px;
  max-width: 640px;
  width: 100%;
`

const emojis = [
  { unicode: '\uD83D\uDCF8', label: 'Camera with flash' },
  { unicode: '\uD83D\uDDBC', label: 'Picture frame' },
  { unicode: '\uD83C\uDFAC', label: 'Clapper board' },
]

const variants = {
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
  },
  hidden: { 
    opacity: 0,
    scale: 0.25,
    y: 25,
  },
}

export default () => {
  return (
    <div css={container}>
      <AnimatePresence>
        {emojis.map((emoji, i) => (
          <motion.h1
            key={`motion-${i}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ type: 'spring', delay: (i + 2) * 0.08 }}
          >
            <span aria-label={emoji.label} role="img">{emoji.unicode}</span>
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  )
}
  
