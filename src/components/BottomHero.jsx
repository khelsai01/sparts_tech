import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CgProfile } from "react-icons/cg";

const BottomHero = ({ students }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full h-88 bg-gray-200 p-10">
      <div className="w-[99%] m-auto">
        <div className="flex justify-end text-end">
          <h1 className="w-[290px] text-yellow-500 font-sans text-4xl font-medium">
            Happy Kids, Satisfied Parents!
          </h1>
        </div>
        <div className="mt-4">
          <Slider {...settings}>
            {students?.map((d) => (
              <div
                key={d.id}
                className="bg-white h-[33%] text-black rounded-xl"
              >
                <div className="relative h-[100%] items-center rounded-t-xl">
                  <img
                    src={d.image}
                    alt="Happy Kids"
                    className="w-[100%] h-48 rounded-xl object-cover"
                  />
                  <div className="absolute bottom-2 right-2 z-10">
                    <CgProfile className="text-3xl bg-gray-500 rounded-3xl text-white" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BottomHero;
