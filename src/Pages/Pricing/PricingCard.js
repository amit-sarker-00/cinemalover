import React from "react";

const PricingCard = () => {
  return (
    <div
      id="plan"
      className="md:my-20 my-10 md:mx-28 sm:mx-10 mx-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      <div
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="border-4 hover:shadow-lg hover:border-green-500 px-3 bg-white text-black font-bold rounded-md "
      >
        <h1 className="font-bold text-green text-center my-4">PREMIUM</h1>
        <div className="bg-green-500 py-5 my-5 w-24 text-white text-center mx-auto rounded-md">
          <p className="font-bold text-2xl">$5.50</p>
          <p className="font-bold">Monthly</p>
        </div>
        <ul>
          <li className="flex items-center justify-between">
            <p>Video quality</p>
            <p>Good</p>
          </li>
          <hr className="w-full my-3" />
          <li className="flex items-center justify-between">
            <p>Resolution</p>
            <p>720p</p>
          </li>
          <hr className="w-full my-3" />
          <li className="flex items-center justify-between">
            <p>Screens you can watch</p>
            <p>03</p>
          </li>
          <hr className="w-full my-3" />
          <li>
            <p>Cancel anytime</p>
          </li>
          <hr className="w-full my-3" />
        </ul>
        <div className="text-center">
          <button className="py-2 px-3 rounded-md bg-green-500 text-white my-3 ">
            Buy Now
          </button>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="border-4 shadow-2xl border-green-500 px-3 bg-white text-black font-bold rounded-md "
      >
        <h1 className="font-bold text-green text-center my-4">STANDARD</h1>
        <div className="bg-green-500 py-5 my-5 w-24 text-white text-center mx-auto rounded-md">
          <p className="font-bold text-2xl">$9.50</p>
          <p className="font-bold">Monthly</p>
        </div>
        <ul>
          <li className="flex items-center justify-between">
            <p>Video quality</p>
            <p>Better</p>
          </li>
          <hr className="w-full my-3" />
          <li className="flex items-center justify-between">
            <p>Resolution</p>
            <p>1080p</p>
          </li>
          <hr className="w-full my-3" />
          <li className="flex items-center justify-between">
            <p>Screens you can watch</p>
            <p>06</p>
          </li>
          <hr className="w-full my-3" />
          <li>
            <p>Cancel anytime</p>
          </li>
          <hr className="w-full my-3" />
        </ul>
        <div className="text-center">
          <button className="py-2 px-3 rounded-md bg-green-500 text-white my-3 ">
            Buy Now
          </button>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="border-4 hover:shadow-lg hover:border-green-500 px-3 bg-white text-black font-bold rounded-md "
      >
        <h1 className="font-bold text-green text-center my-4">PREMIUM PLUS</h1>
        <div className="bg-green-500 py-5 my-5 w-24 text-white text-center mx-auto rounded-md">
          <p className="font-bold text-2xl">$15.50</p>
          <p className="font-bold">Monthly</p>
        </div>
        <ul>
          <li className="flex items-center justify-between">
            <p>Video quality</p>
            <p>Excellent</p>
          </li>
          <hr className="w-full my-3" />
          <li className="flex items-center justify-between">
            <p>Resolution</p>
            <p>4K</p>
          </li>
          <hr className="w-full my-3" />
          <li className="flex items-center justify-between">
            <p>Screens you can watch</p>
            <p>08</p>
          </li>
          <hr className="w-full my-3" />
          <li>
            <p>Cancel anytime</p>
          </li>
          <hr className="w-full my-3" />
        </ul>
        <div className="text-center">
          <button className="py-2 px-3 rounded-md bg-green-500 text-white my-3 ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
