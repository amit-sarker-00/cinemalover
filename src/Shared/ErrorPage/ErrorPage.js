import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" h-screen bg-green-300 text-center pt-44">
      <h1 className="text-red-400 md:text-8xl sm:text-3xl text-xl font-extrabold">
        404
      </h1>
      <h1 className="text-4xl font-bold text-white ">
        Looks like you lost your way
      </h1>
      <h2 className="my-10">
        <Link
          className="py-2 px-3 bg-white text-black font-bold rounded-sm"
          to="/home"
        >
          Back to Home
        </Link>
      </h2>
    </div>
  );
};

export default ErrorPage;
