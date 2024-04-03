import React, { useState } from 'react'
import Image from 'next/image'
import { Button, Progress, Input } from 'antd'
import * as utils from '../utils/utils'
import { useQRCode } from 'next-qrcode'

const RepeatMessageForm: React.FC = () => {
  const [message, setMessage] = useState('')
  const { Canvas } = useQRCode()

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  return (
    <div className='font-poppins flex min-h-full w-full flex-col items-center justify-center gap-4 rounded-md border-2 border-[#9f9f9f0b] bg-[#9f9f9f10] px-10 py-2 text-white md:w-[30rem]'>
      <div className='relative h-20 w-[20rem]'>
        <Image src={'/logo.svg'} fill alt='marked' />
      </div>
      <span className='text-center text-sm'>share with qr code</span>
      <Input value={message} onChange={handleInputChange} />
      <Progress
        percent={utils.progress(message, 300)}
        showInfo={false}
        status={'exception'}
      />
      <Button
        className='bg-[#F9C407] hover:bg-slate-600'
        type='primary'
      >
        Generate QR code
      </Button>
      {(message.length > 0) &&
        <Canvas
          text={message}
          options={{
            errorCorrectionLevel: 'M',
            margin: 3,
            scale: 4,
            width: 200,
            color: {
              dark: '#010599FF',
              light: '#FFBF60FF'
            }
          }}
        />
      }
    </div>
  )
}

export default RepeatMessageForm
