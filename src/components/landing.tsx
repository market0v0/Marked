// Landing.tsx
import React from 'react'
import Image from 'next/image'
import { Button } from 'antd'

/* import * as handlers from '../handlers'
import * as utils from '../utils/utils'
import Show from './show' */

const Landing: React.FC = () => {
/*   const [question, setQuestion] = useState('')
  const [message1, setMessage1] = useState('')
  const [message2, setMessage2] = useState('') */

  /* const [open, setOpen] = useState(false)

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
  } */

  return (
    <div className='font-poppins flex min-h-full w-full flex-col items-center justify-center gap-4 rounded-md border-2 border-[#9f9f9f0b] bg-[#9f9f9f10] px-10 py-2 text-white md:w-[30rem]'>
      <div className='relative h-20 w-[20rem]'>
        <Image src={'/logo.svg'} fill alt='marked' />
      </div>
      <span className='text-center text-sm'>
        Personalize your messages, create shareable links, and make every
        interaction memorable with ease!
      </span>
        <div className='flex flex-col gap-2 text-center'>
        <Button className='bg-[#F9C407] hover:bg-slate-600' type='primary' onClick={() => { window.location.href = '/repeat' }}>
          Create a repeating Message
        </Button>
        <span>
          or
        </span>
        <Button className='hover:bg-[#F9C407] bg-slate-600' type='primary' onClick={() => { window.location.href = '/qrmessage' }}>
          Create a longMessage
        </Button>
        </div>

 {/*      </Popover> */}
    </div>
  )
}

export default Landing
