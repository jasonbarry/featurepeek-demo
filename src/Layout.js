import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDeck } from 'mdx-deck'

import Button from './Button'

const variants = {
  visible: { 
    opacity: 1, 
    y: 0,
  },
  hidden: { 
    opacity: 0, 
    y: 25,
  },
}

const keydown = (keyCode) => window.dispatchEvent(new KeyboardEvent('keydown', { keyCode }))
const previous = () => keydown(37)
const next = () => keydown(39)

export default ({ children }) => {
  const { step, index, length } = useDeck()

  return (
    <div style={{ display: 'flex' }}>
      {index > 0 ? <Button direction="previous" onClick={previous} /> : <div style={{ minWidth: '25vw' }} />} 
      <div>
        {children.map((child, i) => (
          <AnimatePresence key={`motion-${i}`}>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              transition={{ type: 'spring', delay: i * 0.08 }}
            >
              {child}
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
      {index < length - 1 ? <Button direction="next" onClick={next} /> : <div style={{ minWidth: '25vw' }} />}
    </div>
  )
}
  
