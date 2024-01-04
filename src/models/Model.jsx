import { Center, Html, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { useMemo, useRef } from "react";
import { ReactDOM } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
const Model = ({ url }) => {
  const mesh1Ref = useRef(null);
  const mesh2Ref = useRef(null);
  const mesh3Ref = useRef(null);
  useGLTF.preload(url + ".glb");
  useGLTF.setDecoderPath(
    "https://www.gstatic.com/draco/versioned/decoders/1.5.6/'"
  );

  const { nodes, materials } = useLoader(GLTFLoader, url + ".glb"); // use the useGLTF hook from drei to load the model

  // use the useControls hook to create a control panel
  /*   const seatOptions = useMemo(() => {
    return {
      color: { value: "white" },
    };
  }, []);

  const seamOptions = useMemo(() => {
    return {
      color: { value: "white" },
    };
  }, []);

  const legsOptions = useMemo(() => {
    return {
      color: { value: "white" },
    };
  }, []);
 */
  /*   const seatTextures = useControls("Seat", seatOptions);
  const seamTextures = useControls("Seam", seamOptions);
  const legsTextures = useControls("Legs", legsOptions); */

  const seatMap1 = useLoader(THREE.TextureLoader, [
    "./textures/Leather_Weave_002_basecolor.jpg",
    "./textures/Leather_Weave_002_height.png",
    "./textures/Leather_Weave_002_normal.jpg",
    "./textures/Leather_Weave_002_roughness.jpg",
    "./textures/Leather_Weave_002_ambientOcclusion.jpg",
  ]);

  const seatMap2 = useLoader(THREE.TextureLoader, [
    "./textures/Leather_011_basecolor.jpg",
    "./textures/Leather_011_height.png",
    "./textures/Leather_011_normal.jpg",
    "./textures/Leather_011_roughness.jpg",
    "./textures/Leather_011_ambientOcclusion.jpg",
  ]);

  const seatMap3 = useLoader(THREE.TextureLoader, [
    "./textures/Substance_Graph_basecolor.jpg",
    "./textures/Substance_Graph_height.png",
    "./textures/Substance_Graph_normal.jpg",
    "./textures/Substance_Graph_roughness.jpg",
    "./textures/Substance_Graph_ambientOcclusion.jpg",
  ]);

  const seamMap1 = useLoader(THREE.TextureLoader, [
    "./textures/Fabric_Seam_002_basecolor.jpg",
    "./textures/Fabric_Seam_002_height.png",
    "./textures/Fabric_Seam_002_normal.jpg",
    "./textures/Fabric_Seam_002_roughness.jpg",
    "./textures/Fabric_Seam_002_ambientOcclusion.jpg",
  ]);
  //seamMap.wrapS = seamMap.wrapT = THREE.RepeatWrapping

  const legMap1 = useLoader(THREE.TextureLoader, [
    "./textures/Wood_026_basecolor.jpg",
    "./textures/Wood_026_height.png",
    "./textures/Wood_026_normal.jpg",
    "./textures/Wood_026_roughness.jpg",
    "./textures/Wood_026_ambientOcclusion.jpg",
  ]);

  const legMap2 = useLoader(THREE.TextureLoader, [
    "./textures/Wood_planks_013_basecolor.jpg",
    "./textures/Wood_planks_013_height.png",
    "./textures/Wood_planks_013_normal.jpg",
    "./textures/Wood_planks_013_roughness.jpg",
    "./textures/Wood_planks_013_ambientOcclusion.jpg",
  ]);

  const legMap3 = useLoader(THREE.TextureLoader, [
    "./textures/Metal_006_basecolor.jpg",
    "./textures/Metal_006_height.png",
    "./textures/Metal_006_normal.jpg",
    "./textures/Metal_006_roughness.jpg",
    "./textures/Metal_006_ambientOcclusion.jpg",
  ]);
  //legMap.wrapS = legMap.wrapT = THREE.RepeatWrapping

  for (let index = 0; index < seatMap1.length; index++) {
    seatMap1[index].wrapS = seatMap1[index].wrapT = THREE.RepeatWrapping;
    seatMap2[index].wrapS = seatMap2[index].wrapT = THREE.RepeatWrapping;
    seatMap3[index].wrapS = seatMap3[index].wrapT = THREE.RepeatWrapping;
    seamMap1[index].wrapS = seamMap1[index].wrapT = THREE.RepeatWrapping;
    legMap1[index].wrapS = legMap1[index].wrapT = THREE.RepeatWrapping;
    legMap2[index].wrapS = legMap2[index].wrapT = THREE.RepeatWrapping;
    legMap3[index].wrapS = legMap3[index].wrapT = THREE.RepeatWrapping;
    seatMap1[index].repeat.set(1, 1);
    seatMap2[index].repeat.set(1, 1);
    seatMap3[index].repeat.set(1, 1);
    seamMap1[index].repeat.set(1, 1);
    legMap1[index].repeat.set(1, 1);
    legMap2[index].repeat.set(1, 1);
    legMap3[index].repeat.set(1, 1);
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
        <model-viewer
          id="model1"
          ref={modelViewerRef}
          src="/Home Chair.glb"
          ar
          camera-controls
          touch-action="pan-y"
        ></model-viewer>

        <div className="configurator" style={{ borderRadius: 16 }}>
        <img
          className="myButton2model1"
          src="/downloadme.png"
          onClick={async () => {
            
            const modelViewer = document.getElementById('model1');
            const blob = await modelViewer.toBlob({ idealAspect: false });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "Chair.png";
            a.click();
            URL.revokeObjectURL(url);
          }}
        />
          <div
            className="Seat"
            style={{
              width: 170,
              height: 21,
              left: 24,
              top: 79,
              position: "absolute",
              color: "black",
              fontSize: 16,
              fontFamily: "Epilogue",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Seat
          </div>
          <div
            className="LeatherLeatherWeave"
            id="header_1"
            style={{
              width: 230,
              height: 23,
              left: 78,
              top: 79,
              position: "absolute",
              color: "black",
              fontSize: 16,
              fontFamily: "Epilogue",
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            Fabric - Gray Mohawk
          </div>
          <div
            className="Legs"
            style={{
              width: 170,
              height: 21,
              left: 24,
              top: 280,
              position: "absolute",
              color: "black",
              fontSize: 16,
              fontFamily: "Epilogue",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Legs
          </div>
          <div
            className="WoodPine"
            id="header_3"
            style={{
              width: 187,
              height: 23,
              left: 82,
              top: 280,
              position: "absolute",
              color: "black",
              fontSize: 16,
              fontFamily: "Epilogue",
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            Pine Wood
          </div>
          <div
            className="Leather"
            style={{
              width: 80,
              height: 23,
              left: 48,
              top: 139,
              position: "absolute",
              color: "black",
              fontSize: 16,
              fontFamily: "Epilogue",
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            Leather :
          </div>
          <img
            className="GreenDustScratch1"
            style={{
              width: 50,
              height: 50,
              left: 147,
              top: 121,
              position: "absolute",
            }}
            src="./textures/Leather_Weave_002_basecolor.jpg"
            onClick={async() => {
              const label = document.getElementById("header_1");
              label.innerText = "Leather - Leather Weave";
              const modelViewerTexture1 = document.querySelector("model-viewer#model1");

              const woodMaterial = modelViewerTexture1.model.materials[0];

              const wood1Normal = await modelViewerTexture1.createTexture('./textures/Leather_Weave_002_normal.jpg');
              const wood1BaseColor = await modelViewerTexture1.createTexture('./textures/Leather_Weave_002_basecolor.jpg');
              const wood1Ambiant = await modelViewerTexture1.createTexture('./textures/Leather_Weave_002_ambientOcclusion.jpg');
              const wood1Mettalic = await modelViewerTexture1.createTexture('./textures/Leather_Weave_002_roughness.jpg');

              createAndApplyTexture(woodMaterial,'normalTexture', wood1Normal);
              createAndApplyTexture(woodMaterial,'baseColorTexture', wood1BaseColor);
              createAndApplyTexture(woodMaterial,'occlusionTexture', wood1Ambiant);
              createAndApplyTexture(woodMaterial,'metallicRoughnessTexture', wood1Mettalic);

            }}
          />
          {/*         <div
          className="Seam"
          style={{
            width: 80,
            height: 23,
            left: 48,
            top: 329,
            position: "absolute",
            color: "black",
            fontSize: 16,
            fontFamily: "Epilogue",
            fontWeight: "300",
            wordWrap: "break-word",
          }}
        >
          Seam :
        </div>
        <img
          className="GreenDustScratch5"
          style={{
            width: 50,
            height: 50,
            left: 147,
            top: 311,
            position: "absolute",
          }}
          src="./textures/Fabric_Seam_001_ambientOcclusion.jpg"
          onClick={() => {
            const label = document.getElementById("header_2");
            label.innerText = "Fabric Seam";
            mesh3Ref.current.map = seamMap1[0],
            mesh3Ref.current.displacementMap = seamMap1[1],
            mesh3Ref.current.normalMap = seamMap1[2],
            mesh3Ref.current.roughnessMap = seamMap1[3],
            mesh3Ref.current.aoMap = seamMap1[4]
          }}
        /> */}
          {/*         <img
          className="GreenDustScratch11"
          style={{
            width: 50,
            height: 50,
            left: 213,
            top: 311,
            position: "absolute",
          }}
          src="https://via.placeholder.com/50x50"
        /> */}
          <div
            className="Wood"
            style={{
              width: 80,
              height: 23,
              left: 46,
              top: 340,
              position: "absolute",
              color: "black",
              fontSize: 16,
              fontFamily: "Epilogue",
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            Wood :
          </div>
          <img
            className="GreenDustScratch7"
            style={{
              width: 50,
              height: 50,
              left: 147,
              top: 322,
              position: "absolute",
            }}
            src="./textures/Wood_026_basecolor.jpg"
            onClick={async() => {
              const label = document.getElementById("header_3");
              label.innerText = "Pine Wood";
              
              const modelViewerTexture1 = document.querySelector("model-viewer#model1");

              const woodMaterial = modelViewerTexture1.model.materials[1];

              const wood1Normal = await modelViewerTexture1.createTexture('./textures/Wood_026_normal.jpg');
              const wood1BaseColor = await modelViewerTexture1.createTexture('./textures/Wood_026_basecolor.jpg');
              const wood1Ambiant = await modelViewerTexture1.createTexture('./textures/Wood_026_ambientOcclusion.jpg');
              const wood1Mettalic = await modelViewerTexture1.createTexture('./textures/Wood_026_roughness.jpg');

              createAndApplyTexture(woodMaterial,'normalTexture', wood1Normal);
              createAndApplyTexture(woodMaterial,'baseColorTexture', wood1BaseColor);
              createAndApplyTexture(woodMaterial,'occlusionTexture', wood1Ambiant);
              createAndApplyTexture(woodMaterial,'metallicRoughnessTexture', wood1Mettalic);
            }}
          />
          <img
            className="GreenDustScratch8"
            style={{
              width: 50,
              height: 50,
              left: 213,
              top: 322,
              position: "absolute",
            }}
            src="./textures/Wood_planks_013_basecolor.jpg"
            onClick={async () => {
              const label = document.getElementById("header_3");
              label.innerText = "Caliptus Wood";
              
              const modelViewerTexture1 = document.querySelector("model-viewer#model1");

              const woodMaterial = modelViewerTexture1.model.materials[1];
              
              const wood1Normal = await modelViewerTexture1.createTexture('./textures/Wood_planks_013_normal.jpg');
              const wood1BaseColor = await modelViewerTexture1.createTexture('./textures/Wood_planks_013_basecolor.jpg');
              const wood1Ambiant = await modelViewerTexture1.createTexture('./textures/Wood_planks_013_ambientOcclusion.jpg');
              const wood1Mettalic = await modelViewerTexture1.createTexture('./textures/Wood_planks_013_roughness.jpg');

              createAndApplyTexture(woodMaterial,'normalTexture', wood1Normal);
              createAndApplyTexture(woodMaterial,'baseColorTexture', wood1BaseColor);
              createAndApplyTexture(woodMaterial,'occlusionTexture', wood1Ambiant);
              createAndApplyTexture(woodMaterial,'metallicRoughnessTexture', wood1Mettalic);
            }}
          />
          {/*         <img
          className="GreenDustScratch9"
          style={{
            width: 50,
            height: 50,
            left: 279,
            top: 441,
            position: "absolute",
          }}
          src="https://via.placeholder.com/50x50"
        /> */}
          <div
            className="Aluminum"
            style={{
              width: 80,
              height: 23,
              left: 46,
              top: 407,
              position: "absolute",
              color: "black",
              fontSize: 16,
              fontFamily: "Epilogue",
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            Aluminum
          </div>
          <img
            className="GreenDustScratch12"
            style={{
              width: 50,
              height: 50,
              left: 147,
              top: 389,
              position: "absolute",
            }}
            src="./textures/Metal_006_basecolor.jpg"
            onClick={async () => {
              const label = document.getElementById("header_3");
              label.innerText = "Aluminum";
              
              const modelViewerTexture1 = document.querySelector("model-viewer#model1");

              const woodMaterial = modelViewerTexture1.model.materials[1];

              const wood1Normal = await modelViewerTexture1.createTexture('./textures/Metal_006_normal.jpg');
              const wood1BaseColor = await modelViewerTexture1.createTexture('./textures/Metal_006_basecolor.jpg');
              const wood1Ambiant = await modelViewerTexture1.createTexture('./textures/Metal_006_ambientOcclusion.jpg');
              const wood1Mettalic = await modelViewerTexture1.createTexture('./textures/Metal_006_roughness.jpg');

              createAndApplyTexture(woodMaterial,'normalTexture', wood1Normal);
              createAndApplyTexture(woodMaterial,'baseColorTexture', wood1BaseColor);
              createAndApplyTexture(woodMaterial,'occlusionTexture', wood1Ambiant);
              createAndApplyTexture(woodMaterial,'metallicRoughnessTexture', wood1Mettalic);
            }}
          />
          {/* <img
          className="GreenDustScratch13"
          style={{
            width: 50,
            height: 50,
            left: 213,
            top: 508,
            position: "absolute",
          }}
          src="https://via.placeholder.com/50x50"
        /> */}
          <img
            className="GreenDustScratch1"
            style={{
              width: 50,
              height: 50,
              left: 213,
              top: 121,
              position: "absolute",
            }}
            src="./textures/Leather_011_basecolor.jpg"
            onClick={async() => {
              const label = document.getElementById("header_1");
              label.innerText = "Leather - Leather Crocodile";
              
              const modelViewerTexture1 = document.querySelector("model-viewer#model1");

              const woodMaterial = modelViewerTexture1.model.materials[0];

              const wood1Normal = await modelViewerTexture1.createTexture('./textures/Leather_011_normal.jpg');
              const wood1BaseColor = await modelViewerTexture1.createTexture('./textures/Leather_011_basecolor.jpg');
              const wood1Ambiant = await modelViewerTexture1.createTexture('./textures/Leather_011_ambientOcclusion.jpg');
              const wood1Mettalic = await modelViewerTexture1.createTexture('./textures/Leather_011_roughness.jpg');

              createAndApplyTexture(woodMaterial,'normalTexture', wood1Normal);
              createAndApplyTexture(woodMaterial,'baseColorTexture', wood1BaseColor);
              createAndApplyTexture(woodMaterial,'occlusionTexture', wood1Ambiant);
              createAndApplyTexture(woodMaterial,'metallicRoughnessTexture', wood1Mettalic);
            }}
          />

          <div
            className="Fabric"
            style={{
              width: 80,
              height: 23,
              left: 48,
              top: 209,
              position: "absolute",
              color: "black",
              fontSize: 16,
              fontFamily: "Epilogue",
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            Fabric :
          </div>
          <img
            className="GreenDustScratch4"
            style={{
              width: 50,
              height: 50,
              left: 147,
              top: 191,
              position: "absolute",
            }}
            src="./textures/Substance_Graph_basecolor.jpg"
            onClick={async () => {
              const label = document.getElementById("header_1");
              label.innerText = "Fabric - Substance Graph";
              
              const modelViewerTexture1 = document.querySelector("model-viewer#model1");

              const woodMaterial = modelViewerTexture1.model.materials[0];

              const wood1Normal = await modelViewerTexture1.createTexture('./textures/Substance_Graph_normal.jpg');
              const wood1BaseColor = await modelViewerTexture1.createTexture('./textures/Substance_Graph_basecolor.jpg');
              const wood1Ambiant = await modelViewerTexture1.createTexture('./textures/Substance_Graph_ambientOcclusion.jpg');
              const wood1Mettalic = await modelViewerTexture1.createTexture('./textures/Substance_Graph_roughness.jpg');

              createAndApplyTexture(woodMaterial,'normalTexture', wood1Normal);
              createAndApplyTexture(woodMaterial,'baseColorTexture', wood1BaseColor);
              createAndApplyTexture(woodMaterial,'occlusionTexture', wood1Ambiant);
              createAndApplyTexture(woodMaterial,'metallicRoughnessTexture', wood1Mettalic);
            }}
          />
         
          <div
            className="Rectangle2"
            style={{
              cursor: "pointer",
              width: 323,
              height: 44,
              left: 48,
              top: 483,
              position: "absolute",
              background: "#040404",
              borderRadius: 11,
            }}
            onClick={() => {
              const seat = document.getElementById("header_1");
              //const seam = document.getElementById("header_2");
              const legs = document.getElementById("header_3");
              const email = `Seat: ${seat.innerText} %0D%0A Legs: ${legs.innerText}`;
              window.location = `mailto:xyz@gmail.com?subject=Enquiring about ${url}&body= ${email}`;
            }}
          >
            <div
              className="EnquireNow"
              style={{
                cursor: "pointer",
                width: 107,
                height: 18,
                left: 135,
                top: 13,
                position: "absolute",
                color: "white",
                fontSize: 16,
                fontFamily: "Epilogue",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Enquire Now
            </div>
            <img
              className="GreenDustScratch14"
              style={{
                width: 37,
                height: 37,
                left: 88,
                top: 1,
                position: "absolute",
              }}
              src="./conversation.png"
            />
          </div>
          <div
            className="Rectangle3"
            style={{
              cursor: "pointer",
              width: 323,
              height: 44,
              left: 48,
              top: 543,
              position: "absolute",
              background: "#A6A6A6",
              borderRadius: 11,
            }}
            onClick={async () => {
            
              const modelViewer = document.getElementById('model1');

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
            className="GreenDustScratch15"
            style={{
              width: 37,
              height: 37,
              left: 134,
              top: 546,
              position: "absolute",
            }}
            src="/eye.png"
            onClick={async () => {
            
              const modelViewer = document.getElementById('model1');

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
          <div
            className="ViewAtHome"
            style={{
              cursor: "pointer",
              width: 107,
              height: 18,
              left: 184,
              top: 558,
              position: "absolute",
              color: "black",
              fontSize: 16,
              fontFamily: "Epilogue",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
            slot="ar-button"
            onClick={async () => {
            
              const modelViewer = document.getElementById('model1');

              if(!modelViewer.canActivateAR)
              {
                document.getElementById('custom-alert').style.display = 'block';
                document.getElementById('overlay').style.display = 'block';
              }
              else{
                modelViewer.activateAR
              }
            }}
          >
            View at Home
          </div>
          <div
            className="Line2"
            style={{
              width: 365,
              height: 0,
              left: 29,
              top: 255,
              position: "absolute",
              border: "1px black solid",
            }}
          ></div>
        </div>
      </Html>
    </>
  );
};

export default Model;
