import React, { Suspense } from "react";
import Banner from "../../components/Banner/Banner";
import BannerStatus from "../../components/Banner/BannerStatus";
import Apps from "../../components/Banner/BannerApps";

const Home = () => {
  return (
    <div className="bg-[#F5F5F5] py-[40px] sm:py-[80px] flex flex-col gap-[40px] items-center max-sm:px-[20px]">
      <Banner></Banner>
      <BannerStatus></BannerStatus>
      <Apps></Apps>
    </div>
  );
};

export default Home;
