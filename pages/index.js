import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Pdfviewer from "../components/Droppin";
import "reactjs-popup/dist/index.css";
import React, { useEffect, useState } from "react";
import HeaderItem from "../components/HeaderItem";
import { MenuIcon } from "@heroicons/react/outline";
import About from "../components/About";
import Maison from "../components/Maison";
import Contact from "../components/Contact";
import Work from "../components/Work";

export default function Home() {
  const [menu, setMenu] = useState("Home");
  const [scale, setScale] = useState(1);
  const [doc, setDoc] = useState("/Droppin.pdf");
  const [maison, setMaison] = useState(false);
  const [about, setAbout] = useState(false);
  const [work, setWork] = useState(false);
  return (
    <div className="flex flex-col w-screen h-screen absolute overflow-y-scroll overflow-x-hidden ">
      <Header homeActive={maison} aboutActive={about} workActive={work} />
      <div className="h-fit w-fit absolute ml-[95vw] mt-[6vh]">
        <MenuIcon className="h-[2vw]   text-white cursor-pointer" />
      </div>

      {/* <div className="bg-red-500">
        <img
          src="/Background.png"
          layout="fill"
          className="absolute mix-blend-soft-light saturate-200"
          objectFit="cover"
        />
      </div> */}

      {/*<img src="/vercel.svg" height={500} width={500} />*/}
      <div className="absolute -left-[36vw] -top-[22vh] w-full h-[60vh]   ">
        <Image src="/LOGO.png" layout="fill" objectFit="contain" />
      </div>

      {/* {menu == "Home" ? (
        <div className="h-[100vh]  w-1/4 flex flex-col justify-end">
          <header className=" lg:mb-[5vh] mb-[5vh] border-l-[2.8px] border-l-white lg:ml-[5vw] ml-[5vw]  h-fit     flex flex-col absolute">
            <div className="flex space-y-3 flex-col  lg:-ml-[1vw] ml-[2vw] z-50 h-full justify-end">
              <div>
                <HeaderItem title="Home" active={true} />
              </div>

              <div className=" mx-1">
                <HeaderItem
                  title="About"
                  onclick={() => {
                    setMenu("About");
                  }}
                />
              </div>
              <div className=" -mx-0.5">
                <HeaderItem
                  title="Work"
                  onclick={() => {
                    setMenu("Work");
                  }}
                />
              </div>
              <div className=" mx-4">
                <HeaderItem
                  title="Contact"
                  onclick={() => {
                    setMenu("Contact");
                  }}
                />
              </div>
            </div>
          </header>
          <Image
            src="/AVENSTUDIO_GROS_LOGO3.png"
            layout="fill"
            objectFit="cover"
            className="md:visible invisible"
          />
          <div className="text-white text-xl md:ml-[54vw] md:mb-[22vh] mb-[50vh] ml-[20vw] absolute  md:w-1/3 h-1/5">
            <p>
              True innovation starts by listening to and addressing the
              individual needs of our clients. We are pioneers and believe that
              collaborating throughout the project results in elegant and
              award-winning identity that perform and express your corporate
              culture, today and in the future.
            </p>
          </div>
        </div>
      ) : null}

      {console.log(menu == "Home")}

      <div className="flex flex-col">
        {menu == "Work" ? (
          <div className="h-[100vh]  w-1/4 flex flex-col justify-end">
            
            <div className="self-center my-[40vh] mx-[40vw]  absolute  z-50">
              <Popup
                contentStyle={{
                  padding: "0px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                trigger={
                  <h1
                    onMouseEnter={() => {
                      setDoc("/Droppin.pdf");
                      setScale(1.1);
                      console.log(scale);
                    }}
                    className="ml-[100vw]  helv font-extrabold text-white text-6xl opacity-50 hover:opacity-100 transition ease-in-out delay-150  hover:scale-150 hover:translate-x-[84px] hover:cursor-pointer"
                  >
                    DROPIN
                  </h1>
                }
                modal
                nested
              >
                {(close) => (
                  <div className=" w-[47vw]  text-transparent text-xs flex-col items-center justify-center overflow-y-scroll scrollbar-hide ">
                    <button
                      className=" text-white text-xl close -right-6 absolute"
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
                  >
                    <h1 className="helv ml-[100vw] font-extrabold text-white text-6xl opacity-50  hover:opacity-100 transition ease-in-out delay-150  hover:scale-150 hover:translate-x-[84px]  hover:cursor-pointer">
                      EDENA
                    </h1>
                  </div>
                }
                modal
                nested
              >
                {(close) => (
                  <div className=" text-xs ">
                    <button
                      className="text-white text-xl close -right-6 absolute"
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
            <div className="bg-red-600 w-screen h-screen mt-[100vh]"></div>
          </div>
        ) : null} */}

      <div className="flex flex-col  w-[100vw] h-[100vh]">
        <div
          className="w-screen h-screen"
          onMouseEnter={() => {
            setMaison(true);
            console.log(maison);
          }}
          onMouseLeave={() => {
            setMaison(false);
          }}
        >
          <Maison />
        </div>
        <div
          className="w-screen h-screen "
          onMouseEnter={() => {
            setAbout(true);
            console.log(maison);
          }}
          onMouseLeave={() => {
            setAbout(false);
          }}
        >
          <About />
        </div>

        <div
          onMouseEnter={() => {
            setWork(true);
            console.log(maison);
          }}
          onMouseLeave={() => {
            setWork(false);
          }}
        >
          <Work />
        </div>

        {/*
        <Contact />  */}
      </div>

      {/* {menu == "Contact" ? (
          <div className="h-[100vh] w-1/4 flex flex-col justify-end">
            <header className=" lg:mb-[5vh] mb-[5vh] border-l-[2.8px] border-l-white lg:ml-[5vw] ml-[5vw]  h-fit     flex flex-col absolute">
              <div className="flex space-y-3 flex-col  lg:-ml-[1vw] ml-[2vw] z-50 h-full justify-end">
                <div>
                  <HeaderItem
                    title="Home"
                    onclick={() => {
                      setMenu("Home");
                    }}
                  />
                </div>

                <div className=" mx-1">
                  <HeaderItem
                    title="About"
                    onclick={() => {
                      setMenu("About");
                    }}
                  />
                </div>
                <div className=" -mx-0.5">
                  <HeaderItem
                    title="Work"
                    onclick={() => {
                      setMenu("Work");
                    }}
                  />
                </div>
                <div className=" mx-4">
                  <HeaderItem active={true} title="Contact" />
                </div>
              </div>
            </header>
            <h1>C'est le Contact</h1>
          </div>
        ) : null} 
      </div> */}
    </div>
  );
}
