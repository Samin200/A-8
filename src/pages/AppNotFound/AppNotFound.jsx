import React from "react";
import { NavLink } from "react-router";

const AppNotFound = () => {
  return (
    <div className=" py-[40px]  sm:py-[80px] bg-[#F5F5F5] flex flex-col items-center max-sm:px-[20px]">
        <div><img src="/assets/App-Error.png" alt="" /></div>
      <div className="font-bold text-[48px] text-[#001931] text-center  pb-[16px] text-wrap ">
        Oops, page not found!
      </div>
      <div className="text-center text-wrap text-[20px] text-[#627382] ">
        The page you are looking for is not available.
      </div>
      <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] w-fit mx-auto px-[39px] py-[14.5px] rounded-[6px] mt-[20px]">
        <NavLink to={'/'} >Go Back!</NavLink>
      </div>
    </div>
  );
};

export default AppNotFound;
