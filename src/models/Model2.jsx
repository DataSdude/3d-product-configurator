import { Center, Html, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { ReactDOM } from "react";
import * as THREE from "three";

const Model2 = ({ url }) => {
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
        <model-viewer
          id="model"
          className="model"
          ref={modelViewerRef}
          src="/Space_Corona.gltf"
          ar
          camera-controls
          touch-action="pan-y"
        ></model-viewer>
        <div id="custom-alert">
          <div
            id="close-btn"
            onClick={() => {
              document.getElementById("custom-alert").style.display = "none";
            }}
          >
            X
          </div>
          <img src="./qrimage.png" alt="Image" />
          <h2>View Product In Your Home</h2>
          <p id="alertParagraph">
            Scan the QR code and point your mobile at the floor to begin placing
            your product
          </p>
        </div>
        <div className="flex-container-selector" hidden={false}>
          <div id="menu1Box" hidden={false}>
            <img
              className="myButton2"
              src="/downloadme.png"
              onClick={async () => {
                const modelViewer = document.getElementById("model");
                const blob = await modelViewer.toBlob({ idealAspect: false });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "Sidebar.png";
                a.click();
                URL.revokeObjectURL(url);
              }}
            />
            <img
              id="menu13D"
              style={{
                width: 63,
                height: 60,
              }}
              hidden={false}
              slot="ar-button"
              src="./3d-model - Copy.png"
              onClick={() => {
                const modelViewer = document.getElementById("model");
                if (modelViewer.canActivateAR == false) {
                  document.getElementById("custom-alert").style.display =
                    "block";
                  document.getElementById("overlay").style.display = "block";
                }
              }}
            />
            <div className="changeBody-container">
              <img
                id="menu1"
                className="changeBodyImage"
                style={{
                  width: 50,
                  height: 50,
                }}
                hidden={false}
                src="./textures/Wood_a.jpg"
                onClick={() => {
                  const menu1Elements = document.querySelector("#menu1Box");
                  const menu2Elements = document.querySelector("#menu2Box");
                  menu1Elements.setAttribute("hidden", "{'true'}");
                  menu2Elements.toggleAttribute("hidden");
                }}
              />
              <p
                id="menu1ChangeDoors"
                hidden={false}
                onClick={() => {
                  const menu1Elements = document.querySelector("#menu1Box");
                  const menu2Elements = document.querySelector("#menu2Box");
                  menu1Elements.setAttribute("hidden", "{'true'}");
                  menu2Elements.toggleAttribute("hidden");
                }}
              >
                Change Body
              </p>
            </div>
            <div className="changeDoors-container">
              <img
                id="menu1"
                className="changeDoorsImage"
                style={{
                  width: 50,
                  height: 50,
                }}
                hidden={false}
                src="./textures/Plaid_Wood_a.jpg"
                onClick={() => {
                  const menu1Elements = document.querySelector("#menu1Box");
                  const menu3Elements = document.querySelector("#menu3Box");
                  menu1Elements.setAttribute("hidden", "{'true'}");

                  menu3Elements.toggleAttribute("hidden");
                }}
              />
              <p
                id="menu1ChangeDoors"
                hidden={false}
                onClick={() => {
                  const menu1Elements = document.querySelector("#menu1Box");
                  const menu2Elements = document.querySelector("#menu2Box");
                  menu1Elements.setAttribute("hidden", "{'true'}");

                  menu2Elements.childNodes.forEach((element) => {
                    element.toggleAttribute("hidden");
                  });
                  menu2Elements.toggleAttribute("hidden");
                }}
              >
                Change Doors
              </p>
            </div>
          </div>
          <div id="menu2Box" hidden={true}
          >
            <img
              id="menu2Return"
              style={{
                width: 43,
                height: 50,
              }}
              src="./return.png"
              onClick={() => {
                const menu1Elements = document.querySelector("#menu1Box");
                const menu2Elements = document.querySelector("#menu2Box");
                menu1Elements.toggleAttribute("hidden");
                menu2Elements.toggleAttribute("hidden");
              }}
            />
            <img
              id="menu2Material1"
              style={{
                width: 50,
                height: 50,
              }}
              src="./textures/Wood_a.jpg"
              onClick={async () => {
                const menu1Image = document.querySelector(".changeBodyImage");
                menu1Image.setAttribute("src", "./textures/Wood_a.jpg");

                const modelViewerTexture1 =
                  document.querySelector("model-viewer#model");

                const woodMaterial = modelViewerTexture1.model.materials[0];

                const wood1Normal = await modelViewerTexture1.createTexture(
                  "./textures/Wood_Plywood_Front_001_normal.jpg"
                );
                const wood1BaseColor = await modelViewerTexture1.createTexture(
                  "./textures/Wood_Plywood_Front_001_basecolor.jpg"
                );
                const wood1Ambiant = await modelViewerTexture1.createTexture(
                  "./textures/Wood_Plywood_Front_001_ambientOcclusion.jpg"
                );
                const wood1Mettalic = await modelViewerTexture1.createTexture(
                  "./textures/Wood_Plywood_Front_001_roughness.jpg"
                );

                createAndApplyTexture(
                  woodMaterial,
                  "normalTexture",
                  wood1Normal
                );
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
              id="menu2Material2"
              style={{
                width: 50,
                height: 50,
              }}
              src="./textures/diagonal_parquet_diffusion.png"
              onClick={async () => {
                const menu1Image = document.querySelector(".changeBodyImage");
                menu1Image.setAttribute(
                  "src",
                  "./textures/diagonal_parquet_diffusion.png"
                );

                const modelViewerTexture1 =
                  document.querySelector("model-viewer#model");

                const woodMaterial = modelViewerTexture1.model.materials[0];

                const wood1Normal = await modelViewerTexture1.createTexture(
                  "./textures/diagonal_parquet_normal.png"
                );
                const wood1BaseColor = await modelViewerTexture1.createTexture(
                  "./textures/diagonal_parquet_diffusion.png"
                );
                const wood1Ambiant = await modelViewerTexture1.createTexture(
                  "./textures/diagonal_parquet_ambientOcclusion.png"
                );
                const wood1Mettalic = await modelViewerTexture1.createTexture(
                  "./textures/diagonal_parquet_roughness.png"
                );

                createAndApplyTexture(
                  woodMaterial,
                  "normalTexture",
                  wood1Normal
                );
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
              id="menu2Material3"
              style={{
                width: 50,
                height: 50,
              }}
              src="./textures/wood_table_001_diffusion.jpg"
              onClick={async () => {
                const menu1Image = document.querySelector(".changeBodyImage");
                menu1Image.setAttribute(
                  "src",
                  "./textures/wood_table_001_diffusion.jpg"
                );

                const modelViewerTexture1 =
                  document.querySelector("model-viewer#model");

                const woodMaterial = modelViewerTexture1.model.materials[0];

                const wood1Normal = await modelViewerTexture1.createTexture(
                  "./textures/wood_table_001_normal.jpg"
                );
                const wood1BaseColor = await modelViewerTexture1.createTexture(
                  "./textures/wood_table_001_diffusion.jpg"
                );
                const wood1Ambiant = await modelViewerTexture1.createTexture(
                  "./textures/wood_table_001_ambientOcclusion.jpg"
                );
                const wood1Mettalic = await modelViewerTexture1.createTexture(
                  "./textures/wood_table_001_roughness.jpg"
                );

                createAndApplyTexture(
                  woodMaterial,
                  "normalTexture",
                  wood1Normal
                );
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
          <div
            id="menu3Box" hidden={true}
          >
            <img
              id="menu3Return"
              style={{
                width: 43,
                height: 50,
              }}
              src="./return.png"
              onClick={() => {
                const menu1Elements = document.querySelector("#menu1Box");
                const menu3Elements = document.querySelector("#menu3Box");
                menu1Elements.toggleAttribute("hidden");
                menu3Elements.toggleAttribute("hidden");
              }}
            />
            <img
              id="menu3Material1"
              style={{
                width: 50,
                height: 50,
              }}
              src="./textures/Plaid_Wood_a.jpg"
              onClick={async () => {
                const menu2Image = document.querySelector(".changeDoorsImage");
                menu2Image.setAttribute("src", "./textures/Plaid_Wood_a.jpg");

                const modelViewerTexture1 =
                  document.querySelector("model-viewer#model");

                const doorMaterial = modelViewerTexture1.model.materials[1];

                const doorBaseColor = await modelViewerTexture1.createTexture(
                  "./textures/Plaid_Wood_a.jpg"
                );

                createAndApplyTexture(
                  doorMaterial,
                  "baseColorTexture",
                  doorBaseColor
                );
              }}
            />
            <img
              id="menu3Material2"
              style={{
                width: 50,
                height: 50,
              }}
              src="./textures/fabric_pattern_05_diffusion.jpg"
              onClick={async () => {
                const menu2Image = document.querySelector(".changeDoorsImage");
                menu2Image.setAttribute(
                  "src",
                  "./textures/fabric_pattern_05_diffusion.jpg"
                );

                const modelViewerTexture1 =
                  document.querySelector("model-viewer#model");

                const doorMaterial = modelViewerTexture1.model.materials[1];

                //const doorNormal = await modelViewerTexture1.createTexture('./textures/fabric_pattern_05_normal.jpg');
                const doorBaseColor = await modelViewerTexture1.createTexture(
                  "./textures/fabric_pattern_05_diffusion.jpg"
                );
                createAndApplyTexture(
                  doorMaterial,
                  "baseColorTexture",
                  doorBaseColor
                );
              }}
            />
            <img
              id="menu3Material3"
              style={{
                width: 50,
                height: 50,
              }}
              src="./textures/Rug_006_basecolor.jpg"
              onClick={async () => {
                const menu2Image = document.querySelector(".changeDoorsImage");
                menu2Image.setAttribute(
                  "src",
                  "./textures/Rug_006_basecolor.jpg"
                );

                const modelViewerTexture1 =
                  document.querySelector("model-viewer#model");

                const doorMaterial = modelViewerTexture1.model.materials[1];

                const doorBaseColor = await modelViewerTexture1.createTexture(
                  "./textures/Rug_006_basecolor.jpg"
                );
                createAndApplyTexture(
                  doorMaterial,
                  "baseColorTexture",
                  doorBaseColor
                );
              }}
            />
            
          </div>
        </div>
      </div>

      <div className="configurator2">
        <h5 style={{ color: "darkblue" }}>Furniture</h5>
        <h1>Jalousi sideboard</h1>
        <h5 style={{ color: "gray", fontSize: 14 }}>1299.00 Dhs</h5>
        <p>
          The Jalousi collection, which consists of a sideboard and cabinets in
          two different sizes, is characterised by its minimalist idiom and a
          contrasting mix of materials. All of the designs feature practical
          rolling shutters in inviting shades of colour. The coloured shutters
          form an attractive contrast to the cabinet body in an oak veneer with
          legs of solid oak.
        </p>
      </div>
    </Html>
  );
};

export default Model2;
