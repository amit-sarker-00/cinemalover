import React from "react";
import "./PriceBanner.css";
import { Link } from "react-router-dom";

const PriceBanner = () => {
  return (
    <div className="bgimage">
      <div className="py-44 text-center">
        <h1 className=" text-2xl md:text-7xl text-white font-bold">
          Pricing Plan
        </h1>
        <div className="flex items-center justify-center text-white font-bold gap-3 my-5">
          <a
            href="#plan"
            className="border py-2 hover:bg-green-500 px-1 border-white sm:w-32"
          >
            Pricing Plan
          </a>
          <Link
            to="/home"
            className="border py-2 hover:bg-green-500 border-white px-1 sm:w-32"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PriceBanner;
