import { useLoaderData, useNavigation } from "react-router";
import AppCard from "../../components/Apps/AppCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import NoAppFound from "../../components/NoAppFound/NoAppFound";
import Loader from "../../components/Loader/Loader";

const Apps = () => {
  const navigation = useNavigation();

  const [searchInput, setSearchInput] = useState("");
  const apps = useLoaderData() || [];
  const filteredApps = searchInput
    ? apps.filter((app) =>
        app.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : apps;
  const [messageStatus, setMessageStatus] = useState("");
  useEffect(() => {
    if (filteredApps.length === 0) {
      setMessageStatus("");
    } else {
      setMessageStatus("hidden");
    }
  }, [filteredApps]);

  return navigation.state === "loading" ? (
    <Loader />
  ) : (
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
            {`(${filteredApps.length})`} Apps Found
          </div>
          <SearchBar setSearchInput={setSearchInput}></SearchBar>
        </div>
        <div className="sm:grid lg:grid-cols-4 md:grid-cols-2 max-sm:mx-auto sm:gap-[16px] ">
          {filteredApps.map((app, index) => (
            <AppCard key={index} app={app}></AppCard>
          ))}
        </div>
        <div className={messageStatus}>
          <NoAppFound></NoAppFound>
        </div>
      </div>
    </div>
  );
};

export default Apps;
