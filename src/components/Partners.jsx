import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo1 from '@/assets/logo1.png';
import logo2 from '@/assets/logo2.png';
import logo3 from '@/assets/logo3.png';
import logo4 from '@/assets/logo4.png';
import logo5 from '@/assets/logo5.png';
import logo6 from '@/assets/logo6.png';
import logo7 from '@/assets/logo7.png';
import logo8 from '@/assets/logo8.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const LogoCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full py-12 bg-gray-50">
     <div className='w-full max-w-[1440px]' style={{maxWidth:"1400px", margin:"0px auto"}}>
         <div className="relative w-full max-w-screen-xl mx-auto px-16">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="px-2">
              <div className="border border-gray-200 rounded-lg shadow-sm p-4 bg-white flex justify-center items-center h-36">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-28 h-20 object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <style jsx>{`
        .slick-prev,
        .slick-next {
          width: 40px;
          height: 40px;
          z-index: 1000; /* Increased z-index to ensure visibility */
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5); /* Semi-transparent background for visibility */
          border-radius: 50%;
          display: flex !important; /* Force display */
          align-items: center;
          justify-content: center;
        }
        .slick-prev {
          left: 0; /* Positioned at the edge of the container */
        }
        .slick-next {
          right: 0; /* Positioned at the edge of the container */
        }
        .slick-prev:before,
        .slick-next:before {
          font-size: 35px; /* Slightly smaller for better fit */
          color: #ffffff; /* White icons for contrast */
          font-family: 'slick' !important; /* Ensure slick font is used */
          line-height: 1;
          margin-top:-10px;
        }
        .slick-prev:hover,
        .slick-next:hover {
          background: rgba(0, 0, 0, 0.8); /* Darker on hover */
        }
        .slick-prev:before {
          content: '\\2039'; /* Unicode for left arrow */
        }
        .slick-next:before {
          content: '\\203A'; /* Unicode for right arrow */
        }
        .slick-slider {
          position: relative;
          width: 100%;
          padding: 0 40px; /* Add padding to accommodate arrows */
        }
      `}</style>
     </div>
    </div>
  );
};

// Custom Arrow Components
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

export default LogoCarousel;