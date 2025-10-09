import React from "react";

const NoAppFound = () => {
  return (
    <div className="  font-bold text-[40px] text-[#001931] text-center  pb-[16px]  ">
      <div>
        <div>No Apps Found!!!</div>
        <div className="text-[20px] font-normal text-[#627382]">
          Try Different Keywords.
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[16px] ">
        <div
      className="text-[#001931] p-[16px] bg-[#F5F5F5] rounded-[16px] flex flex-col gap-[16px] items-start max-sm:mx-[30px]"
    >
      <div>
        <img
          className="w-[260px] sm:w-[300px] sm:h-[0px] border-none"
          src=''
          alt=""
        />
      </div>
      <div className="text-[#F5F5F5]">title</div>
      <div className="flex justify-between w-full items-center text-[16px]">
        <div className="text-[#F5F5F5] bg-[#F5F5F5] px-[10px] py-[7.5px] rounded-[5px] font-medium">
           ownloads
        </div>
        <div className="text-[#F5F5F5] bg-[#F5F5F5] px-[10px] py-[7.5px] rounded-[5px] font-medium">
           ratingAvg
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default NoAppFound;
