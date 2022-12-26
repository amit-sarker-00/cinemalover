import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import BannerVideo from "../Pages/BannerVideo/BannerVideo";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Pricing from "../Pages/Pricing/Pricing";
import Registration from "../Pages/Registration/Registration";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      { path: "/register", element: <Registration></Registration> },
      { path: "/login", element: <Login></Login> },
      { path: "/bannervideo", element: <BannerVideo></BannerVideo> },
      { path: "/price", element: <Pricing></Pricing> },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
]);
