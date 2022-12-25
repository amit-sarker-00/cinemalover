import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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
    <div className="md:px-20 sm:px-10 px-5 py-20 grid grid-cols-1 md:grid-cols-2 items-center justify-center">
      <div className="mx-auto text-white mb-20">
        <h4 className="text-xl text-green-500 font-extrabold ">Cinemaflx</h4>
        <h1 className="md:text-6xl sm:text-4xl text-2xl font-extrabold my-5">
          Cinema, <span className="text-green-500">Movie</span>
          <br /> TV Shows, & More.
        </h1>
        <div>
          <ul className="flex items-center font-bold gap-5  flex-wrap">
            <li>
              <p className="px-1 rounded-sm bg-green-500 text-white">SD</p>
            </li>
            <li>
              <p className="px-1 rounded-sm border hover:bg-green-500">HD</p>
            </li>
            <li>
              <p>Action, Comedy</p>
            </li>
            <li>2022</li>
            <li> 118 min</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto">
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
                  className="h-96 sm:w-96 w-full align-top rounded-md"
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
