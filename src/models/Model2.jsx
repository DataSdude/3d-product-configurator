import { Center, Html, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import { ReactDOM } from "react";
import * as THREE from "three";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Model2 = ({ url }) => {
  const mesh1Ref = useRef(null);
  const mesh2Ref = useRef(null);

  useGLTF.preload(url + ".gltf");

  useGLTF.setDecoderPath(
    "https://www.gstatic.com/draco/versioned/decoders/1.5.6/'"
  );

  const { nodes, materials } = useGLTF(url + ".gltf"); // use the useGLTF hook from drei to load the model

  const woodMap1 = useLoader(THREE.TextureLoader, [
    "./textures/Wood_a.jpg",
    /*    "./textures/Leather_Weave_002_height.png",
    "./textures/Leather_Weave_002_normal.jpg",
    "./textures/Leather_Weave_002_roughness.jpg",
    "./textures/Leather_Weave_002_ambientOcclusion.jpg", */
  ]);

  const woodMap2 = useLoader(THREE.TextureLoader, [
    "./textures/Wood_r.jpg",
/*     "./textures/Wood_Plywood_Front_001_height.png",
    "./textures/Wood_Plywood_Front_001_normal.jpg",
    "./textures/Wood_Plywood_Front_001_roughness.jpg",
    "./textures/Wood_Plywood_Front_001_ambientOcclusion.jpg", */
  ]);

  const woodMap3 = useLoader(THREE.TextureLoader, [
    "./textures/Wood_026_basecolor.jpg",
/*     "./textures/Substance_Graph_height.png",
    "./textures/Substance_Graph_normal.jpg",
    "./textures/Substance_Graph_roughness.jpg",
    "./textures/Substance_Graph_ambientOcclusion.jpg", */
  ]);

  const doorMap1 = useLoader(THREE.TextureLoader, [
    "./textures/Plaid_Wood_a.jpg",
/*     "./textures/Fabric_Seam_002_height.png",
    "./textures/Fabric_Seam_002_normal.jpg",
    "./textures/Fabric_Seam_002_roughness.jpg",
    "./textures/Fabric_Seam_002_ambientOcclusion.jpg", */
  ]);
  //seamMap.wrapS = seamMap.wrapT = THREE.RepeatWrapping

  const doorMap2 = useLoader(THREE.TextureLoader, [
    "./textures/Plaid_Wood_b.jpg",
/*     "./textures/Wood_026_height.png",
    "./textures/Wood_026_normal.jpg",
    "./textures/Wood_026_roughness.jpg",
    "./textures/Wood_026_ambientOcclusion.jpg", */
  ]);

  const doorMap3 = useLoader(THREE.TextureLoader, [
    "./textures/Rug_006_basecolor.jpg",
/*     "./textures/Wood_planks_013_height.png",
    "./textures/Wood_planks_013_normal.jpg",
    "./textures/Wood_planks_013_roughness.jpg",
    "./textures/Wood_planks_013_ambientOcclusion.jpg", */
  ]);

  for (let index = 0; index < woodMap1.length; index++) {
    woodMap1[index].wrapS = woodMap1[index].wrapT = THREE.RepeatWrapping;
    woodMap2[index].wrapS = woodMap2[index].wrapT = THREE.RepeatWrapping;
    woodMap3[index].wrapS = woodMap3[index].wrapT = THREE.RepeatWrapping;
    doorMap1[index].wrapS = doorMap1[index].wrapT = THREE.RepeatWrapping;
    doorMap2[index].wrapS = doorMap2[index].wrapT = THREE.RepeatWrapping;
    doorMap3[index].wrapS = doorMap3[index].wrapT = THREE.RepeatWrapping;
    woodMap1[index].repeat.set(1, 1);
    woodMap2[index].repeat.set(1, 1);
    woodMap3[index].repeat.set(1, 1);
    doorMap1[index].repeat.set(1, 1);
    doorMap2[index].repeat.set(1, 1);
    doorMap3[index].repeat.set(1, 1);
  }

  return (
    <>
      <Center>
        <group dispose={null}>
          <group
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.03, 0.035]}
            scale={0.0007}
          >
            {/* Wood */}
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_0.geometry}
              material={materials.Space_Wood_Oak}
              >
              <meshStandardMaterial
                
                ref={mesh1Ref}
                map={woodMap1[0]}
              />
            </mesh>
            {/* Doors */}
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_0_1.geometry}
              material={materials.Space_Wood_Chevron}
            >
              <meshStandardMaterial
                
                ref={mesh2Ref}
                map={doorMap1[0]}
              />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_0_2.geometry}
              material={materials.Metall_Black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_0_3.geometry}
              material={materials.Plastic}
            />
          </group>
        </group>
      </Center>
      <Html>
        <div id="overlay"></div>
        <div id="custom-alert">
            <div id="close-btn" onClick={() => {
              document.getElementById('custom-alert').style.display = 'none';
              document.getElementById('overlay').style.display = 'none';
              

            }}>X</div>
            <img src="./qrimage.png" alt="Image"/>
            <h2>View Product In Your Home</h2>
            <p id='alertParagraph'>Scan the QR code and point your mobile at the floor to begin placing your product</p>
        </div>

        <div className="configurator2">
        <img
          className="myButton2"
          src="/downloadme.png"
          onClick={() => {
            const canvas = document.getElementsByTagName("canvas")[0];
            const imageObject = new Image();
            imageObject.src = canvas.toDataURL('image/png');

            // Create a link element for downloading the cropped image
            const downloadLink = document.createElement("a");
            downloadLink.href = canvas.toDataURL('image/png');

            // Set the desired file name and extension
            const fileName = "cropped_downloadme.png";
            downloadLink.download = fileName;

            // Append the link to the document, trigger a click, and remove the link
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
          }}
        />
          <h3>Furniture</h3>
          <h1>Jalousi sideboard</h1>
          <h5 style={{color: 'gray', fontSize:14}}>1299.00 Dhs</h5>
          <p>
            The Jalousi collection, which consists of a sideboard and cabinets
            in two different sizes, is characterised by its minimalist idiom and
            a contrasting mix of materials. All of the designs feature practical
            rolling shutters in inviting shades of colour. The coloured shutters
            form an attractive contrast to the cabinet body in an oak veneer
            with legs of solid oak.
          </p>
        </div>

        
        {/* 
        configurator
         */}
        <div
          className="selector"
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <div
            id='menu1'
            style={{
              width: 426,
              height: 72,
              left: -420,
              top: 200,
              position: "absolute",
              background: "white",
              border: "1px #808080 solid",
              borderRadius: 20
            }}
          />
          <div
            id='menu1'
            style={{
              width: 72,
              height: 0,
              left: -340,
              top: 200,
              position: "absolute",
              transform: "rotate(90deg)",
              transformOrigin: "0 0",
              border: "1px #808080 solid",
            }}
          ></div>
          <div
            id='menu1'
            style={{
              width: 72,
              height: 0,
              left: -171,
              top: 200,
              position: "absolute",
              transform: "rotate(90deg)",
              transformOrigin: "0 0",
              border: "1px #808080 solid",
            }}
          ></div>
          <img
            id='menu1'
            style={{
              width: 63,
              height: 63,
              left: -413,
              top: 206,
              position: "absolute",
            }}
            src="./3d-model - Copy.png"
            onClick={() => {
              document.getElementById('custom-alert').style.display = 'block';
              document.getElementById('overlay').style.display = 'block';
            }}
          />
          <img
            id='menu1'
            className="changeDoorsImage"
            style={{
              width: 50,
              height: 50,
              left: -165,
              top: 211,
              position: "absolute",
            }}
            src="./textures/Plaid_Wood_a.jpg"
            onClick={() => {
              const menu1Elements = document.querySelectorAll('#menu1');
              const menu3Elements = document.querySelectorAll('#menu3');
              for (let i = 0; i < menu1Elements.length; i++) {
                menu1Elements[i].setAttribute('hidden',"{'true'}") 
              }
              for (let i = 0; i < menu3Elements.length; i++) {
                menu3Elements[i].toggleAttribute('hidden')
              }
              
              /* label.innerText = "Leather - Leather Weave";
                (mesh1Ref.current.map = seatMap1[0]),
                  (mesh1Ref.current.displacementMap = seatMap1[1]),
                  (mesh1Ref.current.normalMap = seatMap1[2]),
                  (mesh1Ref.current.roughnessMap = seatMap1[3]),
                  (mesh1Ref.current.aoMap = seatMap1[4]); */
            }}
          />
          <img
            id='menu1'
            className="changeBodyImage"
            style={{
              width: 50,
              height: 50,
              left: -335,
              top: 211,
              position: "absolute",
            }}
            src="./textures/Wood_a.jpg"
            onClick={() => {
              const menu1Elements = document.querySelectorAll('#menu1');
              const menu2Elements = document.querySelectorAll('#menu2');
              for (let i = 0; i < menu1Elements.length; i++) {
                menu1Elements[i].setAttribute('hidden',"{'true'}") 
              }
              for (let i = 0; i < menu2Elements.length; i++) {
                menu2Elements[i].toggleAttribute('hidden')
              }
              
              /* 
                (mesh1Ref.current.map = seatMap1[0]),
                  (mesh1Ref.current.displacementMap = seatMap1[1]),
                  (mesh1Ref.current.normalMap = seatMap1[2]),
                  (mesh1Ref.current.roughnessMap = seatMap1[3]),
                  (mesh1Ref.current.aoMap = seatMap1[4]); */
            }}
          />
          <div
            id='menu1'
            style={{
              width: 94,
              height: 25,
              left: -280,
              top: 230,
              position: "absolute",
              color: "black",
              fontSize: 14,
              fontFamily: "Merriweather",
              fontWeight: "400",
              wordWrap: "break-word",
              cursor: "pointer",
            }}
            onClick={() => {
              const menu1Elements = document.querySelectorAll('#menu1');
              const menu2Elements = document.querySelectorAll('#menu2');
              for (let i = 0; i < menu1Elements.length; i++) {
                menu1Elements[i].setAttribute('hidden',"{'true'}") 
              }
              for (let i = 0; i < menu2Elements.length; i++) {
                menu2Elements[i].toggleAttribute('hidden')
              }
              
              /* label.innerText = "Leather - Leather Weave";
                (mesh1Ref.current.map = seatMap1[0]),
                  (mesh1Ref.current.displacementMap = seatMap1[1]),
                  (mesh1Ref.current.normalMap = seatMap1[2]),
                  (mesh1Ref.current.roughnessMap = seatMap1[3]),
                  (mesh1Ref.current.aoMap = seatMap1[4]); */
            }}
          >
            Change Body
          </div>
          <div
            id='menu1'
            style={{
              width: 104,
              height: 25,
              left: -110,
              top: 230,
              position: "absolute",
              color: "black",
              fontSize: 14,
              fontFamily: "Merriweather",
              fontWeight: "400",
              wordWrap: "break-word",
              cursor: "pointer",
            }}
            onClick={() => {
              const menu1Elements = document.querySelectorAll('#menu1');
              const menu3Elements = document.querySelectorAll('#menu3');
              for (let i = 0; i < menu1Elements.length; i++) {
                menu1Elements[i].setAttribute('hidden',"{'true'}") 
              }
              for (let i = 0; i < menu3Elements.length; i++) {
                menu3Elements[i].toggleAttribute('hidden')
              }
              
              /* label.innerText = "Leather - Leather Weave";
                (mesh1Ref.current.map = seatMap1[0]),
                  (mesh1Ref.current.displacementMap = seatMap1[1]),
                  (mesh1Ref.current.normalMap = seatMap1[2]),
                  (mesh1Ref.current.roughnessMap = seatMap1[3]),
                  (mesh1Ref.current.aoMap = seatMap1[4]); */
            }}
          >
            Change Doors
          </div>
          <div
          id='menu2'
            className="bodyOptions"
            style={{
              width: 370,
              height: 72,
              left: -420,
              top: 200,
              position: "absolute",
              background: "white",
              border: "1px #808080 solid",
              borderRadius: 20
            }}
            hidden={true}
          />
          <img
            id='menu2'
            style={{
              width: 50,
              height: 50,
              left: -335,
              top: 213,
              position: "absolute",
            }}
            src="./textures/Wood_a.jpg"
            hidden={true}
            onClick={() => {
              const menu1Image = document.querySelector('.changeBodyImage');
              menu1Image.setAttribute('src', './textures/Wood_a.jpg')
              mesh1Ref.current.map = woodMap1[0]
            }}
          />
          <img
            id='menu2'
            style={{
              width: 50,
              height: 50,
              left: -254,
              top: 213,
              position: "absolute",
            }}
            src="./textures/Wood_r.jpg"
            hidden={true}
            onClick={() => {
              const menu1Image = document.querySelector('.changeBodyImage');
              menu1Image.setAttribute('src', './textures/Wood_r.jpg')
              mesh1Ref.current.map = woodMap2[0]
            }}
          />
          <img
            id='menu2'
            style={{
              width: 50,
              height: 50,
              left: -174,
              top: 213,
              position: "absolute",
            }}
            src="./textures/Wood_026_basecolor.jpg"
            hidden={true}
            onClick={() => {
              const menu1Image = document.querySelector('.changeBodyImage');
              menu1Image.setAttribute('src', './textures/Wood_026_basecolor.jpg')
              mesh1Ref.current.map = woodMap3[0]
            }}
          />
          <img
            id='menu2'
            style={{
              width: 43,
              height: 37.62,
              left: -413,
              top: 219,
              position: "absolute",
            }}
            src="./return.png"
            hidden={true}
            onClick={() => {
              const menu1Elements = document.querySelectorAll('#menu1');
              const menu2Elements = document.querySelectorAll('#menu2');
              for (let i = 0; i < menu1Elements.length; i++) {
                menu1Elements[i].toggleAttribute('hidden') 
              }
              for (let i = 0; i < menu2Elements.length; i++) {
                menu2Elements[i].toggleAttribute('hidden')
              }
              
              /* label.innerText = "Leather - Leather Weave";
                (mesh1Ref.current.map = seatMap1[0]),
                  (mesh1Ref.current.displacementMap = seatMap1[1]),
                  (mesh1Ref.current.normalMap = seatMap1[2]),
                  (mesh1Ref.current.roughnessMap = seatMap1[3]),
                  (mesh1Ref.current.aoMap = seatMap1[4]); */
            }}
          />
          <div
            id='menu3'
            style={{
              width: 370,
              height: 72,
              left: -420,
              top: 200,
              position: "absolute",
              background: "white",
              border: "1px #808080 solid",
              borderRadius: 20
            }}
            hidden={true}
          />
          <img
            id='menu3'
            style={{
              width: 50,
              height: 50,
              left: -334,
              top: 212,
              position: "absolute",
            }}
            src="./textures/Plaid_Wood_a.jpg"
            hidden={true}
            onClick={() => {
              const menu2Image = document.querySelector('.changeDoorsImage');
              menu2Image.setAttribute('src', './textures/Plaid_Wood_a.jpg')
              mesh2Ref.current.map = doorMap1[0]
            }}
          />
          <img
            id='menu3'
            style={{
              width: 50,
              height: 50,
              left: -254,
              top: 212,
              position: "absolute",
            }}
            src="./textures/Plaid_Wood_b.jpg"
            hidden={true}
            onClick={() => {
              const menu2Image = document.querySelector('.changeDoorsImage');
              menu2Image.setAttribute('src', './textures/Plaid_Wood_b.jpg')
              mesh2Ref.current.map = doorMap2[0]
            }}
          />
          <img
            id='menu3'
            style={{
              width: 50,
              height: 50,
              left: -174,
              top: 212,
              position: "absolute",
            }}
            src="./textures/Rug_006_basecolor.jpg"
            hidden={true}
            onClick={() => {
              const menu2Image = document.querySelector('.changeDoorsImage');
              menu2Image.setAttribute('src', './textures/Rug_006_basecolor.jpg')
              mesh2Ref.current.map = doorMap3[0]
            }}
          />
          <img
            id='menu3'
            style={{
              width: 43,
              height: 37.62,
              left: -413,
              top: 216,
              position: "absolute",
            }}
            src="./return.png"
            hidden={true}
            onClick={() => {
              const menu1Elements = document.querySelectorAll('#menu1');
              const menu3Elements = document.querySelectorAll('#menu3');
              for (let i = 0; i < menu1Elements.length; i++) {
                menu1Elements[i].toggleAttribute('hidden') 
              }
              for (let i = 0; i < menu3Elements.length; i++) {
                menu3Elements[i].toggleAttribute('hidden')
              }
              
              /* label.innerText = "Leather - Leather Weave";
                (mesh1Ref.current.map = seatMap1[0]),
                  (mesh1Ref.current.displacementMap = seatMap1[1]),
                  (mesh1Ref.current.normalMap = seatMap1[2]),
                  (mesh1Ref.current.roughnessMap = seatMap1[3]),
                  (mesh1Ref.current.aoMap = seatMap1[4]); */
            }}
          />
        </div>
      </Html>
    </>
  );
};

export default Model2;
