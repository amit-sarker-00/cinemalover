import React from "react";

const FreeTrail = () => {
  return (
    <div className="w-full dark:bg-white shadow-lg border-2 border-green-400">
      <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
        <h1 className="text-5xl antialiased font-semibold leading-none text-center text-green-500">
          FREE TRAIL FOR 7 DAYS!
        </h1>
        <p className="pt-2 pb-8 text-xl antialiased text-center text-green-500">
          Find out about events and other news
        </p>
        <div
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="2000"
          className="flex flex-row"
        >
          <input
            type="text"
            placeholder="example@email.com"
            className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
          />
          <button
            type="button"
            className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-green-500 text-white hover:bg-green-400"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeTrail;
