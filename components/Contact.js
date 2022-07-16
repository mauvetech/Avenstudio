import React from "react";

function Contact() {
  return (
    <div className=" h-screen w-screen top-[100vh] absolute flex">
      <div className="w-screen absolute h-screen ">
        <img
          src="/Background.png"
          layout="fill"
          className=" mix-blend-soft-light saturate-200 sticky"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Contact;
