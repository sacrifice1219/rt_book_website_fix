import React from 'react';
import './FeaturedBooks.css';

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import featured books
    // Featured Books Data.......................
    import FeaturedBooks1 from '../../assets/FeaturedBooksImages/FeaturedBook1.png'
    import FeaturedBooks2 from '../../assets/FeaturedBooksImages/FeaturedBook2.png'
    import FeaturedBooks3 from '../../assets/FeaturedBooksImages/FeaturedBook3.png'
    import FeaturedBooks4 from '../../assets/FeaturedBooksImages/FeaturedBook4.png'
    import FeaturedBooks5 from '../../assets/FeaturedBooksImages/FeaturedBook5.png';

// import tiletype props
import TitleTypeOne from '../../UI/TitleTypeOne/TitleTypeOne';
import { Link } from 'react-router-dom';

import { BsArrowReturnRight } from 'react-icons/bs';

// swiper breakpoint
const breakpoints = {
    1024: {
        slidesPerView: 4,
        spaceBetweenSlides: 30
    },
    768: {
        slidesPerView: 3,
        spaceBetweenSlides: 20
    },
    480: {
        slidesPerView: 2,
        spaceBetweenSlides: 10
    },
    0: {
        slidesPerView: 1,
        spaceBetweenSlides: 0
    }
  }
 

const FeaturedBooks = () => {

     const featuredBooksData =[
        {
            id: 1,
            img: FeaturedBooks1, 
            imgLlink: "*", 
            nameLink:"*",
            name: 'Great travel at desert',        
            writer:'Sanchit Howdy',
            price: '$ 38.00 '      
        },
        {
            id: 2,
            img: FeaturedBooks2,  
            imgLlink: "*", 
            nameLink:"*",
            name: 'Great travel at desert',
            writer:'Sanchit Howdy',
            price: '$ 38.00 ' 
    
        },
        {
            id: 3,
            img: FeaturedBooks3, 
            imgLlink: "*", 
            nameLink:"*", 
            name: 'Great travel at desert',
            writer:'Sanchit Howdy',
            price: '$ 38.00 '      
        },
        {
            id: 4,
            img: FeaturedBooks4, 
            imgLlink: "*", 
            nameLink:"*", 
            name: 'Great travel at desert',
            writer:'Sanchit Howdy',
            price: '$ 38.00 '      
        },
        {
            id: 5,
            img: FeaturedBooks5, 
            imgLlink: "*", 
            nameLink: "*", 
            name: 'Great travel at desert',
            writer:'Sanchit Howdy',
            price: '$ 38.00 '      
        },
    ];

  return (
    <section className='Featured'>
        <div className="container featurers-book-container">
            {/* title */}
            <TitleTypeOne TitleTop={'Some quality items'} Title={'featured Books'} />

            {/* featured books slider */}
            <Swiper
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          modules={[ Pagination]}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          breakpoints={breakpoints}
           
        >
            {
                featuredBooksData.map(({img, imgLlink, name, nameLink, writer, price}, index) =>{
                    return(
                        <SwiperSlide key={index}>
                            <div className="featurebook-box">
                                <Link to={imgLlink} className='featuredbook'>
                                <img src={img} alt='' />
                                </Link>
                                <div className="featurebook-info">
                                    <Link to={nameLink}><h4>{name}</h4></Link>
                                    <div><small>{writer}</small></div>
                                    <h5><span>{price}</span></h5>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }

            <div className="feature-border container"></div>
            {/* swiper pagination */}
            <div className="swiper-pagination"></div>
            {/* view all profuct */}
            <Link to='*' className='btn feature-btn'>
            View all products <BsArrowReturnRight />
            </Link>
        </Swiper>
        </div>
    </section>
  )
}

export default FeaturedBooks;