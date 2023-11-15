// Repeated.tsx
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface RepeatedProps {
  message: string
}

const Top: React.FC<RepeatedProps> = ({ message }) => {
  const [totalHeight, setTotalHeight] = useState<number>(0)

  useEffect(() => {
    const handleResize = (): void => {
      const windowHeight = window.innerHeight
      if (totalHeight < windowHeight) {
        setTotalHeight(windowHeight)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [totalHeight])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen w-screen h-screen flex flex-wrap items-center justify-center font-poppins overflow-hidden"
    >
      {[...Array(1000)].map((_, index) => {
        const shouldContinue = totalHeight < window.innerHeight
        if (!shouldContinue) return null

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            exit={{ opacity: 0.2, y: -10 }}
            className="text-[#ffffff] font-poppins font-bold tracking-[.1rem] text-[4rem] sm:text-[8rem] mx-2 my-2 outline-black break-words"
          >
            {message}
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default Top
