import React, { useState } from 'react'
import Image from 'next/image'
import { Button, Progress, Input, Popover, message as antdMessage } from 'antd'
import * as utils from '../utils/utils'
import * as handlers from '../handlers'
import QRCode from './qrGenerator'
import CryptoJS from 'crypto-js'
const RepeatMessageForm: React.FC = () => {
  const rootUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const [message, setMessage] = useState('')
  const [sender, setSender] = useState('')
  const [recipient, setRecipient] = useState('')
  const [open, setOpen] = useState(false)
  const [url, setUrl] = useState('')

  const hide = (): void => {
    setOpen(false)
  }


  const handleOpenChange = (newOpen: boolean): void => {

    if (
      message.trim().length === 0 ||
      sender.trim().length === 0 ||
      recipient.trim().length === 0
    ) {
      void antdMessage.error('All fields are required')
      return
    }
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify({ message, sender, recipient }),
      'secret-key'
    ).toString()

    const url = `${rootUrl}/longmessage?data=${encodeURIComponent(encryptedData)}`
    setUrl(url)
    setOpen(newOpen)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function handleInputChange(e: { target: { value: React.SetStateAction<string> } }) {
    /* setMessage(e.target.value); */
    handlers.onLongMessageChange(e.target.value, setMessage, 500)
  }

  return (
    <div className='font-poppins flex h-[35rem] w-full flex-col items-center justify-center gap-4 rounded-md  md:bg-[#9f9f9f10] px-10 py-2 text-white md:w-[30rem]'>
  
      <div className='relative h-20 w-[20rem]'>
        <Image src={'/logo.svg'} fill alt='marked' className='cursor-pointer' onClick={() => { window.location.href = '/' }} />
      </div>
      <span className='text-center text-sm'>Share your thoughts</span>
      <input
        type='text'
        placeholder={'From'}
        className='w-full rounded-md px-2 py-2 text-sm text-black'
        value={sender}
        onChange={(e) => {
          handlers.onSenderChange(e, setSender, 10)
        }}
      />
      <input
        type='text'
        placeholder={'Send to ...'}
        className='w-full rounded-md px-2 py-2 text-sm text-black'
        value={recipient}
        onChange={(e) => {
          handlers.onRecipientChange(e, setRecipient, 10)
        }}
      />
      <textarea className='text-start h-[20vh] w-full p-2 rounded-xl text-black' value={message}
        onChange={handleInputChange} />
      <Progress
        percent={utils.progress(message, 500)}
        showInfo={false}
        status={'exception'}
      />
      <Popover
        className=' '
        content={
          <div>
            <a onClick={hide}>Close</a>
            <QRCode message={url} />

          </div>
        }
        trigger='click'
        open={open}
        onOpenChange={handleOpenChange}
      >
        <Button
          className='bg-[#F9C407] hover:bg-slate-600'
          type='primary'
        >
          Generate message link
        </Button>
      </Popover>
    </div>
  )
}

export default RepeatMessageForm
