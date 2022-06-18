import Image from "next/image";
import HeaderItem from "../components/HeaderItem";

function Header({
  homeActive = false,
  workActive = false,
  aboutActive = false,
  contactActive = false,
}) {
  return (
    <header className="h-[100vh] bg-slate-400  flex flex-col absolute">
      <div className="flex space-y-6 flex-col ml-16 mb-16 z-50 h-full justify-end  ">
        <div>
          <HeaderItem title="Home" lien="/" active={homeActive} />
        </div>

        <div className="mx-12">
          <HeaderItem title="About" lien="/" active={aboutActive} />
        </div>
        <div>
          <HeaderItem title="Work" lien="/Work" active={workActive} />
        </div>
        <div className="mx-5">
          <HeaderItem
            title="C O N T A C T"
            lien="/Contact"
            active={contactActive}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
