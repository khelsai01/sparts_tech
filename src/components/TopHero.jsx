import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const TopHero = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
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
                <h1 className= 'w-44 text-white font-sans text-xl font-medium  mx-2'>Explore Our Top Academies</h1>
          <div className="mt-4">
                  <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className="bg-white h-[33%] text-black rounded-xl">
                <div className='h-[100%] flex justify-center items-center rounded-t-xl'>
                  <img src='https://www.shutterstock.com/image-vector/classic-university-academy-institute-building-260nw-1830041018.jpg' alt="Acadmice" className="w-[100%] h-48 rounded-xl  object-cover"/>
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
        name: `John Morgan`,
        img: `/students/John_Morgan.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      {
        name: `Ellie Anderson`,
        img: `/students/Ellie_Anderson.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      {
        name: `Nia Adebayo`,
        img: `/students/Nia_Adebayo.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      {
        name: `Rigo Louie`,
        img: `/students/Rigo_Louie.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      {
        name: `Mia Williams`,
        img: `/students/Mia_Williams.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      
    ];
    
export default TopHero