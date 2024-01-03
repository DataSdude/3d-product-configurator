import { Center, Html, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { ReactDOM } from "react";
import * as THREE from "three";

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
  const modelViewerRef = useRef(null);

  const createAndApplyTexture = async (material, channel, texture) => {
    if (channel.includes('base') || channel.includes('metallic')) {
      material.pbrMetallicRoughness[channel].setTexture(texture);
      console.log('pbr exectued');
    } else {
      material[channel].setTexture(texture);
      console.log('no pbr executed');
    }
  }
  
  return (
    <>
      <Html>
        <model-viewer
        id='model'
        ref={modelViewerRef}
      src='/Space_Corona.gltf' ar camera-controls touch-action="pan-y">

    </model-viewer>
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
          onClick={async () => {
            
            const modelViewer = document.getElementById('model');
            const blob = await modelViewer.toBlob({ idealAspect: false });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "Sidebar.png";
            a.click();
            URL.revokeObjectURL(url);
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
          hidden={false}
        >
          <div
            id='menu1Box'
            style={{
              width: 426,
              height: 72,
              /* left: -420,
              top: -450, */
              position: "absolute",
              background: "white",
              border: "1px #808080 solid",
              borderRadius: 20
            }}
            hidden={false}
          >
          <div
            id='menu1Line1'
            style={{
              width: 72,
              height: 0,
              /* left: -340,
              top: -450, */
              position: "absolute",
              transform: "rotate(90deg)",
              transformOrigin: "0 0",
              border: "1px #808080 solid",
            }}
            hidden={false}
          ></div>
          <div
            id='menu1Line2'
            style={{ 
              width: 72,
              height: 0,
              /* left: -171,
              top: -450, */
              position: "absolute",
              transform: "rotate(90deg)",
              transformOrigin: "0 0",
              border: "1px #808080 solid",
            }}
            hidden={false}
          ></div>
          <img
            id='menu13D'
            style={{
              width: 63,
              height: 63,
              /* left: -410,
              top: -444, */
              position: "absolute",
            }}
            hidden={false}
            src="./3d-model - Copy.png"
            onClick={() => {
              const modelViewer = document.getElementById('model');
              if(!modelViewer.canActivateAR)
              {
                document.getElementById('custom-alert').style.display = 'block';
                document.getElementById('overlay').style.display = 'block';
              }
              else{
                modelViewer.activateAR
              }
            }}
          />
          <img
            id='menu1'
            className="changeDoorsImage"
            style={{
              width: 50,
              height: 50,
              /* left: -165,
              top: -438, */
              position: "absolute",
            }}
            hidden={false}
            src="./textures/Plaid_Wood_a.jpg"
            onClick={() => {
              const menu1Elements = document.querySelector('#menu1Box');
              const menu3Elements = document.querySelector('#menu3Box');
                menu1Elements.setAttribute('hidden',"{'true'}") 
              
                menu3Elements.childNodes.forEach(element => {
                  element.toggleAttribute('hidden');
                });
                menu3Elements.toggleAttribute('hidden');

              
              
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
              /* left: -335,
              top: -438, */
              position: "absolute",
            }}
            hidden={false}
            src="./textures/Wood_a.jpg"
            onClick={() => {
              const menu1Elements = document.querySelector('#menu1Box');
              const menu2Elements = document.querySelector('#menu2Box');
                menu1Elements.setAttribute('hidden',"{'true'}");
              
                menu2Elements.childNodes.forEach(element => {
                  element.toggleAttribute('hidden');
                });
                menu2Elements.toggleAttribute('hidden');
              
              /* 
                (mesh1Ref.current.map = seatMap1[0]),
                  (mesh1Ref.current.displacementMap = seatMap1[1]),
                  (mesh1Ref.current.normalMap = seatMap1[2]),
                  (mesh1Ref.current.roughnessMap = seatMap1[3]),
                  (mesh1Ref.current.aoMap = seatMap1[4]); */
            }}
          />
          <div
            id='menu1ChangeBody'
            style={{
              width: 99,
              height: 25,
              /* left: -280,
              top: -422, */
              position: "absolute",
              color: "black",
              fontSize: 14,
              fontFamily: "Merriweather",
              fontWeight: "400",
              wordWrap: "break-word",
              cursor: "pointer",
            }}
            hidden={false}
            onClick={() => {
              const menu1Elements = document.querySelector('#menu1Box');
              const menu2Elements = document.querySelector('#menu2Box');
                menu1Elements.setAttribute('hidden',"{'true'}") 
              
                menu2Elements.childNodes.forEach(element => {
                  element.toggleAttribute('hidden');
                });
                menu2Elements.toggleAttribute('hidden')

              
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
            id='menu1ChangeDoors'
            style={{
              width: 104,
              height: 25,
              /* left: -110,
              top: -422, */
              position: "absolute",
              color: "black",
              fontSize: 14,
              fontFamily: "Merriweather",
              fontWeight: "400",
              wordWrap: "break-word",
              cursor: "pointer",
            }}
            hidden={false}
            onClick={() => {
              const menu1Elements = document.querySelector('#menu1Box');
              const menu2Elements = document.querySelector('#menu2Box');
                menu1Elements.setAttribute('hidden',"{'true'}");
              
                menu2Elements.childNodes.forEach(element => {
                  element.toggleAttribute('hidden');
                });
                menu2Elements.toggleAttribute('hidden');
              
              
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
          </div>
          <div
          id='menu2Box'
            className="bodyOptions"
            style={{
              width: 370,
              height: 72,
              /* left: -420,
              top: -450, */
              position: "absolute",
              background: "white",
              border: "1px #808080 solid",
              borderRadius: 20
            }}
            hidden={true}
          >
          <img
            id='menu2Material1'
            style={{
              width: 50,
              height: 50,
              /* left: -335,
              top: -438, */
              position: "absolute",
            }}
            src="./textures/Wood_a.jpg"
            hidden={true}
            onClick={async () => {
              const menu1Image = document.querySelector('.changeBodyImage');
              menu1Image.setAttribute('src', './textures/Wood_a.jpg')

              const modelViewerTexture1 = document.querySelector("model-viewer#model");

              const woodMaterial = modelViewerTexture1.model.materials[0];

              const wood1Normal = await modelViewerTexture1.createTexture('./textures/Wood_Plywood_Front_001_normal.jpg');
              const wood1BaseColor = await modelViewerTexture1.createTexture('./textures/Wood_Plywood_Front_001_basecolor.jpg');
              const wood1Ambiant = await modelViewerTexture1.createTexture('./textures/Wood_Plywood_Front_001_ambientOcclusion.jpg');
              const wood1Mettalic = await modelViewerTexture1.createTexture('./textures/Wood_Plywood_Front_001_roughness.jpg');

              createAndApplyTexture(woodMaterial,'normalTexture', wood1Normal);
              createAndApplyTexture(woodMaterial,'baseColorTexture', wood1BaseColor);
              createAndApplyTexture(woodMaterial,'occlusionTexture', wood1Ambiant);
              createAndApplyTexture(woodMaterial,'metallicRoughnessTexture', wood1Mettalic);

            }}
          />
          <img
            id='menu2Material2'
            style={{
              width: 50,
              height: 50,
              /* left: -254,
              top: -438, */
              position: "absolute",
            }}
            src="./textures/diagonal_parquet_diffusion.png"
            hidden={true}
            onClick={async () => {
              const menu1Image = document.querySelector('.changeBodyImage');
              menu1Image.setAttribute('src', './textures/diagonal_parquet_diffusion.png')
              
              const modelViewerTexture1 = document.querySelector("model-viewer#model");

              const woodMaterial = modelViewerTexture1.model.materials[0];

              const wood1Normal = await modelViewerTexture1.createTexture('./textures/diagonal_parquet_normal.png');
              const wood1BaseColor = await modelViewerTexture1.createTexture('./textures/diagonal_parquet_diffusion.png');
              const wood1Ambiant = await modelViewerTexture1.createTexture('./textures/diagonal_parquet_ambientOcclusion.png');
              const wood1Mettalic = await modelViewerTexture1.createTexture('./textures/diagonal_parquet_roughness.png');

              createAndApplyTexture(woodMaterial,'normalTexture', wood1Normal);
              createAndApplyTexture(woodMaterial,'baseColorTexture', wood1BaseColor);
              createAndApplyTexture(woodMaterial,'occlusionTexture', wood1Ambiant);
              createAndApplyTexture(woodMaterial,'metallicRoughnessTexture', wood1Mettalic);

            }}
          />
          <img
            id='menu2Material3'
            style={{
              width: 50,
              height: 50,
              /* left: -174,
              top: -438, */
              position: "absolute",
            }}
            src="./textures/wood_table_001_diffusion.jpg"
            hidden={true}
            onClick={async () => {
              const menu1Image = document.querySelector('.changeBodyImage');
              menu1Image.setAttribute('src', './textures/wood_table_001_diffusion.jpg')
              
              const modelViewerTexture1 = document.querySelector("model-viewer#model");

              const woodMaterial = modelViewerTexture1.model.materials[0];

              const wood1Normal = await modelViewerTexture1.createTexture('./textures/wood_table_001_normal.jpg');
              const wood1BaseColor = await modelViewerTexture1.createTexture('./textures/wood_table_001_diffusion.jpg');
              const wood1Ambiant = await modelViewerTexture1.createTexture('./textures/wood_table_001_ambientOcclusion.jpg');
              const wood1Mettalic = await modelViewerTexture1.createTexture('./textures/wood_table_001_roughness.jpg');

              createAndApplyTexture(woodMaterial,'normalTexture', wood1Normal);
              createAndApplyTexture(woodMaterial,'baseColorTexture', wood1BaseColor);
              createAndApplyTexture(woodMaterial,'occlusionTexture', wood1Ambiant);
              createAndApplyTexture(woodMaterial,'metallicRoughnessTexture', wood1Mettalic);

            }}
          />
          <img
            id='menu2Return'
            style={{
              width: 43,
              height: 37.62,
              /* left: -400,
              top: -432, */
              position: "absolute",
            }}
            src="./return.png"
            hidden={true}
            onClick={() => {
              const menu1Elements = document.querySelector('#menu1Box');
              const menu2Elements = document.querySelector('#menu2Box');
                menu1Elements.toggleAttribute('hidden')

                menu2Elements.childNodes.forEach(element => {
                  element.toggleAttribute('hidden');
                });
                menu2Elements.toggleAttribute('hidden')
                console.log("length: ",menu2Elements.childElementCount);
              
              
              /* label.innerText = "Leather - Leather Weave";
                (mesh1Ref.current.map = seatMap1[0]),
                  (mesh1Ref.current.displacementMap = seatMap1[1]),
                  (mesh1Ref.current.normalMap = seatMap1[2]),
                  (mesh1Ref.current.roughnessMap = seatMap1[3]),
                  (mesh1Ref.current.aoMap = seatMap1[4]); */
            }}
          />
          </div>
          <div
            id='menu3Box'
            style={{
              width: 370,
              height: 72,
              /* left: -420,
              top: -450, */
              position: "absolute",
              background: "white",
              border: "1px #808080 solid",
              borderRadius: 20
            }}
            hidden={true}
          >
          <img
            id='menu3Material1'
            style={{
              width: 50,
              height: 50,
              /* left: -334,
              top: -438, */
              position: "absolute",
            }}
            src="./textures/Plaid_Wood_a.jpg"
            hidden={true}
            onClick={async () => {
              const menu2Image = document.querySelector('.changeDoorsImage');
              menu2Image.setAttribute('src', './textures/Plaid_Wood_a.jpg')
              
              const modelViewerTexture1 = document.querySelector("model-viewer#model");

              const doorMaterial = modelViewerTexture1.model.materials[1];

              const doorBaseColor = await modelViewerTexture1.createTexture('./textures/Plaid_Wood_a.jpg');
             
              createAndApplyTexture(doorMaterial,'baseColorTexture', doorBaseColor);
              
            }}
          />
          <img
            id='menu3Material2'
            style={{
              width: 50,
              height: 50,
              /* left: -254,
              top: -438, */
              position: "absolute",
            }}
            src="./textures/fabric_pattern_05_diffusion.jpg"
            hidden={true}
            onClick={async () => {
              const menu2Image = document.querySelector('.changeDoorsImage');
              menu2Image.setAttribute('src', './textures/fabric_pattern_05_diffusion.jpg')
              
              const modelViewerTexture1 = document.querySelector("model-viewer#model");

              const doorMaterial = modelViewerTexture1.model.materials[1];
             
              //const doorNormal = await modelViewerTexture1.createTexture('./textures/fabric_pattern_05_normal.jpg');
              const doorBaseColor = await modelViewerTexture1.createTexture('./textures/fabric_pattern_05_diffusion.jpg');
              //const doorAmbiant = await modelViewerTexture1.createTexture('./textures/fabric_pattern_05_ambientOcclusion.jpg');
              //const doorMettalic = await modelViewerTexture1.createTexture('./textures/fabric_pattern_05_roughness.jpg');

              //createAndApplyTexture(doorMaterial,'normalTexture', doorNormal);
              createAndApplyTexture(doorMaterial,'baseColorTexture', doorBaseColor);
              //createAndApplyTexture(doorMaterial,'occlusionTexture', doorAmbiant);
              //createAndApplyTexture(doorMaterial,'metallicRoughnessTexture', doorMettalic);
              
            }}
          />
          <img
            id='menu3Material3'
            style={{
              width: 50,
              height: 50,
              /* left: -174,
              top: -438, */
              position: "absolute",
            }}
            src="./textures/Rug_006_basecolor.jpg"
            hidden={true}
            onClick={async () => {
              const menu2Image = document.querySelector('.changeDoorsImage');
              menu2Image.setAttribute('src', './textures/Rug_006_basecolor.jpg')
              
              const modelViewerTexture1 = document.querySelector("model-viewer#model");
  
              const doorMaterial = modelViewerTexture1.model.materials[1];
              
              //const doorNormal = await modelViewerTexture1.createTexture('./textures/Rug_006_normal.jpg');
              const doorBaseColor = await modelViewerTexture1.createTexture('./textures/Rug_006_basecolor.jpg');
              //const doorAmbiant = await modelViewerTexture1.createTexture('./textures/Rug_006_ambientOcclusion.jpg');
              //const doorMettalic = await modelViewerTexture1.createTexture('./textures/Rug_006_roughness.jpg');
  
              //createAndApplyTexture(doorMaterial,'normalTexture', doorNormal);
              createAndApplyTexture(doorMaterial,'baseColorTexture', doorBaseColor);
              //createAndApplyTexture(doorMaterial,'occlusionTexture', doorAmbiant);
              //createAndApplyTexture(doorMaterial,'metallicRoughnessTexture', doorMettalic);
                
            }}
          />
          <img
            id='menu3Return'
            style={{
              width: 43,
              height: 37.62,
              /* left: -400,
              top: -432, */
              position: "absolute",
            }}
            src="./return.png"
            hidden={true}
            onClick={() => {
              const menu1Elements = document.querySelector('#menu1Box');
              const menu3Elements = document.querySelector('#menu3Box');
                menu1Elements.toggleAttribute('hidden') 
                menu3Elements.childNodes.forEach(element => {
                  element.toggleAttribute('hidden')
                });
                menu3Elements.toggleAttribute('hidden')

              
            }}
          />
        </div>
        </div>
      </Html>
    </>
  );
};

export default Model2;
