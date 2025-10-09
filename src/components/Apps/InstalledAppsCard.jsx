import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { InstalledAppsContext } from "../../components/Context/Context";
import { getInstall } from "../../components/localStorage/localStorage";
import { toast } from "react-toastify";

const InstalledAppsCard = ({ app }) => {
  const [installedApps, setInstalledApps] = useContext(InstalledAppsContext);

  const handleUninstall = () => {
    const updatedApps = installedApps.filter(a => a.id !== app.id);
    const updatedIds = getInstall().filter(id => id !== app.id);

    localStorage.setItem("Installed", JSON.stringify(updatedIds));
    setInstalledApps(updatedApps);
    toast.info(`${app.title} uninstalled`);
  };

  return (
    <div className="text-[#001931] items-center bg-white p-[16px] flex justify-between rounded-[16px] max-sm:flex-col max-sm:gap-[16px] max-sm:justify-center">
      <div className="flex gap-y-[16px] max-sm:flex-col max-sm:gap-[8px] gap-[16px]">
        <div>
          <img className="w-[300px] sm:w-[80px] sm:h-[80px]" src={app.image} alt="" />
        </div>
        <div className="flex flex-col items-center sm:items-start justify-center">
          <div className="text-[20px] font-medium max-sm:text-center">{app.title}</div>
          <div className="flex items-center text-[16px]">
            <div className="text-[#00D390] px-[10px] py-[7.5px] rounded-[5px] font-medium">
              <FontAwesomeIcon icon={faDownload} /> {app.downloads}
            </div>
            <div className="text-[#FF8811] px-[10px] py-[7.5px] rounded-[5px] font-medium">
              <FontAwesomeIcon icon={faStar} /> {app.ratingAvg}
            </div>
            <div className="px-[10px] py-[7.5px] rounded-[5px]">{app.ratingAvg}</div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={handleUninstall}
          className="hover:bg-[#16a678] text-white text-[16px] font-semibold bg-[#00D390] py-[12px] px-[16px] rounded-[5px]"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppsCard;
