import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { NavLink } from "react-router";
import { CurrentApp } from "../Context/Context";

const AppCard = ({ app }) => {
  const [ setCurrentApp] = useContext(CurrentApp);
  const handleUpdateState = () => {
    setCurrentApp(app);
  };
  return (
    <NavLink
      onClick={() => handleUpdateState()}
      to={`/App/${app.id}`}
      className=" text-[#001931] p-[16px] bg-white rounded-[16px] flex flex-col gap-[16px] items-start max-sm:mx-[30px]"
    >
      <div className="w-full">
        <img
          className="w-full sm:w-[300px] h-auto sm:h-[300px] object-cover rounded"
          src={app.image}
          alt={app.title}
        />
      </div>
      <div className="">{app.title}</div>
      <div className="flex justify-between w-full items-center text-[16px]">
        <div className="text-[#00D390] bg-[#F1F5E8] px-[10px] py-[7.5px] rounded-[5px] font-medium">
          <FontAwesomeIcon icon={faDownload} /> {app.downloads}
        </div>
        <div className="text-[#FF8811] bg-[#FFF0E1] px-[10px] py-[7.5px] rounded-[5px] font-medium">
          <FontAwesomeIcon icon={faStar} /> {app.ratingAvg}
        </div>
      </div>
    </NavLink>
  );
};

export default AppCard;
