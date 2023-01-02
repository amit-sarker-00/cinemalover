import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
const Banner = () => {
  const bannerImg = [
    {
      id: 1,
      image: "https://i.ibb.co/VL4GY4w/Wizarding-world.jpg",
    },
    {
      id: 2,
      image: "https://i.ibb.co/pvQ8x7G/Red-notice.jpg",
    },
    {
      id: 3,
      image: "https://i.ibb.co/cyqNzFy/Fistfull-of-vengeance.jpg",
    },
  ];
  return (
    <div className="md:px-20 sm:px-10 px-5 py-8 sm:py-20 grid grid-cols-1 md:grid-cols-2 items-center justify-center">
      <div
        className=" text-white mb-20 sm:py-10   bg-gray-900"
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="2000"
      >
        <h4 className="text-xl text-green-500 font-extrabold ">Cinemaflx</h4>
        <h1 className="md:text-6xl text-4xl font-extrabold my-5">
          Cinema, <span className="text-green-500">Movie</span>
          <br /> TV Shows, & More.
        </h1>
        <div>
          <ul className="flex items-center font-bold gap-5  flex-wrap ">
            <li>
              <p className="px-1 rounded-sm bg-green-500 text-white">SD</p>
            </li>
            <li>
              <p className="px-1 rounded-sm border hover:bg-green-500">HD</p>
            </li>
            <li>
              <p>Action, Comedy</p>
            </li>
            <li className="flex items-center gap-1">
              <p>
                <BsFillCalendarDateFill className="w-4 h-4 text-green-500"></BsFillCalendarDateFill>{" "}
              </p>
              <p>2022</p>
            </li>
            <li className="flex items-center gap-1">
              <p>
                <BiTimeFive className="w-4 h-4 text-green-500"></BiTimeFive>
              </p>
              <p>128 min</p>
            </li>
          </ul>
        </div>
        <div className="my-10 rounded-md ">
          <div>
            <p className="flex items-center w-44 justify-center  border-2 border-green-500 hover:bg-green-500 hover:text-white font-bold gap-1 py-2 px-3 ">
              <FaPlay className="w-4 h-4"></FaPlay>

              <button className="">
                <Link to="/bannervideo">WATCH NOW</Link>
              </button>
            </p>
          </div>
        </div>
      </div>
      <div
        className="mb-5"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="2000"
      >
        <Splide
          aria-label=""
          options={{
            autoplay: true,
            height: "80vh",

            breakpoints: {
              1280: {
                height: "60vh",
              },
              1024: {
                height: "40vh",
              },
            },
            rewind: true,
            arrows: false,
            pagination: false,
            speed: "2000",
          }}
        >
          {bannerImg?.map((banner) => (
            <SplideSlide key={banner.id}>
              <div>
                <img
                  className="h-96 border-2 border-green-500 sm:w-96 w-full mx-auto rounded-md"
                  src={banner.image}
                  alt=""
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Banner;
