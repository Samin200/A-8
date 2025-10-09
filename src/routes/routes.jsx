
import { createBrowserRouter } from "react-router";
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
        index: true,
        path: "/Apps",
        Component: Apps,
      },
      {
        loader: () => fetch("/applicationData.json").then(res => res.json()).then(data => data),
        index: true,
        path: "/Install",
        Component: Install,
      },
      {
        loader: () => fetch("/applicationData.json").then(res => res.json()).then(data => data),
        index: true,
        path: "/App/:id",
        errorElement: <AppNotFound></AppNotFound>,
        Component: AppDetails,
      },
      {
        index: true,
        path: "/App/*",
        Component: ErrorPage,
      },
      {
        index: true,
        path: "*",
        Component: ErrorPage,
      }
    ]
  },
]);