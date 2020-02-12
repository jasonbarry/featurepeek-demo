import React from 'react'
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
    </main>
  )
}
  
