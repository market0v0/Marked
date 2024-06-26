import React from 'react'
import Image from 'next/image'
import { Button } from 'antd'

const Landing: React.FC = () => {
  return (
    <div className='font-poppins flex w-full flex-col items-center justify-center gap-4 rounded-md px-10  py-2 text-white md:h-[25rem] md:w-[30rem] md:bg-[#9f9f9f10]'>
      <div className='relative h-20 w-[20rem]'>
        <Image src={'/logo.svg'} fill alt='marked' />
      </div>
      <span className='text-center text-sm'>
        Personalize your messages, create shareable links, and make every
        interaction memorable with ease!
      </span>
      <div className='flex flex-col gap-2 text-center'>
        <Button
          className='bg-[#F9C407] hover:bg-slate-600'
          type='primary'
          onClick={() => {
            window.location.href = '/repeat'
          }}
        >
          Create a repeating Message
        </Button>
        <span>or</span>
        <Button
          className='bg-slate-600 hover:bg-[#F9C407]'
          type='primary'
          onClick={() => {
            window.location.href = '/qrmessage'
          }}
        >
          Create a longMessage
        </Button>
      </div>
    </div>
  )
}

export default Landing
