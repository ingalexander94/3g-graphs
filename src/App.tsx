import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './components/Model';
import './App.css';

function App() {
  return (
    <Canvas
      linear
      camera={{
        position: [0, 0, 80],
      }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[0, 0, 1]} intensity={5} />
      <OrbitControls />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}

export default App;
