import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import BannerVideo from "../Pages/BannerVideo/BannerVideo";
import ContactMe from "../Pages/ContactMe/ContactMe";
import AllMovies from "../Pages/AllMovies/AllMovies";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Pricing from "../Pages/Pricing/Pricing";
import Registration from "../Pages/Registration/Registration";
import Shows from "../Pages/Shows/Shows";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";

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
      { path: "/details/:id", element: <MovieDetails></MovieDetails> },
      {
        path: "/price",
        element: (
          <PrivateRoute>
            <Pricing></Pricing>
          </PrivateRoute>
        ),
      },
      {
        path: "/allmovies",
        element: (
          <PrivateRoute>
            <AllMovies></AllMovies>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <ContactMe></ContactMe>
          </PrivateRoute>
        ),
      },
      { path: "/shows", element: <Shows></Shows> },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
]);
