import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TopHero = ({ institutes }) => {
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
    <div className="w-full h-96 bg-sky-300 p-8">
      <div className="w-[99%] m-auto mt-6">
        <h1 className="w-[220px] text-white font-sans text-3xl font-medium  mx-2">
          Explore Our Top Academies
        </h1>
        <div className="mt-4">
          <Slider {...settings}>
            {institutes?.map((d) => (
              <div
                key={d.id}
                className="bg-white h-[33%] text-black rounded-xl"
              >
                <div className="h-[100%] flex justify-center items-center rounded-t-xl">
                  <img
                    src={d.image}
                    alt="Academies"
                    className="w-[100%] h-48 rounded-xl  object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopHero;
