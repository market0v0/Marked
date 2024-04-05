import LongMessageForm from '@/components/longMessageForm'
import ParticleRing from '@/components/particle/particle'
import React from 'react'

const LongMessage: React.FC = () => {
  return (
    <ParticleRing active={false}>
      <div className='absolute inset-0 m-0 flex min-h-screen flex-col items-center justify-center '><LongMessageForm /></div>
    </ParticleRing>
    )
}
export default LongMessage
