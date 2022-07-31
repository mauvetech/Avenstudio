import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";

function About() {
  return (
    <div id="about" className="absolute h-screen w-screen top-[100vh] flex flex-col justify-end ">
      <div className="w-screen absolute h-screen -top-[1vh]">
        <Image
          src="/Background.png"
          layout="fill"
          className="absolute mix-blend-soft-light saturate-200  "
          objectFit="fill"
        />
      </div>

      <div
        className="
                absolute h-[100vh] w-[100vw] sm:mb-[5vh] mb-[15vh]  bg-transparent "
      >
        <Image src="/LOGO.png" layout="fill" objectFit="cover" />
      </div>
      <div className="text-white text-xl  ml-[17vw] sm:mb-[30vh] mb-[40vh]  absolute 2xl:w-1/2  2xl:ml-[25.5vw]  w-2/3 h-1/5">
        <p className=" md:text-center ">
          When you partner with AVS, you’re partnering with our people. We are a
          talented mix of strategic visionaries, tech geeks, artistics
          directors, and designers who love marketing and live life to the
          fullest. If this sounds like you, we should chat !
        </p>
      </div>
    </div>
  );
}

export default About;
