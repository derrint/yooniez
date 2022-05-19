/* eslint-disable no-return-assign */
import { Suspense, useRef, useState } from 'react';

import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import {
  Banner,
  // About,
  // Services,
  // Spotlight,
  // AdNetwork,
  // ContactUs,
  // Portfolio,
  // Testimonials,
} from '@components/page/home';

const Home = () => {
  const Model = ({ scale = 3, position = [0, -3, 0] }) => {
    const ref = useRef<THREE.Mesh>(null!);
    useFrame((_state, _delta) => (ref.current.rotation.y += 0.01));
    // const gltf = useLoader(GLTFLoader, './assets/3d/silent_ash/scene.gltf');
    const gltf = useGLTF('./assets/3d/silent_ash/scene.gltf');
    const [hovered, hover] = useState(false);

    return (
      <>
        <primitive
          ref={ref}
          object={gltf.scene}
          scale={hovered ? scale * 1.2 : scale}
          position={position}
          onPointerOver={(_event: any) => hover(true)}
          onPointerOut={(_event: any) => hover(false)}
        />
      </>
    );
  };

  return (
    <>
      <Banner />
      {/* <Portfolio />
      <About />
      <Testimonials />
      <Services />
      <Spotlight />
      <AdNetwork />
      <ContactUs /> */}
      <Canvas style={{ height: 500 }}>
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
          <OrbitControls />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Home;
