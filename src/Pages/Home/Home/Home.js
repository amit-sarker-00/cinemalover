import React from "react";
import RecentMovies from "../RecentMovies/RecentMovies";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecentMovies></RecentMovies>
    </div>
  );
};

export default Home;
