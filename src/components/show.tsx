// Show.tsx
import { Button, message } from 'antd'
import React from 'react'
import CryptoJS from 'crypto-js'

interface ShowProps {
  question: string
  message1: string
  message2: string
}

const Show: React.FC<ShowProps> = ({ question, message1, message2 }) => {
  const rootUrl = window.location.origin

  const handleButtonClick = (): void => {
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify({ question, message1, message2 }),
      'secret-key'
    ).toString()

    const url = `${rootUrl}/message?data=${encodeURIComponent(encryptedData)}`

    window.open(url, '_blank')
  }

  const handleCopyButtonClick = (): void => {
    const url = `${rootUrl}/message?data=${encodeURIComponent(
      CryptoJS.AES.encrypt(
        JSON.stringify({ question, message1, message2 }),
        'secret-key'
      ).toString()
    )}`

    try {
      void navigator.clipboard.writeText(url)
      void message.success('URL copied to clipboard')
    } catch (err) {
      console.error('Failed to copy URL to clipboard', err)
      void message.error('Failed to copy URL to clipboard')
    }
  }

  return (
    <div className='font-poppins flex min-h-full items-center justify-center text-white'>
      <Button
        className='w-[8rem] bg-[#F9C407] font-semibold text-white'
        onClick={handleButtonClick}
      >
        View Message
      </Button>
      <Button
        className='w-[8rem] bg-[#534f3e] font-semibold text-white'
        onClick={handleCopyButtonClick}
      >
        Copy Link
      </Button>
    </div>
  )
}

export default Show
