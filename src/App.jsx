import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import "./App.css";
import { Html } from "@react-three/drei";
import Model from "./models/Model";
import Model2 from "./models/Model2";
import 'bootstrap/dist/css/bootstrap.css';

import ModelCards from "./components/ModelCards";
function Loader() {
  return (
    <Html>
      <div className="host">
        <div className="loading loading-0"></div>
        <div className="loading loading-1"></div>
        <div className="loading loading-2"></div>
      </div>
    </Html>
  );
}

export default function App({ model }) {
  return (
    <>
        
        <header id="header" className="header fixed-top">
      <div
        className="container-fluid container-xl d-flex align-items-center justify-content-between"
      >
        <a href="#" className="logo d-flex align-items-center">
          <img src="obystech_logo_and_slogan_2.png" alt="" />
        </a>
              
        <nav id="navbar" className="navbar">
        <div className="dropdownn">
          <img style={{marginRight:4}} src="https://flagcdn.com/16x12/us.png" alt="US Flag"/>
          <img src="https://flagcdn.com/16x12/fr.png" alt="US Flag"/>
        </div>
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>

            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
          
        </nav>
      </div>
    </header>
    <div className="model-cards-container">
        {/* Card 1 */}
        <div className="model-card">
          <div><img src="sidebar.png" alt="Model 1" className="model-photo"/></div>
          <button className="try-button" onClick={() => {
            document.getElementsByClassName('model-cards-container')[0].toggleAttribute('hidden')
            document.getElementById('sidebar').toggleAttribute('hidden')
          }}>Configurer</button>
        </div>
  
        {/* Card 2 */}
        <div className="model-card">
        <div><img src="chair.png" alt="Model 2" className="model-photo" /></div>
          <button className="try-button" onClick={() => {
            document.getElementsByClassName('model-cards-container')[0].toggleAttribute('hidden')
            document.getElementById('chair').toggleAttribute('hidden')
          }}>Configurer</button>
        </div>
      </div>
      <Canvas
      frameloop="demand"
        id="sidebar"
        hidden={true}
        shadows
        camera={{ position: [0.5, 1, 2.5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
        eventSource={document.getElementById("root")}
        eventPrefix="client"
        dpr={[1, 2]}
      >
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.4}
          enableRotate={true}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI}
          maxDistance={3}
          minDistance={1.8}
        />
        <Suspense fallback={<Loader />}>
          <Model2 url={model}/>       
        </Suspense>
      </Canvas>
      <Canvas
      frameloop="demand"
        id="chair"
        hidden={true}
        shadows
        camera={{ position: [0.5, 1, 2.5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
        eventSource={document.getElementById("root")}
        eventPrefix="client"
        dpr={[1, 2]}
      >
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.4}
          enableRotate={true}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI}
          maxDistance={3}
          minDistance={1.8}
        />
        <Suspense fallback={<Loader />}>
          <Model url={'Home Chair'}/>       
        </Suspense>
      </Canvas>
    </>
  );
}
