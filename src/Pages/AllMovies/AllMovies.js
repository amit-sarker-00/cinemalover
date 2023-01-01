import React, { useEffect, useState } from "react";

const AllMovies = () => {
  const [allMovies, setAllMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((res) => res.json())
      .then((data) => {
        setAllMovies(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="px-3 py-10 sm:p-16">
      <div>
        <h1 className="text-xl font-bold ">Top Products</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
        {allMovies?.map((movies) => (
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            key={movies._id}
            className=" xs:w-72  rounded-md dark:bg-gray-900 dark:text-gray-100 shadow-xl border border-gray-400 -z-50"
          >
            <img
              src={movies.image}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-56 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-wide">
                  {movies?.name.slice(0, 15)}...
                </h2>
                <p className="dark:text-gray-100">
                  {movies?.describe.slice(0, 25)}...
                </p>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3  tracking-wide rounded-md bg-green-500 text-white font-bold"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
