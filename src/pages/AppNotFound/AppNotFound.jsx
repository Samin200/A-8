import React from "react";
import { NavLink } from "react-router";
import appError from "../../../src/assets/App-Error.png";

const AppNotFound = () => {
  return (
    <div className=" py-[40px]  sm:py-[80px] bg-[#F5F5F5] flex flex-col items-center max-sm:px-[20px]">
      <div>
        <img src={appError} alt="" />
      </div>
      <div className="font-bold text-[48px] text-[#001931] text-center  pb-[16px] text-wrap ">
        OPPS!! APP NOT FOUND
      </div>
      <div className="text-center text-wrap text-[20px] text-[#627382] ">
        The App you are requesting is not found on our system.  please try another apps
      </div>
      <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] w-fit mx-auto px-[39px] py-[14.5px] rounded-[6px] mt-[20px]">
        <NavLink to={"/"}>Go Back!</NavLink>
      </div>
    </div>
  );
};

export default AppNotFound;
