import React, { useState } from "react";
import Navbar from "../../components/NavBar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollUp/ScrollUp";
import { CurrentApp, InstalledAppsContext } from "../../components/Context/Context";


const Root = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [currentApp, setCurrentApp] = useState([]);
  return (
    <div className="inter">
      <Navbar></Navbar>
      <ScrollToTop></ScrollToTop>
      <InstalledAppsContext.Provider value={[installedApps, setInstalledApps]}>
        <CurrentApp.Provider value={[currentApp, setCurrentApp]}>
            <Outlet></Outlet>
        </CurrentApp.Provider>
      </InstalledAppsContext.Provider>

      <Footer></Footer>
    </div>
  );
};

export default Root;
