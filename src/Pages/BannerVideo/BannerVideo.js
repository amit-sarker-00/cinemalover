import React from "react";

const BannerVideo = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <iframe
        className="h-96 md:w-1/2 w-full px-2"
        src="https://www.youtube.com/embed/o5F8MOz_IDw"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BannerVideo;
