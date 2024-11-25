import earth from '../assets/earth.jpeg'; // Textura da Terra
import { TextureLoader } from 'three'; // Para carregar texturas
import { useFrame } from '@react-three/fiber'; // Canvas para a cena 3D
import { useRef } from 'react';
import * as THREE from 'three';


const earthTexture = new TextureLoader().load(earth); 

const Earth = () => {
  const earthRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.01; // Rotação suave da Terra
    }
  });

  return (
    <mesh ref={earthRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
};

export default Earth;