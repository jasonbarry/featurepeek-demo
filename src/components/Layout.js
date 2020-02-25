import React from 'react'
import { useDeck } from 'gatsby-theme-mdx-deck'
import { AnimatePresence, motion } from 'framer-motion'

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

export default ({ children }) => {
  const { index } = useDeck()
  return (
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
      {index > 0 &&
        <div className="mobile-only" style={{ color: '#bfbfbf', fontSize: 28, marginTop: 96, textAlign: 'center' }}>
          <p>
            <span>{'\u2190'}&nbsp;&nbsp;</span>
            <em>Swipe</em>
            <span>&nbsp;&nbsp;{'\u2192'}</span>
          </p>
        </div>
      }
    </main>
  )
}
  
