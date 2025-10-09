import { toast } from "react-toastify";

import {
  CurrentApp,
  InstalledAppsContext,
} from "../../components/Context/Context";
import { useLoaderData, useParams } from "react-router";
import RatingsChart from "../../components/RatingsChart/RatingsChart";
import AppNotFound from "../AppNotFound/AppNotFound";
import { useContext, useEffect, useState } from "react";
import { getInstall } from "../../components/localStorage/localStorage";

const AppDetails = () => {
  const apps = useLoaderData();
  const [isInstalled, setIsInstalled] = useState(false);

  const { id } = useParams();
  const app = apps.find((a) => a.id === parseInt(id));
  const [installedApps, setInstalledApps] = useContext(InstalledAppsContext);

useEffect(() => {
  setIsInstalled(installedApps.some(a => a.id === app.id));
}, [installedApps, app.id]);




  if (!app) {
    return <AppNotFound />;
  }

const handleInstalledApps = () => {
  const installedIds = getInstall();

  if (installedIds.includes(app.id)) {
    toast.info(`${app.title} is already installed`);
    return;
  }

  const updatedIds = [...installedIds, app.id];
  localStorage.setItem("Installed", JSON.stringify(updatedIds));

  const allApps = JSON.parse(localStorage.getItem("AllApps"));
  const updatedApps = allApps.filter(a => updatedIds.includes(a.id));

  setInstalledApps(updatedApps);
  setIsInstalled(true);         
  toast.success(`${app.title} installed successfully`);
};



  return (
    <div className="  bg-[#F5F5F5] py-[40px] px-[80px]  sm:py-[80px] max-sm:px-[20px] text-[#001931] flex flex-col gap-[40px]">
      <div className="flex gap-[40px] max-sm:flex-col">
        <div>
          <img
            className="sm:min-w-[350px] sm:min-h-[350px] max-sm:w-[100px]"
            src={app.image}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[30px] w-full h-full">
          <div className="">
            <div className="text-[32px] font-bold">{app.title}</div>
            <div className="text-[#627382] text-[20px]">
              Developed by{" "}
              <span className="text-transparent bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text  font-semibold">
                {app.companyName}
              </span>
            </div>
          </div>
          <div className=" border-t border-gray-300"></div>
          <div className="flex sm:gap-[70px] max-sm:gap-[10px]  max-sm:justify-center flex-wrap">
            <div className="flex flex-col gap-[8px] sm:items-start items-center">
              <div>
                <img
                  className="w-[40px] h-[40px]"
                  src="/src/assets/icon-downloads.png"
                  alt=""
                />
              </div>
              <div className="text-[16px] text-[#314558]">Downloads</div>
              <div className="font-extrabold text-[40px] mt-[-14px]">
                {app.downloads}
              </div>
            </div>
            <div className="flex flex-col gap-[8px] sm:items-start items-center text-wrap">
              <div>
                <img
                  className="w-[40px] h-[40px]"
                  src="/src/assets/icon-ratings.png"
                  alt=""
                />
              </div>
              <div className="text-[16px] text-[#314558]">Average Ratings</div>
              <div className="font-extrabold text-[40px] mt-[-14px]">
                {app.ratingAvg}
              </div>
            </div>
            <div className="flex flex-col gap-[8px] sm:items-start items-center text-wrap">
              <div>
                <img
                  className="w-[40px] h-[40px]"
                  src="/src/assets/icon-review.png"
                  alt=""
                />
              </div>
              <div className="text-[16px] text-[#314558]">Total Reviews</div>
              <div className="font-extrabold text-[40px] mt-[-14px]">
                {app.reviews}
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={handleInstalledApps}
              disabled={isInstalled}
              className={`text-white text-[16px] font-semibold py-[12px] px-[16px] rounded-[5px] ${
                isInstalled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#00D390] hover:bg-[#16a678]"
              }`}
            >
              {isInstalled ? "Installed" : `Install Now ( ${app.size} MB )`}
            </button>
          </div>
        </div>
      </div>
      <div className=" border-t border-gray-300"></div>
      <div>
        <div className="font-semibold text-[24px] mb-[24px]">Rating</div>
        <RatingsChart Ratings={app.ratings}></RatingsChart>
      </div>
      <div className=" border-t border-gray-300"></div>
      <div>
        <div className="font-semibold text-[24px] mb-[24px]">Description</div>
        <div className="text-[16px] text-[#627382]">{app.description}</div>
      </div>
    </div>
  );
};

export default AppDetails;
