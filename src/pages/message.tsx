import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import CryptoJS from 'crypto-js'
import { motion, AnimatePresence } from 'framer-motion'
import Question from '@/components/question'
import Top from '@/components/Top'

const CreatedMessage: React.FC = () => {
  const router = useRouter()
  const { data } = router.query

  const [topOpacity, setTopOpacity] = useState<number>(1)
  const [showQuestion, setShowQuestion] = useState<boolean>(false)

  useEffect(() => {
    const opacityTimeout = setTimeout(() => {
      setTopOpacity(0.3)
      setShowQuestion(true)
    }, 4000)

    return () => { clearTimeout(opacityTimeout) }
  }, [])

  if (data === undefined || data === null) {
    return <div>Data is undefined or null</div>
  }

  const decryptedData: string = CryptoJS.AES.decrypt(
    decodeURIComponent(data as string),
    'secret-key'
  ).toString(CryptoJS.enc.Utf8)

  if (decryptedData === '') {
    return <div>Decrypted data is empty</div>
  }

  const {
    question,
    message1,
    message2
  }: { question: string, message1: string, message2: string, value: number } = JSON.parse(decryptedData)

  return (
    <div className='font-poppins flex min-h-[100vh] items-center justify-center bg-[#000B28] relative'>
      <motion.div className='z-0 absolute inset-0' style={{ opacity: topOpacity }}>
        <Top message={message1} />
      </motion.div>
      <AnimatePresence>
        {showQuestion && (
          <motion.div className='z-10 w-[]' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Question question={question} message={message2} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CreatedMessage
