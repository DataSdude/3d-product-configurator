import { Html } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
const Model = () => {
  const modelViewerRef = useRef(null);

  const createAndApplyTexture = async (material, channel, texture) => {
    if (channel.includes("base") || channel.includes("metallic")) {
      material.pbrMetallicRoughness[channel].setTexture(texture);
      console.log("pbr exectued");
    } else {
      material[channel].setTexture(texture);
      console.log("no pbr executed");
    }
  };
  return (
    <Html center className="flex-container">
      <div className="flex-container-model-selector">
        <div id="custom-alert">
          <div
            id="close-btn"
            onClick={() => {
              document.getElementById("custom-alert").style.display = "none";
            }}
          >
            X
          </div>
          <img src="./qrimage.webp" alt="Image" />
          <h2>View Product In Your Home</h2>
          <p id="alertParagraph">
            Scan the QR code and point your mobile at the floor to begin placing
            your product
          </p>
        </div>
        <model-viewer
          id='model1'
          src="/Home Chair.glb"
          camera-controls
          touch-action="pan-y"
          ar
        >
        </model-viewer>
      </div>

      <div className="configurator">
        <div className="flex-container-generic-header">
          <div
            className="partHeader"
          >
            Seat :
          </div>
          <div
            className="LeatherLeatherWeave"
            id="header_1"
          >
            Gray Mohawk
          </div>
        
        </div>
        
        <div className="flex-container-generic">
          <div className="Leather">
            Leather :
          </div>
          <div className="flex-container-generic-materials">
            <img
              className="GreenDustScratch1"
              src="./textures/Leather_Weave_002_basecolor.webp"
              onClick={async () => {
                const label = document.getElementById("header_1");
                label.innerText = "Leather Weave";
                const modelViewerTexture1 = document.querySelector(
                  "model-viewer#model1"
                );

                const woodMaterial = modelViewerTexture1.model.materials[0];

                const wood1Normal = await modelViewerTexture1.createTexture(
                  "./textures/Leather_Weave_002_normal.webp"
                );
                const wood1BaseColor = await modelViewerTexture1.createTexture(
                  "./textures/Leather_Weave_002_basecolor.webp"
                );
                const wood1Ambiant = await modelViewerTexture1.createTexture(
                  "./textures/Leather_Weave_002_ambientOcclusion.webp"
                );
                const wood1Mettalic = await modelViewerTexture1.createTexture(
                  "./textures/Leather_Weave_002_roughness.webp"
                );

                createAndApplyTexture(woodMaterial, "normalTexture", wood1Normal);
                createAndApplyTexture(
                  woodMaterial,
                  "baseColorTexture",
                  wood1BaseColor
                );
                createAndApplyTexture(
                  woodMaterial,
                  "occlusionTexture",
                  wood1Ambiant
                );
                createAndApplyTexture(
                  woodMaterial,
                  "metallicRoughnessTexture",
                  wood1Mettalic
                );
              }}
            />
            <img
              className="GreenDustScratch1"
              src="./textures/Leather_011_basecolor.webp"
              onClick={async () => {
              const label = document.getElementById("header_1");
              label.innerText = "Leather Crocodile";

              const modelViewerTexture1 = document.querySelector(
                "model-viewer#model1"
              );

              const woodMaterial = modelViewerTexture1.model.materials[0];

              const wood1Normal = await modelViewerTexture1.createTexture(
                "./textures/Leather_011_normal.webp"
              );
              const wood1BaseColor = await modelViewerTexture1.createTexture(
                "./textures/Leather_011_basecolor.webp"
              );
              const wood1Ambiant = await modelViewerTexture1.createTexture(
                "./textures/Leather_011_ambientOcclusion.webp"
              );
              const wood1Mettalic = await modelViewerTexture1.createTexture(
                "./textures/Leather_011_roughness.webp"
              );

              createAndApplyTexture(woodMaterial, "normalTexture", wood1Normal);
              createAndApplyTexture(
                woodMaterial,
                "baseColorTexture",
                wood1BaseColor
              );
              createAndApplyTexture(
                woodMaterial,
                "occlusionTexture",
                wood1Ambiant
              );
              createAndApplyTexture(
                woodMaterial,
                "metallicRoughnessTexture",
                wood1Mettalic
              );
              }}
            />
          </div>
          
        </div>
        <div className="flex-container-generic">
          <div
            className="Fabric"
          >
            Fabric :
          </div>
          <div className="flex-container-generic-materials">
          <img
            className="GreenDustScratch4"
            src="./textures/Substance_Graph_basecolor.webp"
            onClick={async () => {
              const label = document.getElementById("header_1");
              label.innerText = "Substance Graph";

              const modelViewerTexture1 = document.querySelector(
                "model-viewer#model1"
              );

              const woodMaterial = modelViewerTexture1.model.materials[0];

              const wood1Normal = await modelViewerTexture1.createTexture(
                "./textures/Substance_Graph_normal.webp"
              );
              const wood1BaseColor = await modelViewerTexture1.createTexture(
                "./textures/Substance_Graph_basecolor.webp"
              );
              const wood1Ambiant = await modelViewerTexture1.createTexture(
                "./textures/Substance_Graph_ambientOcclusion.webp"
              );
              const wood1Mettalic = await modelViewerTexture1.createTexture(
                "./textures/Substance_Graph_roughness.webp"
              );

              createAndApplyTexture(woodMaterial, "normalTexture", wood1Normal);
              createAndApplyTexture(
                woodMaterial,
                "baseColorTexture",
                wood1BaseColor
              );
              createAndApplyTexture(
                woodMaterial,
                "occlusionTexture",
                wood1Ambiant
              );
              createAndApplyTexture(
                woodMaterial,
                "metallicRoughnessTexture",
                wood1Mettalic
              );
            }}
          />
          <img
            className="GreenDustScratch4"
            src="./textures/Substance_Graph_basecolor.webp"
            onClick={async () => {
              const label = document.getElementById("header_1");
              label.innerText = "Substance Graph";

              const modelViewerTexture1 = document.querySelector(
                "model-viewer#model1"
              );

              const woodMaterial = modelViewerTexture1.model.materials[0];

              const wood1Normal = await modelViewerTexture1.createTexture(
                "./textures/Substance_Graph_normal.webp"
              );
              const wood1BaseColor = await modelViewerTexture1.createTexture(
                "./textures/Substance_Graph_basecolor.webp"
              );
              const wood1Ambiant = await modelViewerTexture1.createTexture(
                "./textures/Substance_Graph_ambientOcclusion.webp"
              );
              const wood1Mettalic = await modelViewerTexture1.createTexture(
                "./textures/Substance_Graph_roughness.webp"
              );

              createAndApplyTexture(woodMaterial, "normalTexture", wood1Normal);
              createAndApplyTexture(
                woodMaterial,
                "baseColorTexture",
                wood1BaseColor
              );
              createAndApplyTexture(
                woodMaterial,
                "occlusionTexture",
                wood1Ambiant
              );
              createAndApplyTexture(
                woodMaterial,
                "metallicRoughnessTexture",
                wood1Mettalic
              );
            }}
          />
          </div>
        </div>
            <hr/>
        <div className="flex-container-generic-header">
          <div
            className="partHeader"
          >
            Legs
          </div>
          <div
            className="WoodPine"
            id="header_3"
          >
            Pine Wood
          </div>
        </div>

        <div className="flex-container-generic">
          <div className="Wood">
            Wood :
          </div>
          <div className="flex-container-generic-materials">
            <img
              className="GreenDustScratch7"
              src="./textures/Wood_026_basecolor.webp"
              onClick={async () => {
                const label = document.getElementById("header_3");
                label.innerText = "Pine Wood";

                const modelViewerTexture1 = document.querySelector(
                  "model-viewer#model1"
                );

                const woodMaterial = modelViewerTexture1.model.materials[1];

                const wood1Normal = await modelViewerTexture1.createTexture(
                  "./textures/Wood_026_normal.webp"
                );
                const wood1BaseColor = await modelViewerTexture1.createTexture(
                  "./textures/Wood_026_basecolor.webp"
                );
                const wood1Ambiant = await modelViewerTexture1.createTexture(
                  "./textures/Wood_026_ambientOcclusion.webp"
                );
                const wood1Mettalic = await modelViewerTexture1.createTexture(
                  "./textures/Wood_026_roughness.webp"
                );

                createAndApplyTexture(woodMaterial, "normalTexture", wood1Normal);
                createAndApplyTexture(
                  woodMaterial,
                  "baseColorTexture",
                  wood1BaseColor
                );
                createAndApplyTexture(
                  woodMaterial,
                  "occlusionTexture",
                  wood1Ambiant
                );
                createAndApplyTexture(
                  woodMaterial,
                  "metallicRoughnessTexture",
                  wood1Mettalic
                );
              }}
            />
            <img
              className="GreenDustScratch8"
              src="./textures/Wood_planks_013_basecolor.webp"
              onClick={async () => {
                const label = document.getElementById("header_3");
                label.innerText = "Caliptus Wood";

                const modelViewerTexture1 = document.querySelector(
                  "model-viewer#model1"
                );

                const woodMaterial = modelViewerTexture1.model.materials[1];

                const wood1Normal = await modelViewerTexture1.createTexture(
                  "./textures/Wood_planks_013_normal.webp"
                );
                const wood1BaseColor = await modelViewerTexture1.createTexture(
                  "./textures/Wood_planks_013_basecolor.webp"
                );
                const wood1Ambiant = await modelViewerTexture1.createTexture(
                  "./textures/Wood_planks_013_ambientOcclusion.webp"
                );
                const wood1Mettalic = await modelViewerTexture1.createTexture(
                  "./textures/Wood_planks_013_roughness.webp"
                );

                createAndApplyTexture(woodMaterial, "normalTexture", wood1Normal);
                createAndApplyTexture(
                  woodMaterial,
                  "baseColorTexture",
                  wood1BaseColor
                );
                createAndApplyTexture(
                  woodMaterial,
                  "occlusionTexture",
                  wood1Ambiant
                );
                createAndApplyTexture(
                  woodMaterial,
                  "metallicRoughnessTexture",
                  wood1Mettalic
                );
              }}
            />
          </div>
        </div>

        <div className="flex-container-generic">
        <div
          className="Aluminum"
        >
          Metal :
        </div>
        <div className="flex-container-generic-materials">
          <img
            className="GreenDustScratch12"
            src="./textures/Metal_006_basecolor.webp"
            onClick={async () => {
              const label = document.getElementById("header_3");
              label.innerText = "Aluminum";

              const modelViewerTexture1 = document.querySelector(
                "model-viewer#model1"
              );

              const woodMaterial = modelViewerTexture1.model.materials[1];

              const wood1Normal = await modelViewerTexture1.createTexture(
                "./textures/Metal_006_normal.webp"
              );
              const wood1BaseColor = await modelViewerTexture1.createTexture(
                "./textures/Metal_006_basecolor.webp"
              );
              const wood1Ambiant = await modelViewerTexture1.createTexture(
                "./textures/Metal_006_ambientOcclusion.webp"
              );
              const wood1Mettalic = await modelViewerTexture1.createTexture(
                "./textures/Metal_006_roughness.webp"
              );

              createAndApplyTexture(woodMaterial, "normalTexture", wood1Normal);
              createAndApplyTexture(
                woodMaterial,
                "baseColorTexture",
                wood1BaseColor
              );
              createAndApplyTexture(
                woodMaterial,
                "occlusionTexture",
                wood1Ambiant
              );
              createAndApplyTexture(
                woodMaterial,
                "metallicRoughnessTexture",
                wood1Mettalic
              );
            }}
          />
          <img
            className="GreenDustScratch12"
            src="./textures/Metal_006_basecolor.webp"
            onClick={async () => {
              const label = document.getElementById("header_3");
              label.innerText = "Aluminum";

              const modelViewerTexture1 = document.querySelector(
                "model-viewer#model1"
              );

              const woodMaterial = modelViewerTexture1.model.materials[1];

              const wood1Normal = await modelViewerTexture1.createTexture(
                "./textures/Metal_006_normal.webp"
              );
              const wood1BaseColor = await modelViewerTexture1.createTexture(
                "./textures/Metal_006_basecolor.webp"
              );
              const wood1Ambiant = await modelViewerTexture1.createTexture(
                "./textures/Metal_006_ambientOcclusion.webp"
              );
              const wood1Mettalic = await modelViewerTexture1.createTexture(
                "./textures/Metal_006_roughness.webp"
              );

              createAndApplyTexture(woodMaterial, "normalTexture", wood1Normal);
              createAndApplyTexture(
                woodMaterial,
                "baseColorTexture",
                wood1BaseColor
              );
              createAndApplyTexture(
                woodMaterial,
                "occlusionTexture",
                wood1Ambiant
              );
              createAndApplyTexture(
                woodMaterial,
                "metallicRoughnessTexture",
                wood1Mettalic
              );
            }}
          />
        </div>
        </div>
        <hr/>

        <div
          className="Button"
          style={{
            cursor: "pointer",
            background: "#040404",
            borderRadius: 11,
          }}
          onClick={() => {
            const seat = document.getElementById("header_1");
            //const seam = document.getElementById("header_2");
            const legs = document.getElementById("header_3");
            const email = `Seat: ${seat.innerText} %0D%0A Legs: ${legs.innerText}`;
            window.location = `mailto:xyz@gmail.com?subject=Enquiring about Home Chair&body= ${email}`;
          }}
        >
          <img
            className="GreenDustScratch14"
            style={{
              width: 37,
              height: 37,
            }}
            src="./conversation.webp"
          />
          Enquire Now
        </div>
        <div
          className="Button"
          style={{
            cursor: "pointer",
            background: "#A6A6A6",
            borderRadius: 11,
          }}
          slot="ar-button"
          onClick={async () => {
            const modelViewer = document.getElementById("model1");
            // Check if AR is supported
            if ('xr' in navigator && 'requestDevice' in navigator.xr) {
              // Request XR device and enter AR mode
              navigator.xr.requestDevice()
                .then(function (xrDevice) {
                  return xrDevice.requestSession({ immersive: true });
                })
                .then(function (xrSession) {
                  // Activate AR mode on the model viewer
                  modelViewer.activateAR(xrSession);
                })
                .catch(function (error) {
                  console.error('Failed to enter AR:', error);
                });
            } else {
              document.getElementById("custom-alert").style.display = "block";
              console.error('AR not supported.');
            }
          }}
        >
          <div
          className="ViewAtHome"
          
        >
          <img
          className="GreenDustScratch15"
          style={{
            width: 37,
            height: 37,
          }}
          src="/eye.webp"
        />
          View at Home
        </div>
        </div>
        {/* <img
          className="myButton2model1"
          src="/downloadme.webp"
          onClick={async () => {
            const modelViewer = document.getElementById("model1");
            const blob = await modelViewer.toBlob({ idealAspect: false });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "Chair.webp";
            a.click();
            URL.revokeObjectURL(url);
          }}
        /> */}
        
      </div>
    </Html>
  );
};

export default Model;
