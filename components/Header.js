import Image from "next/image";
import HeaderItem from "../components/HeaderItem";

function Header({ homeActive, workActive, aboutActive, contactActive }) {
  return (
    <div className="sticky  h-fit w-fit justify-end flex flex-col   -mb-[28vh] top-[60vh] z-50 ">
      <header className=" lg:mb-[5vh] mb-[5vh] border-l-[2.8px] border-l-white lg:ml-[5vw] ml-[5vw]  h-fit  z-50 ">
        <div className="flex space-y-3 flex-col  lg:-ml-[1vw] ml-[2vw] z-50 h-full justify-end">
          <div>
            <HeaderItem title="Home" active={homeActive} />
          </div>

          <div className=" mx-1">
            <HeaderItem title="About" active={aboutActive} />
          </div>
          <div className=" -mx-0.5">
            <HeaderItem title="Work" active={workActive} />
          </div>
          <div className=" mx-4">
            <HeaderItem title="Contact" active={contactActive} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
