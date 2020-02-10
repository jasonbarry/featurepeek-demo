import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useDeck } from 'gatsby-theme-mdx-deck'

import Arrow from './Arrow'
import Steps from './Steps'

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
  const { index, length } = useDeck()

  return (
    <>
      <div style={{ display: 'flex' }}>
        {index > 0 ? <Arrow direction="previous" onClick={previous} /> : <div className="hide-on-mobile" style={{ minWidth: '25vw' }} />} 
        <main>
          <AnimatePresence>
            {children.map((child, i) => (
              <motion.div
                key={`motion-${i}`}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={{ type: 'spring', delay: i * 0.08 }}
              >
                {child}
              </motion.div>
            ))}
          </AnimatePresence>
        </main>
        {index > 0 && index < length - 1 ? <Arrow direction="next" onClick={next} /> : <div className="hide-on-mobile" style={{ minWidth: '25vw' }} />}
      </div>
      {index > 0 && <Steps currentStep={index + 1} totalSteps={length} />}
    </>
  )
}
  