import Link from "next/link";
import React, { useEffect, useState } from "react";

function HeaderItem({ Icon, title, onclick, lien, active }) {
  return (
    <div
      onClick={onclick}
      className={`flex flex-col items-center myriad
         group cursor-pointer text-[24px] myriad  text-white opacity-50 lg:w-40 md:w-24 sm:w-20 ${
           active && "opacity-100"
         } hover:text-gray-600 `}
    >
      <p className="group-hover: tracking-widest text-center">{title}</p>
    </div>
  );
}

export default HeaderItem;
