import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className=" flex justify-between text-[16px] items-center px-[80px] bg-white text-black py-[17.5px]">
      <div className="flex items-center gap-1">
        <div>
          <img className=" w-[40px]" src="/assets/logo.png" alt="" />
        </div>
        <div className=" text-[16px] text-transparent bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text  font-bold">HERO.IO</div>
      </div>
      <div className="flex items-center gap-8 font-medium">
        <div className="hover-effect">Home</div>
        <div className="hover-effect">Apps</div>
        <div className="hover-effect">Installation</div>
      </div>
      <button className="flex items-center gap-2.5 py-[11.5px] px-[15.5px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white rounded-[8px] cursor-pointer font-semibold">
        <div className=" text-[20px]">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </div>
        <div>Contribute</div>
      </button>
    </div>
  );
};

export default Navbar;
