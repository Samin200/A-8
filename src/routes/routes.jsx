
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Apps from "../pages/Application/Apps";
import Install from "../pages/Install/Install";
import AppDetails from "../pages/AppDetails/AppDetails";
import AppNotFound from "../pages/AppNotFound/AppNotFound";




export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        loader: () => fetch("/applicationData.json").then(res => res.json()).then(data => data),
        index: true,
        path: "/",
        Component: Home,
      },
      {
        loader: () => fetch("/applicationData.json").then(res => res.json()).then(data => data),
        path: "/Apps",
        Component: Apps,
      },
      {
        loader: () => fetch("/applicationData.json").then(res => res.json()).then(data => data),
        path: "/Install",
        Component: Install,
      },
      {
        loader: () => fetch("/applicationData.json").then(res => res.json()).then(data => data),
        path: "/App/:id",
        errorElement: <AppNotFound></AppNotFound>,
        Component: AppDetails,
      },
      {
        path: "/App/*",
        Component: ErrorPage,
      },
      {
        path: "*",
        Component: ErrorPage,
      }
    ]
  },
]);