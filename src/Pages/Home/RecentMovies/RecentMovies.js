import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentMovies = () => {
  const [recentMovies, setRecentMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((res) => res.json())
      .then((data) => {
        setRecentMovies(data);
      });
  }, []);
  const status = recentMovies.filter((movies) => movies.status === "recent");
  return (
    <div className="px-3 py-10 sm:p-16">
      <div>
        <h1 className="text-xl  font-bold text-white">Recent Movies</h1>
      </div>
      <div>
        <Splide
          className="z-0"
          aria-label=""
          options={{
            speed: "1500",
            autoplay: true,
            gap: "1rem",
            rewind: true,
            perPage: 4,
            breakpoints: {
              1280: {
                perPage: 4,
              },
              1024: {
                perPage: 3,
              },
              768: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
            arrows: false,
            pagination: false,
          }}
        >
          {status?.map((movies) => (
            <SplideSlide key={movies._id}>
              <div className="max-w-xs rounded-md shadow-xl dark:bg-gray-900 dark:text-gray-100 border border-gray-400 mx-auto my-5">
                <img
                  src={movies.image}
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-56 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-md font-semibold tracking-wide">
                      {movies?.name.slice(0, 11)}...
                    </h2>
                    <p className="dark:text-gray-100 text-xs">
                      {movies?.describe.slice(0, 25)}...
                    </p>
                  </div>
                  <Link to={`/details/${movies._id}`}>
                    <button
                      type="button"
                      className="bg-green-500 hover:bg-green-400 flex items-center justify-center w-full p-2  tracking-wide rounded-md dark:bg-green-500 text-white font-bold"
                    >
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default RecentMovies;
