import { useRef } from 'react';
import './App.css'
import * as THREE from 'three';
import { createNoise2D } from 'simplex-noise';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';

const Particle = () => {
  const ref = useRef<THREE.Mesh>(null!);

  const noise2D = createNoise2D()
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.position.x = noise2D(t * 0.1, 0) * 3;
      ref.current.position.y = noise2D(0, t * 0.1) * 3;
      ref.current.position.z = Math.sin(t) * 1.5;
    }
  })

  return (
    <mesh ref={ref}>
       <sphereGeometry args={[0.2, 32, 32]} />
       <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}
function App() {
  



  return (
    <Canvas camera={{ position: [0, 0, 5]}}>
      <ambientLight intensity={0.5} />
      <Particle />
    </Canvas>
  )
}

export default App
