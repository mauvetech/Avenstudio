import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Pdfviewer from "../components/Droppin";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import React, { useEffect, useState } from "react";
import HeaderItem from "../components/HeaderItem";
import { MenuIcon } from "@heroicons/react/outline";

export default function Home() {
  const [menu, setMenu] = useState("Home");
  const [scale, setScale] = useState(1);
  const [doc, setDoc] = useState("/Droppin.pdf");
  return (
    <div className="flex w-screen h-screen absolute">
      <div className="h-fit w-fit absolute ml-[92vw] mt-8">
        <MenuIcon className="h-10 w-10   text-white" />
      </div>

      <Image
        src="/Background.png"
        layout="fill"
        className="absolute mix-blend-soft-light saturate-200"
        objectFit="cover"
      />
      <Image
        src="/blend.jpeg"
        layout="fill"
        className="absolute mix-blend-soft-light opacity-20"
        objectFit="cover"
      />

      {/*<img src="/vercel.svg" height={500} width={500} />*/}
      <div className="absolute -left-[36vw] -top-[22vh] w-full h-3/5   ">
        <Image src="/LOGO.png" layout="fill" objectFit="contain" />
      </div>

      {menu == "Home" ? (
        <div className="h-[100vh]  w-1/4 flex flex-col justify-end">
          <header className=" mb-11 border-l-4 border-l-white ml-28 h-44 w-[15vw]   flex flex-col absolute">
            <div className="flex space-y-3 flex-col   z-50 h-full justify-end">
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
          />
          <div className="text-white text-xl ml-[54vw] mb-[22vh]  absolute  w-1/3 h-1/5">
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

      <div>
        {menu == "Work" ? (
          <div className="h-[100vh]  w-1/4 flex flex-col justify-end">
            <header className=" mb-11 border-l-4 border-l-white ml-28 h-44 w-[15vw]   flex flex-col absolute">
              <div className="flex space-y-3 flex-col  z-50 h-full justify-end  ">
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
                    active={true}
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
                    className="ml-[100vw] b helv font-extrabold text-white text-6xl opacity-50 hover:opacity-100 transition ease-in-out delay-150  hover:scale-150 hover:translate-x-[84px] hover:cursor-pointer"
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
          </div>
        ) : null}
        {menu == "About" ? (
          <div className="h-[100vh]  w-1/4 flex flex-col justify-end">
            <header className=" mb-11 border-l-4 border-l-white ml-28 h-44 w-[15vw]   flex flex-col absolute">
              <div className="flex space-y-3 flex-col z-50 h-full justify-end  ">
                <div>
                  <HeaderItem
                    title="Home"
                    onclick={() => {
                      setMenu("Home");
                    }}
                  />
                </div>

                <div className=" mx-1">
                  <HeaderItem title="About" active={true} />
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
            <div
              className="
                absolute h-[100vh] w-[100vw] mb-12 bg-transparent "
            >
              <Image src="/LOGO.png" layout="fill" objectFit="cover" />
            </div>
            <div className="text-white text-xl  ml-[17vw] mb-[30vh]  absolute 2xl:w-1/4  2xl:ml-[38vw]  w-2/3 h-1/5">
              <p className=" text-center">
                Our Amazing People When you partner with AVS, you’re partnering
                with our people. We are a talented mix of strategic visionaries,
                tech geeks, artistics directors, and designers who love
                marketing and live life to the fullest. If this sounds like you,
                we should chat !
              </p>
            </div>
          </div>
        ) : null}
        {menu == "Contact" ? (
          <div className="h-[100vh]  w-1/4 flex flex-col justify-end">
            <header className=" mb-11 border-l-4 border-l-white ml-28 h-44 w-[15vw]   flex flex-col absolute">
              <div className="flex space-y-3 flex-col  z-50 h-full justify-end  ">
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
      </div>
    </div>
  );
}
