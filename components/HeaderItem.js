import Link from "next/link";
import React, { useEffect, useState } from "react";

function HeaderItem({ Icon, title, onclick, lien, active }) {
  return (
    <a href={lien}>
      <div
        onClick={onclick}
        className={`flex flex-col items-center myriad
         group cursor-pointer text-[24px] myriad hover:opacity-100  text-white opacity-50 z-50 lg:w-40 md:w-24 sm:w-20 ${
           active && "opacity-100"
         } `}
      >
        <h className="  tracking-widest text-center">{title}</h>
      </div>
    </a>
  );
}

export default HeaderItem;
