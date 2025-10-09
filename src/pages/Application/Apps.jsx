import { useLoaderData } from "react-router";
import AppCard from "../../components/Apps/AppCard";

const Apps = () => {
  const apps = useLoaderData();
  return (
    <div className="bg-[#F5F5F5] py-[40px]  sm:py-[80px] max-sm:px-[20px]">
      <div className="font-bold text-[48px] text-[#001931] text-center  pb-[16px]">
        Our All Applications
      </div>
      <div className="text-center text-wrap text-[20px] text-[#627382] pb-[40px] ">
        Explore All Apps on the Market developed by us. We code for Millions
      </div>
      <div className=" flex flex-col items-center w-fit mx-auto gap-[16px]">
        <div className="flex justify-between w-full items-center">
          <div className="text-[#001931] text-center text-[10px] sm:text-[24px] font-semibold">
            {`(${apps.length})`} Apps Found
          </div>
          <label className="input bg-transparent text-[#001931] border-2 border-gray-300 rounded-[8px] flex items-center gap-2.5 px-[10px] py-[7.5px]">
            <svg
              className="h-[1em] opacity-50 text-[#001931]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search"
              className="bg-transparent text-[#001931] placeholder:text-[#001931] focus:outline-none"
            />
          </label>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[16px] ">
          {apps.map((app,index) => (
            <AppCard key={index} app={app}></AppCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
