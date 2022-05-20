import { Suspense } from 'react';

import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Banner3d = () => {
  const Model = ({ scale = 3.5, position = [0, -3.25, 0] }) => {
    const gltf = useGLTF('./assets/3d/silent_ash/scene.gltf');

    return (
      <>
        <primitive object={gltf.scene} scale={scale} position={position} />
      </>
    );
  };

  return (
    <Canvas style={{ height: 550 }}>
      <ambientLight intensity={0.6} />
      <spotLight
        intensity={0.5}
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} />

      <Suspense fallback={null}>
        <Model />
        <OrbitControls
          autoRotate
          autoRotateSpeed={6}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={1.571}
          maxPolarAngle={1.571}
        />
      </Suspense>
    </Canvas>
  );
};

export default Banner3d;
