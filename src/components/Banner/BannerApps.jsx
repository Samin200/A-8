import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../Apps/App";

const Apps = () => {
  const apps = useLoaderData();
  const firstEightApps = apps.slice(0, 8);
  return (
    <div>
    <div className="font-bold text-[48px] text-[#001931] text-center mt-[80px] mb-[16px]">Trending Apps</div>
    <div className="text-center text-wrap text-[20px] text-[#627382] mb-[40px] ">Explore All Trending Apps on the Market developed by us</div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[16px] mx-auto">
        {firstEightApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
      <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] w-fit mx-auto px-[39px] py-[14.5px] rounded-[6px] mt-[40px]">Show All</div>
    </div>
  );
};

export default Apps;
