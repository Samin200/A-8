import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollUp/ScrollUp";
import {
  CurrentApp,
  InstalledAppsContext,
} from "../../components/Context/Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [currentApp, setCurrentApp] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.localStorage) return;
    const stored = window.localStorage.getItem("Installed");
    if (!stored) return;
    try {
      const ids = JSON.parse(stored);
      if (!Array.isArray(ids) || ids.length === 0) return;
      fetch("/applicationData.json")
        .then((res) => res.json())
        .then((data) => {
          const apps = data.filter((a) => ids.includes(a.id));
          setInstalledApps(apps);
        })
        .catch(() => {});
    } catch {
      // ignore parse errors
    }
  }, []);

  return (
    <div className="inter">
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />
      <ScrollToTop />
      <InstalledAppsContext.Provider value={[installedApps, setInstalledApps]}>
        <CurrentApp.Provider value={[currentApp, setCurrentApp]}>
          <Outlet />
        </CurrentApp.Provider>
      </InstalledAppsContext.Provider>
      <Footer />
    </div>
  );
};

export default Root;
