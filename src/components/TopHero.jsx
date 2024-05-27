import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Hero.css";

const TopHero = ({ institutes }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 1000,
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
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const handleMouseEnter = () => {
    sliderRef.current.slickPlay();
  };

  const handleMouseLeave = () => {
    sliderRef.current.slickPause();
  };

  return (
    <div className="w-full h-[450px] bg-sky-300 p-8">
      <div className="w-[99%] m-auto mt-6">
        <h1 className="w-[220px] text-white font-sans text-3xl font-medium mx-2 overflow-hidden transition-all duration-1000 transform translate-x-0 lg:hover:translate-x-16 first-letter-color">
          Explore Our Top Academies
        </h1>

        <div className="mt-4">
          <Slider ref={sliderRef} {...settings}>
            {institutes?.map((d) => (
              <div
                key={d.id}
                className="bg-white h-[33%] text-black rounded-xl group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="h-[100%] flex justify-center items-center rounded-t-xl overflow-hidden transform transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={d.image}
                    alt="Academies"
                    className="w-[100%] h-56 rounded-xl object-cover"
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

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
};

export default TopHero;
