import React from "react";

function Projet({title}) {
  return (
    <div className="w-screen md:text-left text-center ">
      <h1 className="helv -mt-[5vh] font-extrabold  text-white text-[8vh] opacity-50 z-50 hover:opacity-100 transition ease-in-out delay-150  hover:scale-150 hover:md:translate-x-[24.8vw]  hover:cursor-pointer">
        {title}
      </h1>
    </div>
  );
}

export default Projet;
