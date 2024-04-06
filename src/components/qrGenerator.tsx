import React, { useRef } from 'react'
import { useQRCode } from 'next-qrcode'
import { saveAs } from 'file-saver'
import { Button, message as messageAsk } from 'antd'

interface QrProps {
  message: string
}

const QRCode: React.FC<QrProps> = ({ message }) => {
  /*   const rootUrl = window.location.origin */
  const { Canvas } = useQRCode()
  const divRef = useRef<HTMLDivElement>(null)
  /*  const encryptedData = encryptData(message, sender, recipient) */
  /*   const url = `${rootUrl}/longmessage?data=${encodeURIComponent(encryptedData)}` */
  const handleButtonClick = (): void => {
    try {
      void navigator.clipboard.writeText(message)
      void messageAsk.success('URL copied to clipboard')
    } catch (err) {
      console.error('Failed to copy URL to clipboard', err)
      void messageAsk.error('Failed to copy URL to clipboard')
    }
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const downloadQR = () => {
    const canvas = divRef.current?.firstChild as HTMLCanvasElement | null
    if (canvas != null) {
      canvas.toBlob(function (blob) {
        if (blob != null) {
          saveAs(blob, 'qr.png')
        }
      })
    }
  }

  return (
    <>
      <div ref={divRef} className='p-2'>
        <Canvas
          text={message}
          options={{
            errorCorrectionLevel: 'M',
            margin: 3,
            scale: 4,
            width: 250,
            color: {
              dark: '#010599FF',
              light: '#FFBF60FF'
            }
          }}
        />
      </div>
      <Button
        className='w-full bg-[#F9C407] font-semibold text-white'
        onClick={downloadQR}
      >
        Download QR
      </Button>
      <Button
        className='w-full bg-[#534f3e] font-semibold text-white'
        onClick={handleButtonClick}
      >
        Copy Link
      </Button>
    </>
  )
}

export default QRCode
