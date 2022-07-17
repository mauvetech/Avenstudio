import Image from "next/image";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import Pdfviewer from "../components/Droppin";
import Projet from "./Projet";

function Work() {
  const [doc, setDoc] = useState("/Droppin.pdf");
  const [scale, setScale] = useState(1);
  return (
    <div id="work" className=" h-screen w-screen top-[198vh] absolute flex">
      <div className="w-screen absolute h-screen ">
        <Image
          src="/Background.png"
          layout="fill"
          className="absolute mix-blend-soft-light saturate-200 "
          objectFit="cover"
        />
      </div>
      <div className="self-center md:my-[40vh] md:mx-[40vw] absolute  z-50">
        <Popup
          contentStyle={{
            padding: "0px",
            backgroundColor: "transparent",
            border: "none",
          }}
          trigger={
            <div
              onMouseEnter={() => {
                setDoc("/Droppin.pdf");
                setScale(1.1);
                console.log(scale);
              }}
            >
              <Projet title="DROPIN" />
            </div>
          }
          modal
          nested
        >
          {(close) => (
            <div className=" w-[47vw]  text-transparent text-xs flex-col items-center justify-center overflow-y-scroll scrollbar-hide ">
              <button
                className=" text-white text-[5vh] close -right-6 absolute"
                onClick={close}
              >
                &times;
              </button>
              <div className="h-[90vh] w-[48vw] content flex-col items-center justify-center overflow-y-scroll scrollbar-hide">
                <span>
                  <Pdfviewer doc={doc} scale={scale} />
                </span>
              </div>
              <div className="actions"></div>
            </div>
          )}
        </Popup>

        <Popup
          contentStyle={{
            padding: "0px",
            backgroundColor: "transparent",
            border: "none",
          }}
          trigger={
            <div
              onMouseEnter={() => {
                setDoc("/Eden.pdf");
                setScale(0.5);
                console.log(scale);
              }}
              className="md:ml-0 -ml-[1.5vw]"
            >
              <Projet title="EDENA" />
            </div>
          }
          modal
          nested
        >
          {(close) => (
            <div className=" text-xs ">
              <button
                className="text-white text-[5vh] close -right-6 absolute"
                onClick={close}
              >
                &times;
              </button>

              <div className=" h-[90vh] w-[47vw] content text-transparent flex-col items-center justify-center overflow-y-scroll scrollbar-hide">
                <span>
                  <Pdfviewer doc={doc} scale={scale} />
                </span>
              </div>
              <div className="actions"></div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}

export default Work;
