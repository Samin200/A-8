import InstalledAppsCard from "../../components/Apps/InstalledAppsCard";
import { InstalledAppsContext } from "../../components/Context/Context";
import { useContext, useEffect, useState } from "react";
import { getInstall } from "../../components/localStorage/localStorage";

const Install = () => {
  const [installedApps] = useContext(InstalledAppsContext);
  const [sortOrder, setSortOrder] = useState("");
  const [sortedApps, setSortedApps] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

const parseCount = (value) => {
  if (typeof value === "number") return value;
  if (value.includes("B")) return parseFloat(value) * 1_000_000_000;
  if (value.includes("M")) return parseFloat(value) * 1_000_000;
  if (value.includes("K")) return parseFloat(value) * 1_000;
  return parseFloat(value);
};


  useEffect(() => {
  setIsSorting(true);
  const installedIds = getInstall();

  let baseApps = installedApps;

  if (installedApps.length === 0 && installedIds.length > 0) {
    const allApps = JSON.parse(localStorage.getItem("AllApps"));
    if (allApps) {
      baseApps = allApps.filter(app => installedIds.includes(app.id));
    }
  }

  let sorted = [...baseApps];
  if (sortOrder === "asc") {
    sorted = sorted.slice().sort((a, b) => parseCount(a.downloads) - parseCount(b.downloads));
  } else if (sortOrder === "desc") {
    sorted = sorted.slice().sort((a, b) => parseCount(b.downloads) - parseCount(a.downloads));
  }

  setSortedApps(sorted);
  setIsSorting(false);
}, [sortOrder, installedApps]);

;

  return (
    <div className="bg-[#F5F5F5] py-[40px] sm:py-[80px] flex flex-col max-sm:px-[20px]">
      <div className="font-bold text-[48px] text-[#001931] text-center pb-[16px]">
        Your Installed Apps
      </div>
      <div className="text-center text-[20px] text-[#627382] pb-[40px]">
        Explore All Trending Apps on the Market developed by us
      </div>
      <div className="flex flex-col gap-[16px] px-[20px] md:px-[100px] lg:px-[150px]">
        <div className="flex justify-between w-full items-center">
          <div className="text-[#001931] text-[10px] sm:text-[24px] font-semibold">
            {`(${sortedApps.length})`} Apps Found
          </div>
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-[#001931]"
          >
            <option value="">Sort by Downloads</option>
            <option value="desc">High-Low</option>
            <option value="asc">Low-High</option>
          </select>
        </div>
        {isSorting ? (
          <span className="loading loading-spinner text-primary mx-auto" />
        ) : sortedApps.length === 0 ? (
          <div className="text-center text-[#627382] py-8">
            No apps installed yet.
          </div>
        ) : (
          sortedApps.map((app) => (
            <InstalledAppsCard key={app.id} app={app} />
          ))
        )}
      </div>
    </div>
  );
};

export default Install;
