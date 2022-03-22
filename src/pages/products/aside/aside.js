import { useState } from "react";
import { Nav } from "./nav/nav.js";

function Aside() {
  const [hamburgerIcon, setHamburgerIcon] = useState("expand_more");
  const [toggleBeautfiyAside, setToggleBeautifyAside] = useState("");
  const [toggleShowAsideNavbar, setToggleShowAsideNavbar] = useState("");

  function hamburgerMenuClickHandler() {
    setHamburgerIcon((prevIcon) =>
      prevIcon === "expand_more" ? "expand_less" : "expand_more"
    );
    setToggleBeautifyAside((prev) => (prev === "" ? "beautify-aside" : ""));
    setToggleShowAsideNavbar((prev) => (prev === "" ? "show" : ""));
  }

  return (
    <aside className={`aside ${toggleBeautfiyAside}`} id="aside">
      <Nav show={toggleShowAsideNavbar} />
      <button
        className="aside-hamburger"
        id="aside-hamburger"
        onClick={() => hamburgerMenuClickHandler()}
      >
        <span className="material-icons">{hamburgerIcon}</span>
      </button>
    </aside>
  );
}

export { Aside };
