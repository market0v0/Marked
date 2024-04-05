import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'

import { type Group } from 'three'
import { pointsInner, pointsOuter } from './utils'

interface ParticleRingProps {
  children?: React.ReactNode
  active: boolean
}

const ParticleRing: React.FC<ParticleRingProps> = ({ children, active }) => {

  // Define your left and right colors here
  const leftColor ='000917' // Example color value, replace with your desired color
  const rightColor =  '000917' // Example color value, replace with your desired color

  return (
    <div className='relative ' style={{ height: '100vh', width: '100%' }}>
      <Canvas
        camera={{
          position: [-2, -12.5, -1.8]
        }}
        style={{ height: '100vh' }}
        className={active ? '' :'bg-[#000917]' }
      >
        {active ? (<OrbitControls enableZoom={true} maxDistance={90} minDistance={10} />) : (null)}
        <directionalLight />
        <PointCircle leftColor={leftColor} rightColor={rightColor} />
      </Canvas>

      {children}
    </div>
  )
}

const PointCircle: React.FC<{ leftColor: string, rightColor: string }> = ({ leftColor, rightColor }) => {
  const ref = useRef<Group | null>(null)

  useFrame(({ clock }) => {
    if (ref.current?.rotation != null) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group ref={ref}>
      {pointsInner(leftColor, rightColor).map((point) => (
        <Point
          key={point.idx}
          position={point.position as [number, number, number]}
          color={point.color}
        />
      ))}
      {pointsOuter(leftColor, rightColor).map((point) => (
        <Point
          key={point.idx}
          position={point.position as [number, number, number]}
          color={point.color}
        />
      ))}
    </group>
  )
}

const Point: React.FC<{
  position: [number, number, number] | undefined
  color: string
}> = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        // eslint-disable-next-line react/no-unknown-property
        emissive={color}
        // eslint-disable-next-line react/no-unknown-property
        emissiveIntensity={0.5}
        // eslint-disable-next-line react/no-unknown-property
        roughness={0.5}
        color={color}
      />
    </Sphere>
  )
}

export default ParticleRing