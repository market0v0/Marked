import Landing from '@/components/landing'
import ParticleRing from '@/components/particle/particle'
import React from 'react'

const Home: React.FC = () => {
  return (
    <ParticleRing active={false}>
       <div className='absolute inset-0 m-0 flex min-h-screen flex-col items-center justify-center '>{/* </div>
      <div className='font-poppins px-2 flex min-h-[100vh] items-center justify-center '> */}<Landing /></div>
    </ParticleRing>)
}
export default Home
