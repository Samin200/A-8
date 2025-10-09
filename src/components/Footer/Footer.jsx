import { faFacebook, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div
      className="bg-[#001931]
     pb-[30px] pt-[35px]"
    >
      <div className="flex justify-between items-center lg:mx-[80px] border-b border-gray-600 pb-[24px] max-sm:px-5">
        <div className="flex items-center gap-1">
          <div>
            <img className="w-[40px]" src={logo} alt="" />
          </div>
          <div className="font-bold text-[16px]">HERO.IO</div>
        </div>
        <div className="flex flex-col gap-4 lg:pr-[107px]">
          <div className="text-[20px] font-medium">Social Links</div>
          <div className="flex gap-4 items-center">
            <div className="bg-white w-[20px] h-[20px] text-black rounded-full items-center flex justify-center p-3">
              <FontAwesomeIcon icon={faXTwitter} />
            </div>

            <div className="bg-white w-[20px] h-[20px] text-black rounded-full items-center flex justify-center p-3">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>

            <div className="bg-black w-[20px] h-[20px] rounded-full items-center flex justify-center text-[25px] text-white">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-[16px] font-normal text-[#FAFAFA] pt-[30px]">
        Copyright © 2025 - All right reserved
      </div>
    </div>
  );
};

export default Footer;
