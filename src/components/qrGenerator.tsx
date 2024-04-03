import React from 'react'
import { useQRCode } from 'next-qrcode'

const QRCodePopover: React.FC<{ message: string }> = ({ message }) => {
  const { Canvas } = useQRCode()

  return (message.length > 0) ? (
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
  ) : null
}

export default QRCodePopover
