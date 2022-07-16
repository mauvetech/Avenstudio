import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";

function Maison() {
  return (
    <div className="h-screen absolute top-0  flex flex-col justify-end">
      <div className="w-screen  h-screen ">
        <Image
          src="/Background.png"
          layout="fill"
          className="absolute mix-blend-soft-light saturate-200 "
          objectFit="fill"
        />
      </div>

      <div className="mt-[150vh] absolute lg:h-screen h-[50vh] w-screen">
        <Image
          src="/AVENSTUDIO_GROS_LOGO3.png"
          layout="fill"
          objectFit="cover"
          className="md:visible invisible"
        />
      </div>

      <div className="text-white text-xl md:ml-[54vw] md:mb-[22vh] mb-[50vh] ml-[20vw] absolute  md:w-1/3 h-1/5">
        <p>
          True innovation starts by listening to and addressing the individual
          needs of our clients. We are pioneers and believe that collaborating
          throughout the project results in elegant and award-winning identity
          that perform and express your corporate culture, today and in the
          future.
        </p>
      </div>
    </div>
  );
}

export default Maison;
