
import InstalledAppsCard from "../../components/Apps/InstalledAppsCard";
import { useLoaderData } from "react-router";
import { InstalledAppsContext } from "../../components/Context/Context";


const Install = () => {

  const apps = useLoaderData();
  

  return (
    <div className="bg-[#F5F5F5]  py-[40px]  sm:py-[80px] flex flex-col max-sm:px-[20px]">
      <div className="font-bold text-[48px] text-[#001931] text-center  pb-[16px]">
        Your Installed Apps
      </div>
      <div className="text-center text-wrap text-[20px] text-[#627382] pb-[40px] ">
        Explore All Trending Apps on the Market developed by us
      </div>
      <div className="flex flex-col gap-[16px] px-[20px] md:px-[100px] lg:px-[150px]">
        {apps.map((app, index) => (
        <InstalledAppsCard key={index} app={app}></InstalledAppsCard>
      ))}
      </div>
    </div>
  );
};

export default Install;
