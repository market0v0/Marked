import React from 'react'
import { useRouter } from 'next/router'
import CryptoJS from 'crypto-js'
import Image from 'next/image'
import NormalType from '@/components/normalType'
import ParticleRing from '@/components/particle/particle'

const CreatedMessage: React.FC = () => {
  const router = useRouter()
  const { data } = router.query

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
    message,
    sender,
    recipient
  }: { message: string, sender: string, recipient: string, value: number } =
    JSON.parse(decryptedData)

  return (
    <ParticleRing active={false}>
      <div className='absolute inset-0 m-0 flex min-h-screen flex-col items-center justify-center '>
        <div className=' font-poppins  flex items-center justify-center  '>
          <div className=' font-poppins flex  min-h-full w-full flex-col items-center justify-center gap-4 rounded-md border-2 border-[#9f9f9f0b] bg-[#9f9f9f10] px-4 py-4  text-white md:w-[30rem]'>
            <div className='relative h-20 w-[20rem]'>
              <Image src={'/logo.svg'} fill alt='marked' />
            </div>

            <div className='rounded-lg bg-white p-2 text-black'>
              <NormalType text={message} />
            </div>
            <div className='grid w-full  grid-cols-2'>
              <span>{'From: ' + sender}</span>
              <span>{'To: ' + recipient}</span>
            </div>
          </div>
        </div>
      </div>
    </ParticleRing>
  )
}

export default CreatedMessage
