import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { CgProfile } from "react-icons/cg";


const BottomHero = () => {
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
          <div className='w-full h-88 bg-gray-200 p-10'>

            <div className='w-[99%] m-auto'>
                <div className='flex justify-end text-end'>
                <h1 className= 'w-[290px] text-yellow-500 font-sans text-4xl font-medium'>Happy Kids, Satisfied Parents!</h1>
                </div>
          <div className="mt-4">
                  <Slider {...settings}>
                  {data.map((d) => (
  <div key={d.name} className="bg-white h-[33%] text-black rounded-xl">
    <div className='relative h-[100%] items-center rounded-t-xl'>
      <img src={d.img} alt="Happy Kids" className="w-[100%] h-48 rounded-xl object-cover" />
      <div className='absolute bottom-2 right-2 z-10'>
        <CgProfile className='text-3xl bg-gray-500 rounded-3xl text-white' />
      </div>
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
        img: `https://www.visualsstock.com/details_watermark.php?filename=51674`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      {
        name: `Ellie Anderson`,
        img: `https://thumbs.dreamstime.com/b/happy-school-kids-studying-together-group-96291141.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      {
        name: `Nia Adebayo`,
        img: `https://www.greatschools.org/gk/wp-content/uploads/2014/08/Preschool-social-studies-resized-750x325.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      {
        name: `Rigo Louie`,
        img: `https://epe.brightspotcdn.com/dims4/default/d9ca346/2147483647/strip/true/crop/5895x4000+0+0/resize/840x570!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.us-east-1.amazonaws.com%2F80%2Fba%2Fbfde3f2b4212a3aff9f259ecd157%2F0124-preschool-q-a-1471858525.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      {
        name: `Mia Williams`,
        img: `https://www.shutterstock.com/image-photo/group-multi-ethnic-kids-sitting-260nw-2073059288.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      
    ];
    
export default BottomHero;
