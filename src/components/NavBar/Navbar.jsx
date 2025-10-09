import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const [currentClicked, setCurrentClicked] = useState(0);
  const handleDrawer = () => {
    setDrawer(!drawer);
  };
  return (
    <div className=" flex justify-between text-[16px] items-center px-[1%] bg-white text-black py-[17.5px] relative">
      <div className="flex items-center gap-1">
        <div className="hidden max-sm:contents" onClick={() => handleDrawer()}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div>
          <img className=" w-[40px]" src="/src/assets/logo.png" alt="" />
        </div>
        <div className=" text-[16px] text-transparent bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text  font-bold">
          HERO.IO
        </div>
      </div>
      <div
        className={`flex max-sm:flex-col items-center sm:gap-8 font-medium max-sm:absolute max-sm:hidden  ${
          drawer ? "show-menu max-sm:bg-gray-300" : "max-sm:hidden"
        }`}
      >
        <NavLink
          onClick={() => setCurrentClicked(1)}
          to={"/"}
          className={`hover-effect ${
            currentClicked === 1 ? "click-effect" : ""
          }`}
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setCurrentClicked(2)}
          to={"/Apps"}
          className={`hover-effect ${
            currentClicked === 2 ? "click-effect" : ""
          } `}
        >
          Apps
        </NavLink>
        <NavLink
          onClick={() => setCurrentClicked(3)}
          to={"/Install"}
          className={`hover-effect ${
            currentClicked === 3 ? "click-effect" : ""
          } `}
        >
          Installation
        </NavLink>
      </div>
      <button className="flex items-center gap-2.5 py-[11.5px] px-[15.5px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white rounded-[8px] cursor-pointer font-semibold ">
        <div className=" text-[20px]">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </div>
        <div>Contribute</div>
      </button>
    </div>
  );
};

export default Navbar;
