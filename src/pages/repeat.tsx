import ParticleRing from '@/components/particle/particle'
import RepeatMessageForm from '@/components/repeatMessageform'
import React from 'react'

const RepeatMessage: React.FC = () => {
  return (
    <ParticleRing active={false}>
      <div className='absolute inset-0 m-0 flex min-h-screen flex-col items-center justify-center '><RepeatMessageForm /></div>
    </ParticleRing>
  )
}
export default RepeatMessage
