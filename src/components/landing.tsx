// Landing.tsx
import React, { useState } from 'react'
import Image from 'next/image'
import {
  Button,
  Progress,

  message as antdMessage,
  Popover
} from 'antd'

import * as handlers from '../handlers'
import * as utils from '../utils/utils'
import Show from './show'

const Landing: React.FC = () => {
  const [question, setQuestion] = useState('')
  const [message1, setMessage1] = useState('')
  const [message2, setMessage2] = useState('')

  const [open, setOpen] = useState(false)

  const hide = (): void => {
    setOpen(false)
  }

  const handleOpenChange = (newOpen: boolean): void => {
    if (
      question.trim().length === 0 ||
      message1.trim().length === 0 ||
      message2.trim().length === 0
    ) {
      void antdMessage.error('All fields are required')
      return
    }
    setOpen(newOpen)
  }

  return (
    <div className='font-poppins flex min-h-full w-full flex-col items-center justify-center gap-4 rounded-md border-2 border-[#9f9f9f0b] bg-[#9f9f9f10] px-10 py-2 text-white md:w-[30rem]'>
      <div className='relative h-20 w-[20rem]'>
        <Image src={'/logo.svg'} fill alt='marked' />
      </div>
      <span className='text-center text-sm'>
        Personalize your messages, create shareable links, and make every
        interaction memorable with ease!
      </span>
      <input
        type='text'
        placeholder={'QUESTION (yes or no)'}
        className='w-full rounded-md px-2 py-2 text-sm text-black'
        value={question}
        onChange={(e) => { handlers.onQuestionChange(e, setQuestion, 20) }}
      />
      <Progress percent={utils.progress(question, 20)} showInfo={false} status={ 'exception'}/>

      <input
        type='text'
        placeholder={'MESSAGE '}
        className='w-full rounded-md px-2 py-2 text-sm text-black'
        value={message1}
        onChange={(e) => { handlers.onMessage1Change(e, setMessage1, 10) }}
      />
      <Progress percent={utils.progress(message1, 10)} showInfo={false} status={ 'exception'}/>

      <input
        type='text'
        placeholder={'OUTCOME MESSAGE '}
        className='w-full rounded-md px-2 py-2 text-sm text-black'
        value={message2}
        onChange={(e) => { handlers.onMessage2Change(e, setMessage2, 30) }}
      />
      <Progress percent={utils.progress(message2, 30)} showInfo={false} status={ 'exception'}/>

      <Popover
        className='bg-[#F9C407] hover:bg-slate-600'
        content={
          <div>
             <Show question={question} message1={message1} message2={message2} />
            <a onClick={hide}>Close</a>
          </div>
        }
        title='Message succesfully '
        trigger='click'
        open={open}
        onOpenChange={handleOpenChange}
      >
        <Button className='bg-[#F9C407] hover:bg-slate-600' type='primary'>
          Create a Message
        </Button>
      </Popover>
    </div>
  )
}

export default Landing
