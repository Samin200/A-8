import React from 'react';

const BannerStatus = () => {
    return (
      <>
        <div className="w-screen flex flex-col items-center">
          <div>
            <img className="w-fit" src="/src/assets/hero.png" alt="" />
          </div>
          <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] w-screen flex justify-center flex-col items-center gap-[40px] lg:py-[80px] py-[30px] text-white">
            <div className="lg:text-[48px] text-[32px] font-bold text-center text-wrap">
              Trusted by Millions, Built for You
            </div>
            <div className=" flex gap-[24px] justify-center flex-wrap">
              <div className="text-[16px] font-normal flex flex-col justify-center items-center px-[70px]">
                <div>Total Downloads</div>
                <div className="text-[36px] lg:text-[64px] font-extrabold">
                  29.6M
                </div>
                <div>21% more than last month</div>
              </div>
              <div className="text-[16px] font-normal flex flex-col justify-center items-center px-[70px]">
                <div>Total Reviews</div>
                <div className="text-[36px] lg:text-[64px] font-extrabold">
                  906K
                </div>
                <div>46% more than last month</div>
              </div>
              <div className="text-[16px] font-normal flex flex-col justify-center items-center px-[70px]">
                <div>Active Apps</div>
                <div className="text-[36px] lg:text-[64px] font-extrabold">
                  132+
                </div>
                <div>31 more will Launch</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default BannerStatus;