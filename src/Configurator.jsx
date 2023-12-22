export default function Configurator({ model }) {
  
  return (
    <>
      <div
        className="configurator"
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 10,
          display: "inline-flex",
        }}
      >
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
          id="header"
          style={{
            width: 201,
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
        ></div>
        <div
          className="Seam"
          style={{
            width: 170,
            height: 21,
            left: 24,
            top: 269,
            position: "absolute",
            color: "black",
            fontSize: 16,
            fontFamily: "Epilogue",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Seam
        </div>
        <div
          className="SeamType1"
          id="header_2"
          style={{
            width: 138,
            height: 23,
            left: 82,
            top: 269,
            position: "absolute",
            color: "black",
            fontSize: 16,
            fontFamily: "Epilogue",
            fontWeight: "300",
            wordWrap: "break-word",
          }}
        ></div>
        <div
          className="Legs"
          style={{
            width: 170,
            height: 21,
            left: 24,
            top: 399,
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
            top: 399,
            position: "absolute",
            color: "black",
            fontSize: 16,
            fontFamily: "Epilogue",
            fontWeight: "300",
            wordWrap: "break-word",
          }}
        ></div>
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
          onClick={() => {
            const label = document.getElementById("header");
            label.innerText = "Leather - Leather Weave";
          }}
        />
        <div
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
            label.innerText = "Seam - Seam 1";
          }}
        />
        <img
          className="GreenDustScratch11"
          style={{
            width: 50,
            height: 50,
            left: 213,
            top: 311,
            position: "absolute",
          }}
          src="https://via.placeholder.com/50x50"
        />
        <div
          className="Wood"
          style={{
            width: 80,
            height: 23,
            left: 46,
            top: 459,
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
            top: 441,
            position: "absolute",
          }}
          src="./textures/Wood_026_basecolor.jpg"
          onClick={() => {
            const label = document.getElementById("header_3");
            label.innerText = "Pine Wood";
          }}
        />
        <img
          className="GreenDustScratch8"
          style={{
            width: 50,
            height: 50,
            left: 213,
            top: 441,
            position: "absolute",
          }}
          src="./textures/Wood_planks_013_basecolor.jpg"
          onClick={() => {
            const label = document.getElementById("header_3");
            label.innerText = "Caliptus Wood";
          }}
        />
        <img
          className="GreenDustScratch9"
          style={{
            width: 50,
            height: 50,
            left: 279,
            top: 441,
            position: "absolute",
          }}
          src="https://via.placeholder.com/50x50"
        />
        <div
          className="Aluminum"
          style={{
            width: 80,
            height: 23,
            left: 46,
            top: 526,
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
            top: 508,
            position: "absolute",
          }}
          src="./textures/Metal_006_basecolor.jpg"
          onClick={() => {
            const label = document.getElementById("header_3");
            label.innerText = "Aluminum - Scratched";
          }}
        />
        <img
          className="GreenDustScratch13"
          style={{
            width: 50,
            height: 50,
            left: 213,
            top: 508,
            position: "absolute",
          }}
          src="https://via.placeholder.com/50x50"
        />
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
          onClick={() => {
            const label = document.getElementById("header");
            label.innerText = "Leather - Leather Crocodile";
          }}
        />
        <img
          className="GreenDustScratch2"
          style={{
            width: 50,
            height: 50,
            left: 279,
            top: 121,
            position: "absolute",
          }}
          src="./textures/Leather_basecolor.jpg"
          onClick={() => {
            const label = document.getElementById("header");
            label.innerText = "Leather - Leather Weave";
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
          onClick={() => {
            const label = document.getElementById("header");
            label.innerText = "Fabric - Substance Graph A";
          }}
        />
        <img
          className="GreenDustScratch10"
          style={{
            width: 50,
            height: 50,
            left: 213,
            top: 191,
            position: "absolute",
          }}
          src="https://via.placeholder.com/50x50"
        />
        <div
          className="Rectangle2"
          style={{
            width: 323,
            height: 44,
            left: 48,
            top: 602,
            position: "absolute",
            background: "#040404",
            borderRadius: 11,
          }}
          onClick={()=>{
            const seat = document.getElementById('header')
            const seam = document.getElementById('header_2')
            const legs = document.getElementById('header_3')
            const email = `Seat: ${seat.innerText} %0D%0A Seam: ${seam.innerText} %0D%0A Legs: ${legs.innerText}`
            window.location = `mailto:xyz@gmail.com?subject=Enquiring about ${model}&body= ${email}`;

          }}
        >
          <div
            className="EnquireNow"
            style={{
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
              width: 33,
              height: 28,
              left: 92,
              top: 10,
              position: "absolute",
            }}
            src="./email.png"
          />
        </div>
        <div
          className="Rectangle3"
          style={{
            width: 323,
            height: 44,
            left: 48,
            top: 662,
            position: "absolute",
            background: "#A6A6A6",
            borderRadius: 11,
          }}
        />
        <img
          className="GreenDustScratch15"
          style={{
            width: 33,
            height: 28,
            left: 139,
            top: 670,
            position: "absolute",
          }}
          src="https://via.placeholder.com/33x28"
        />
        <div
          className="ViewAtHome"
          style={{
            width: 107,
            height: 18,
            left: 184,
            top: 677,
            position: "absolute",
            color: "white",
            fontSize: 16,
            fontFamily: "Epilogue",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          View at Home
        </div>
        <div
          className="AboutHomeChair"
          style={{
            width: 244,
            height: 35,
            left: 35,
            top: 20,
            position: "absolute",
            color: "black",
            fontSize: 20,
            fontFamily: "Epilogue",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          About {model}
        </div>
        <div
          className="Line1"
          style={{
            width: 365,
            height: 0,
            left: 29,
            top: 55,
            position: "absolute",
            border: "1px black solid",
          }}
        ></div>
        <div
          className="Line4"
          style={{
            width: 365,
            height: 0,
            left: 29,
            top: 575,
            position: "absolute",
            border: "1px black solid",
          }}
        ></div>
        <div
          className="Line3"
          style={{
            width: 365,
            height: 0,
            left: 29,
            top: 385,
            position: "absolute",
            border: "1px black solid",
          }}
        ></div>
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
    </>
  );
}
