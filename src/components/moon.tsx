const moonTexture = new TextureLoader().load(moon); 
import moon from '../assets/moon.jpeg'; // Textura da Lua
import { TextureLoader, Mesh } from 'three'; // Para carregar texturas e Mesh
import { useFrame } from '@react-three/fiber'; // Canvas para a cena 3D
import { useRef } from 'react';
import * as THREE from 'three';


const Moon = () => {
  const moonRef = useRef<THREE.Mesh>(null);
  let angle = 0; // Ângulo para o movimento orbital da Lua

  // Movimento orbital da Lua
  useFrame(() => {
    angle += 0.01; // Incrementa o ângulo para simular a órbita da Lua
    if (moonRef.current) {
      moonRef.current.position.x = 3 * Math.cos(angle); 
      moonRef.current.position.z = 3 * Math.sin(angle); 
    }
  });

  return (
    <mesh ref={moonRef} position={[3, 0, 0]}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial map={moonTexture} />
    </mesh>
  );
};

export default Moon;