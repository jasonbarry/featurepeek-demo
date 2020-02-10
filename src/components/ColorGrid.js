import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
        {backgroundColors.map((backgroundColor, i) => (
          <motion.div
            key={`motion-${i}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ type: 'spring', delay: (i + 2) * 0.08 }}
          >
            <div css={block} style={{ backgroundColor }} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
  
