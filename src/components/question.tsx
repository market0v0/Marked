import { Button } from 'antd'
import React, { useState } from 'react'
import Image from 'next/image'

interface QuestionProps {
  question: string
  message: string
}

const Question: React.FC<QuestionProps> = ({ question, message }) => {
  const [showMessage, setShowMessage] = useState(false)

  const handleButtonClick = (): void => {
    setShowMessage(!showMessage)
  }

  return (
    <div className='font-poppins flex min-h-full w-[20rem] flex-col items-center justify-center gap-4 rounded-md border-2 border-[#9f9f9f0b] bg-[#212635e8] px-10 py-2 font-bold text-white'>
      <div className='relative h-8 w-full  px-2 py-4 border-b-2 border-[#9f9f9fd5]'>
        <Image src={'/logo.svg'} fill alt='marked' />
      </div>
      <div className='px-10 py-2'>{question}</div>
      {showMessage && <div className='w-[10rem] text-center px-2 py-2 bg-slate-700 rounded-md'>{message}</div>}
      <div className='flex gap-2'>
        <Button
          className='bg-[#F9C407] w-[15rem] font-semibold text-white'
          onClick={handleButtonClick}
        >
          Read Message
        </Button>
      </div>
    </div>
  )
}

export default Question
