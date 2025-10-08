
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        loader: () => fetch("/public/applicationData.json").then(res => res.json()).then(data => data),
        index: true,
        path: "/",
        Component: Home,
      },
      {
        loader: () => fetch("/public/applicationData.json").then(res => res.json()).then(data => data),
        index: true,
        path: "/Apps",
        Component: Home,
      }
    ]
  },
]);