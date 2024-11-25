import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber'; // Canvas para a cena 3D
import { OrbitControls } from '@react-three/drei'; // Controles de câmera simples
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'; 
import swanLake from './assets/swan-lake.mp3'; 
import Earth from './components/earth';
import Moon from './components/moon';

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="flex flex-col items-center bg-[url('./assets/universe.jpg')] bg-cover bg-center justify-center h-screen bg-gray-950">
      <h1 className="text-4xl font-sourceCode mt-20 font-bold text-purple-400">
        Ballet Cósmico
      </h1>
      <div className="flex flex-row justify-center items-center gap-4 mt-5">
        <button onClick={toggleAudio}>
          {isPlaying ? <FaVolumeUp size={30} color="white"/> : <FaVolumeMute size={30} color="white"/>}
        </button>
        <p className="text-lg text-gray-400 font-sourceCode text-white"><i>{isPlaying ? '"O Lago dos Cisnes" está tocando' : "Ative o som para escutar a música"}</i></p>
      </div>
      <p className="text-2xl mt-5 absolute font-bold bottom-10 text-gray-400 font-sourceCode text-white">
        Terra e Lua em órbita
      </p>
      <p className="text-lg font-sourceCode w-[60%] mt-5 text-center text-white">
      <i>"A Lua não é só um reflexo da Terra, mas um reflexo do nosso próprio desejo de explorar e alcançar o impossível."</i> – <strong>Buzz Aldrin</strong>
      </p>

      <div className="w-full h-3/4 mt-5">
        <Canvas>
          {/* Luzes */}
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight position={[-10, -10, -10]} angle={0.2} penumbra={1} intensity={0.5} />

          <OrbitControls />

          <Earth />
          <Moon />
        </Canvas>
      </div>

      <audio ref={audioRef} src={swanLake} preload='auto' loop autoPlay muted={false} />
    </div>
  );
};

export default App;
