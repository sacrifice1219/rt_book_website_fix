import React from "react";
import "./Header.css";


// import swiper components
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/pagination";
 
 // Header Books  Data.......................
 import HBook1 from '../../assets/HeaderBooks/headerBook1.png'
 import HBook2 from '../../assets/HeaderBooks/headerBook2.png'
 import HBook3 from '../../assets/HeaderBooks/headerBook3.png'

// import arrow
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import headerShape from '../../assets/header-shape.svg';

const Header = () => {
  const headerBooks =[
    {
        id: 1,
        img: HBook1,
        title:'Life of the wild',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat <br> amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna <br> velit eleifend. Amet, quis urna, a eu.',
        btnLink: '*'
    },
    {
        id: 2,
        img: HBook2,
        title:'Simple way of piece life',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat <br> amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna <br> velit eleifend. Amet, quis urna, a eu.',
        btnLink: '*'
    },
    {
        id: 3,
        img: HBook3,
        title:'Great travel at desert',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat <br> amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna <br> velit eleifend. Amet, quis urna, a eu.',
        btnLink: '*'
    },
];

  return (
    <header>
      <div className=" header-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          modules={[Navigation, Pagination]}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            prevEl: ".button-prev-slide",
            nextEl: ".button-next-slide",
          }}
        >
          {headerBooks.map(({ title, info, img, btnLink }, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="header-wrapper">
                  {/* header left */}
                  <div className="header-left">
                    <h1>{title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: info }}></p>
                    <Link className="btn btn-border" to={btnLink}>
                      Learn More
                    </Link>
                  </div>

                  <div className="header-right">
                    <img src={img} alt="header books" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="slider-button">
            <div className="button-prev-slide slidebutton">
              <GoArrowLeft />
            </div>
            <div className="button-next-slide slidebutton">
              <GoArrowRight />
            </div>
          </div>

          {/* header pagination */}
          <div className="container">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>

        {/* Header shape */}
        <div className="header-shape">
          <img src={headerShape} alt="" className="header-s" />
        </div>
      </div>
    </header>
  );
};

export default Header;
