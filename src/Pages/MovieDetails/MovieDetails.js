import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiStar } from "react-icons/fi";

const MovieDetails = () => {
  const [details, setDetails] = useState("");
  const { describe, duration, image, likes, name, releasedDate } = details;
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/movie/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);
  return (
    <div className="md:my-20 sm:my-12 my-5 max-w-lg mx-3 sm:mx-auto p-4 shadow dark:bg-gray-900 dark:text-gray-100 border ">
      <div className=" mx-3">
        <div className="space-y-2">
          <img
            src={image}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="flex items-center text-xs gap-5 flex-wrap">
            <p>{releasedDate}</p>
            <p>{likes} Likes</p>
            <p>{duration}</p>
            <p className="flex items-center justify-center">
              rating: 8.9{" "}
              <span>
                <FiStar></FiStar>
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-green-500">{name}</h3>

          <p className="leading-snug text-white">{describe}</p>
        </div>
        <div className="flex items-center justify-center gap-3 mt-3">
          <Link>
            <button className="py-1 px-2 bg-green-400 text-black font-bold rounded-sm">
              Watch Now
            </button>
          </Link>
          <Link>
            <button className="p-1 px-2 bg-green-400 text-black font-bold rounded-sm">
              Download
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
