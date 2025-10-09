import React from 'react';

const Banner = () => {
    return (
        <>
           <div className="flex flex-col gap-[40px] sm:gap-[16px]">
        <div className=" text-center font-black lg:text-[72px] text-[#192F45] text-5xl">
          We Build <br />
          <span className="text-transparent bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text">
            Productive
          </span>{" "}
          Apps
        </div>
        <div className=" text-center text-[#627382] text-wrap px-9">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br className="max-sm:hidden" />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </div>
      </div>
      <div className="text-black flex gap-[16px]">
        <a href='https://play.google.com/store/games?hl=en' 
          className="flex gap-[4px] sm:gap-[10px] px-[10px] sm:px-[24px] py-1 sm:py-[12px]
        border-1 border-[#D2D2D2] rounded-[10px] items-center"
        >
          <div >
            <img
              className="sm:w-[26.95px] sm:h-[30.8px] w-[18px]"
              src="https://www.freepnglogos.com/uploads/play-store-logo-png/play-store-five-educational-android-apps-for-chromebooks-5.png"
              alt=""
            />
          </div>
          <div className="text-[14px] sm:text-[20px] font-semibold max-sm:text-center">Google Play</div>
        </a>
        <a href='https://www.apple.com/app-store/' className="flex gap-[4px] sm:gap-[10px] px-[10px] sm:px-[24px] py-1 sm:py-[12px] border-1 border-[#D2D2D2] rounded-[10px] items-center">
          <div>
            <img
              className="sm:w-[32px] sm:h-[32px] w-[21px]"
              src="https://e7.pngegg.com/pngimages/566/36/png-clipart-app-store-iphone-apple-app-store-icon-blue-text.png"
              alt=""
            />
          </div>
          <div className="text-[14px] sm:text-[20px] font-semibold max-sm:text-center">App Store</div>
        </a>
      </div> 
        </>
    );
};

export default Banner;