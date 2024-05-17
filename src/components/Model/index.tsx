import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const Model = () => {
  const obj = useLoader(OBJLoader, './image.obj');
  return <primitive object={obj} />;
};

export default Model;
