import React, {
  Suspense,
} from "react";
import { Canvas} from "@react-three/fiber";
import {
  Center,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import "./App.css";
import { Html, useProgress } from "@react-three/drei";
import Model from "./models/Model";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

// Define a component to load and display a model
/* const Model = ({ model }) => {
  const gltfLoader = new GLTFLoader()
gltfLoader.load(model, (gltf) => {
  const jsx = parse(gltf)
  // Find the start and end index of the <group> tag
const startIndex = jsx.indexOf('<group');
const endIndex = jsx.lastIndexOf('</group>') + '</group>'.length;

// Extract the content between <group> and </group>
const modifiedContent = jsx.slice(startIndex, endIndex);
alert(modifiedContent)
THREE.
// eslint-disable-next-line react/no-unknown-property
return <primitive object={modifiedContent} />
})

const gltf = useLoader(GLTFLoader, model)
return <primitive object={gltf.scene} />

};
 */

// eslint-disable-next-line react/prop-types

/* function App({ model }) {
  return (
    <>
      <div className="App">
        <Canvas shadows
        camera={{ position: [0.5, 1, 2.5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        eventSource={document.getElementById("root")}
        eventPrefix="client">
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
    
        <Suspense fallback={<Loader />}>
          <OrbitControls
            autoRotateSpeed={0.4}
            enableRotate={true}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI}
            maxDistance={3}
            minDistance={1}
          />
            <Center>
            <Model model={model}/>
            </Center>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
} */

// Create a component to load and display a 3D model


export default function App({model}) {
  return (
      <Canvas
        shadows
        camera={{ position: [0.5, 1, 2.5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true , antialias: true}}
        eventSource={document.getElementById("root")}
        eventPrefix="client"
        dpr={[1,2]}
      >
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
        <OrbitControls
          autoRotateSpeed={0.4}
          enableRotate={true}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI}
          maxDistance={3}
          minDistance={1.8}
        />
        <Suspense fallback={<Loader/>}>
            <Model url={model} />
        </Suspense>
      </Canvas>
  );
}