import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const TopHero = () => {
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
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
          <div className='w-full h-96 bg-indigo-500 p-8'>

            <div className='w-[99%] m-auto mt-6'>
                <h1 className= 'w-[220px] text-white font-sans text-3xl font-medium  mx-2'>Explore Our Top Academies</h1>
          <div className="mt-4">
                  <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className="bg-white h-[33%] text-black rounded-xl">
                <div className='h-[100%] flex justify-center items-center rounded-t-xl'>
                  <img src={d.img} alt="Acadmice" className="w-[100%] h-48 rounded-xl  object-cover"/>
                </div>
    
              
              </div>
            ))}
          </Slider>
          </div>
          
        </div>
          </div>
      );
    }
    
    const data = [
      {
        name: `Morgan School`,
        img: `https://i.pinimg.com/474x/1b/e3/8d/1be38d47bf8a2cf4a5c66403db36c53a.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      {
        name: `Kidzee School`,
        img: `https://www.commercialdesignindia.com/cloud/2021/11/26/uvVIVse0-kidzee-school-Ar-Sumit-Dhawan2-2.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      {
        name: `Prabhat Kids School`,
        img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Mf53UNX2XKXA1Pr8Y92PCKH37zFAuE0WJRwNrPq1cw&s`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      {
        name: `Rigo Louie`,
        img: `https://biblus.accasoftware.com/en/wp-content/uploads/sites/2/2018/10/Facciata_progetti-edifici-scolastici-Troplo-Kids_render_software-BIM-architettura_Edificius.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      {
        name: `Mia Williams`,
        img: `https://cdn.firstcry.com/education/2022/10/16165436/A1.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      
    ];
    
export default TopHero
